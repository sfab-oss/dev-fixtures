export interface DocTreeNode14 {
  path: string;
  name: string;
  depth: number;
  children: DocTreeNode14[];
}

export function buildDocSubtree14(root: string): DocTreeNode14 {
  return {
    path: root,
    name: root.split("/").pop() ?? root,
    depth: 4,
    children: [],
  };
}
