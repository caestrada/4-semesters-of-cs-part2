export const breadthFirstTraverse = (queue, array) => {
    if (!queue || !queue.length) return array;

    while (queue.length) {
        const node = queue.shift();
        array.push(node.value);

        if (node.left) queue.push(node.left);
        if (node.right) queue.push(node.right);
    }

    return array;
}

export const breadthFirstTraverseRecursive = (queue, array) => {
    // Base Case
    if (!queue.length) return array;

    // Recursive Case
    const node = queue.shift();
    array.push(node.value);
    if (node.left) queue.push(node.left);
    if (node.right) queue.push(node.right);
    return breadthFirstTraverseRecursive(queue, array);
}