import { useEffect, useState } from 'react';

interface GoogleSheetDataHook {
  data: string[][];
  error: string | null;
  loading: boolean;
}

export const useData = (
  sheetId: string,
  apiKey: string,
  sheetRange: string = 'Sheet1!A1:E10'
): GoogleSheetDataHook => {
  const [data, setData] = useState<string[][]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      const url = `https://sheets.googleapis.com/v4/spreadsheets/${sheetId}/values/${sheetRange}?key=${apiKey}`;
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error('Failed to fetch data from Google Sheets');
        }
        const result = await response.json();
        setData(result.values || []);
        setError(null);
      } catch (err: any) {
        setError(err.message);
        setData([]);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [sheetId, apiKey, sheetRange]);

  return { data, error, loading };
};
