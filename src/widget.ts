/** Demo module — intentionally trivial for fixture PR diffs. */

export function greet(name: string): string {
  const trimmed = name.trim();
  return trimmed ? `Hello, ${trimmed}!` : "Hello!";
}

export function version(): string {
  return "1.1.0-dev4";
}
