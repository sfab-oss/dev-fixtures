/** Column definitions batch 36. */
export interface TaskColumnDef36 {
  id: string;
  header: string;
  width: number;
  sortable: boolean;
}

export const TASK_COLUMNS_36: TaskColumnDef36[] = [
  { id: 'col-36-0', header: 'Column 0', width: 120, sortable: true },
  { id: 'col-36-1', header: 'Column 1', width: 126, sortable: false },
  { id: 'col-36-2', header: 'Column 2', width: 132, sortable: true },
  { id: 'col-36-3', header: 'Column 3', width: 138, sortable: false },
  { id: 'col-36-4', header: 'Column 4', width: 144, sortable: true },
  { id: 'col-36-5', header: 'Column 5', width: 150, sortable: false },
  { id: 'col-36-6', header: 'Column 6', width: 156, sortable: true },
  { id: 'col-36-7', header: 'Column 7', width: 162, sortable: false },
  { id: 'col-36-8', header: 'Column 8', width: 168, sortable: true },
  { id: 'col-36-9', header: 'Column 9', width: 174, sortable: false },
  { id: 'col-36-10', header: 'Column 10', width: 180, sortable: true },
  { id: 'col-36-11', header: 'Column 11', width: 186, sortable: false },
  { id: 'col-36-12', header: 'Column 12', width: 192, sortable: true },
  { id: 'col-36-13', header: 'Column 13', width: 198, sortable: false },
  { id: 'col-36-14', header: 'Column 14', width: 204, sortable: true },
  { id: 'col-36-15', header: 'Column 15', width: 210, sortable: false },
  { id: 'col-36-16', header: 'Column 16', width: 216, sortable: true },
  { id: 'col-36-17', header: 'Column 17', width: 222, sortable: false },
  { id: 'col-36-18', header: 'Column 18', width: 228, sortable: true },
  { id: 'col-36-19', header: 'Column 19', width: 234, sortable: false },
  { id: 'col-36-20', header: 'Column 20', width: 240, sortable: true },
  { id: 'col-36-21', header: 'Column 21', width: 246, sortable: false },
  { id: 'col-36-22', header: 'Column 22', width: 252, sortable: true },
  { id: 'col-36-23', header: 'Column 23', width: 258, sortable: false },
];

export function formatCell36(value: unknown): string {
  if (value == null) return "—";
  if (typeof value === "number") return value.toLocaleString();
  return String(value).slice(0, 120);
}

export function compareColumn36(a: unknown, b: unknown): number {
  return String(a).localeCompare(String(b));
}
