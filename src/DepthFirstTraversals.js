export const preorderTraverse = (node, array) => {
    // Base Case
    if (!node) return array;

    // Recursive Case
    array.push(node.value);
    array = preorderTraverse(node.left, array);
    array = preorderTraverse(node.right, array);
    return array;
};

export const inorderTraverse = (node, array) => {
    // Base Case
    if (!node) return array;

    // Recursive Case
    array = inorderTraverse(node.left, array);
    array.push(node.value);
    array = inorderTraverse(node.right, array);
    return array;
};

export const postorderTraverse = (node, array) => {
    // Base Case
    if (!node) return array;

    // Recursive Case
    array = postorderTraverse(node.left, array);
    array = postorderTraverse(node.right, array);
    array.push(node.value);
    return array;
};