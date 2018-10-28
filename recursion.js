function recursion (tree) {
    let arr = [];
    let level = 0;
    (function result (node) {
        if (node.left) {
            level = level + 1;
            result (node.left);
            level = level - 1;
        }
        if (node.right) {
            level = level + 1;
            result (node.right);
            level = level - 1;
        }
        if (!arr[level]) {
            arr[level] = [];
        }
        arr[level].push(node.value);
    } (tree));
    return arr;
}