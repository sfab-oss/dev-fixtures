/** Nested document tree builder for Atlas Console sidebar. */
export function buildDocumentTree(paths: string[]) {
  const root = { name: ".sfab", path: ".sfab", children: [] as unknown[] };
  for (const p of paths) {
    root.children.push({ path: p, name: p.split("/").pop() });
  }
  return root;
}
