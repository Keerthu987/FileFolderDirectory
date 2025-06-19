import React from "react";

const useTraverseTree = () => {
  const insertNode = function (tree, folderID, item, isFolder) {
    if (tree.id == folderID && tree.isFolder) {
      const newNode = {
        id: new Date().getTime(),
        name: item,
        isFolder: isFolder,
        items: [],
      };
      return {
        ...tree,
        items: [newNode, ...tree.items], // immutably insert at front
      };
    }
    return {
      ...tree,
      items: tree.items.map((ob) => insertNode(ob, folderID, item, isFolder)),
    };
  };
  return { insertNode };
};

export default useTraverseTree;
