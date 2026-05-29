export interface DocTreeNode6 {
  path: string;
  name: string;
  depth: number;
  children: DocTreeNode6[];
}

export function buildDocSubtree6(root: string): DocTreeNode6 {
  return {
    path: root,
    name: root.split("/").pop() ?? root,
    depth: 1,
    children: [],
  };
}
