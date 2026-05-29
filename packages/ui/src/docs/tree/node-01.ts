export interface DocTreeNode1 {
  path: string;
  name: string;
  depth: number;
  children: DocTreeNode1[];
}

export function buildDocSubtree1(root: string): DocTreeNode1 {
  return {
    path: root,
    name: root.split("/").pop() ?? root,
    depth: 1,
    children: [],
  };
}
