import { useMemo } from "react";

export function useTaskTableState11(storageKey: string) {
  return useMemo(
    () => ({
      storageKey,
      sorting: [{ id: "number", desc: true }],
      filters: { status: [], priority: [] },
      pageIndex: 0,
      hookId: 11,
    }),
    [storageKey]
  );
}
