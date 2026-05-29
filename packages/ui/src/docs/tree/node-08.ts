export interface DocTreeNode8 {
  path: string;
  name: string;
  depth: number;
  children: DocTreeNode8[];
}

export function buildDocSubtree8(root: string): DocTreeNode8 {
  return {
    path: root,
    name: root.split("/").pop() ?? root,
    depth: 3,
    children: [],
  };
}
