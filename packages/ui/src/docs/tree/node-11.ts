export interface DocTreeNode11 {
  path: string;
  name: string;
  depth: number;
  children: DocTreeNode11[];
}

export function buildDocSubtree11(root: string): DocTreeNode11 {
  return {
    path: root,
    name: root.split("/").pop() ?? root,
    depth: 1,
    children: [],
  };
}
