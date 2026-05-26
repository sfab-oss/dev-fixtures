export function FilterChip6({ label, active }: { label: string; active: boolean }) {
  return { label, active, variant: active ? "default" : "outline", chipId: 6 };
}
