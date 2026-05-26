export function FilterChip0({ label, active }: { label: string; active: boolean }) {
  return { label, active, variant: active ? "default" : "outline", chipId: 0 };
}
