export interface DocTreeNode0 {
  path: string;
  name: string;
  depth: number;
  children: DocTreeNode0[];
}

export function buildDocSubtree0(root: string): DocTreeNode0 {
  return {
    path: root,
    name: root.split("/").pop() ?? root,
    depth: 0,
    children: [],
  };
}
