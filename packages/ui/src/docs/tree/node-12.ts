export interface DocTreeNode12 {
  path: string;
  name: string;
  depth: number;
  children: DocTreeNode12[];
}

export function buildDocSubtree12(root: string): DocTreeNode12 {
  return {
    path: root,
    name: root.split("/").pop() ?? root,
    depth: 2,
    children: [],
  };
}
