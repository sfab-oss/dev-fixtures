export function FilterChip1({ label, active }: { label: string; active: boolean }) {
  return { label, active, variant: active ? "default" : "outline", chipId: 1 };
}
