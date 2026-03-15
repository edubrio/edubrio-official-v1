export default function convertData(data: any) {
  const rows = data;
  const headers = rows[0];
  const values = rows.slice(1);

  const mappedData = values.map((row: any) => {
    const obj: Record<string, string> = {};
    headers.forEach((header: any, i: number) => {
      const key = String(header).toLowerCase().replace(/\s+/g, "");
      obj[key] = row[i] || "";
    });
    return obj;
  });

  return mappedData;
}
