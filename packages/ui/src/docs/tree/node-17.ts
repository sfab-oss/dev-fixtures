export interface DocTreeNode17 {
  path: string;
  name: string;
  depth: number;
  children: DocTreeNode17[];
}

export function buildDocSubtree17(root: string): DocTreeNode17 {
  return {
    path: root,
    name: root.split("/").pop() ?? root,
    depth: 2,
    children: [],
  };
}
