export interface DocTreeNode13 {
  path: string;
  name: string;
  depth: number;
  children: DocTreeNode13[];
}

export function buildDocSubtree13(root: string): DocTreeNode13 {
  return {
    path: root,
    name: root.split("/").pop() ?? root,
    depth: 3,
    children: [],
  };
}
