export interface DocTreeNode10 {
  path: string;
  name: string;
  depth: number;
  children: DocTreeNode10[];
}

export function buildDocSubtree10(root: string): DocTreeNode10 {
  return {
    path: root,
    name: root.split("/").pop() ?? root,
    depth: 0,
    children: [],
  };
}
