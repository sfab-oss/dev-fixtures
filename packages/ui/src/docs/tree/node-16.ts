export interface DocTreeNode16 {
  path: string;
  name: string;
  depth: number;
  children: DocTreeNode16[];
}

export function buildDocSubtree16(root: string): DocTreeNode16 {
  return {
    path: root,
    name: root.split("/").pop() ?? root,
    depth: 1,
    children: [],
  };
}
