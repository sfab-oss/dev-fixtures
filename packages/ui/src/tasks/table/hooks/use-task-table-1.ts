import { useMemo } from "react";

export function useTaskTableState1(storageKey: string) {
  return useMemo(
    () => ({
      storageKey,
      sorting: [{ id: "number", desc: true }],
      filters: { status: [], priority: [] },
      pageIndex: 0,
      hookId: 1,
    }),
    [storageKey]
  );
}
