export interface DocTreeNode5 {
  path: string;
  name: string;
  depth: number;
  children: DocTreeNode5[];
}

export function buildDocSubtree5(root: string): DocTreeNode5 {
  return {
    path: root,
    name: root.split("/").pop() ?? root,
    depth: 0,
    children: [],
  };
}
