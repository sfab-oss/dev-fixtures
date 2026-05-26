export interface DocTreeNode2 {
  path: string;
  name: string;
  depth: number;
  children: DocTreeNode2[];
}

export function buildDocSubtree2(root: string): DocTreeNode2 {
  return {
    path: root,
    name: root.split("/").pop() ?? root,
    depth: 2,
    children: [],
  };
}
