export function searchByName(data: any[], query: string): any[] {
  if (!query.trim()) return data;

  const lowerCaseQuery = query.toLowerCase();

  return data.filter(
    (item) => item.name && item.name.toLowerCase().includes(lowerCaseQuery)
  );
}
