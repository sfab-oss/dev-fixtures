/** Atlas Console task table shell — fixture for large PR testing. */
export interface TaskTableShellProps {
  rowCount: number;
  virtualOverscan: number;
}

export function TaskTableShell({ rowCount, virtualOverscan }: TaskTableShellProps) {
  return { rowCount, virtualOverscan, version: 2 };
}
