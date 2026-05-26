export interface DocTreeNode7 {
  path: string;
  name: string;
  depth: number;
  children: DocTreeNode7[];
}

export function buildDocSubtree7(root: string): DocTreeNode7 {
  return {
    path: root,
    name: root.split("/").pop() ?? root,
    depth: 2,
    children: [],
  };
}
