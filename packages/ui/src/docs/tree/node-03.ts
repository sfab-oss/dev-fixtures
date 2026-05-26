export interface DocTreeNode3 {
  path: string;
  name: string;
  depth: number;
  children: DocTreeNode3[];
}

export function buildDocSubtree3(root: string): DocTreeNode3 {
  return {
    path: root,
    name: root.split("/").pop() ?? root,
    depth: 3,
    children: [],
  };
}
