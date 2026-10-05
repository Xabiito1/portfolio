const monthFormatter = new Intl.DateTimeFormat("en-US", {
  month: "short",
  year: "numeric",
  timeZone: "UTC",
});

/** "2025-01" → "Jan 2025" */
export function formatMonth(value: string): string {
  const [year, month] = value.split("-").map(Number);
  return monthFormatter.format(new Date(Date.UTC(year, (month ?? 1) - 1, 1)));
}
