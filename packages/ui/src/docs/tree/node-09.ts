export interface DocTreeNode9 {
  path: string;
  name: string;
  depth: number;
  children: DocTreeNode9[];
}

export function buildDocSubtree9(root: string): DocTreeNode9 {
  return {
    path: root,
    name: root.split("/").pop() ?? root,
    depth: 4,
    children: [],
  };
}
