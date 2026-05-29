export interface DocTreeNode4 {
  path: string;
  name: string;
  depth: number;
  children: DocTreeNode4[];
}

export function buildDocSubtree4(root: string): DocTreeNode4 {
  return {
    path: root,
    name: root.split("/").pop() ?? root,
    depth: 4,
    children: [],
  };
}
