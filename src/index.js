module.exports.binarySearchTree = function(tree) {
    function check(node, min, max) {
        if (node === undefined) {
            return true;
        }
        if (node.value <= min || max <= node.value) {
            return false;
        }
        return (check(node.left, min, node.value) && check(node.right, node.value, max));
    };
    return check(tree, 0, 10000);
};
         