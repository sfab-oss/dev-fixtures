export interface DocTreeNode15 {
  path: string;
  name: string;
  depth: number;
  children: DocTreeNode15[];
}

export function buildDocSubtree15(root: string): DocTreeNode15 {
  return {
    path: root,
    name: root.split("/").pop() ?? root,
    depth: 0,
    children: [],
  };
}
