"use client";
import React, { useEffect, useState } from 'react';

const GoogleSheetDataFetcher = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  const sheetId = '1wRJXotgsLPGPKmy1I-YoZNJzOPK8-FiJMtekYhX2e34'; // Replace with your Google Sheet ID
  const apiKey = 'AIzaSyA8NPgaAJM9nxLUhwNfFFfy4x0TRkAO0qY';   // Replace with your API key

  const fetchData = async () => {
    const sheetRange = 'Sheet1!A1:E10'; // Adjust the range as needed
    const url = `https://sheets.googleapis.com/v4/spreadsheets/${sheetId}/values/${sheetRange}?key=${apiKey}`;

    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error('Failed to fetch data from Google Sheets');
      }
      const result = await response.json();
      console.log(result.values);
      setData(result.values);  // Assuming the sheet data is in a 2D array
    } catch (err : any) {
      setError(err.message);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className='bg-white h-screen w-full flex flex-col items-center justify-center p-4'>
      <h2>Google Sheet Data</h2>
      {error && <p>Error: {error}</p>}
      <table>
        <thead>
          <tr>
            <th>Column 1</th>
            <th>Column 2</th>
            <th>Column 3</th>
            <th>Column 4</th>
            <th>Column 5</th>
          </tr>
        </thead>
        <tbody>
          {data.length > 0 ? (
            data.map((row :any, index) => (
              <tr key={index}>
                {row?.map((cell : any, cellIndex : any) => (
                  <td key={cellIndex}>{cell}</td>
                ))}
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={5}>No data available</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default GoogleSheetDataFetcher;