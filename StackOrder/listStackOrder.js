// Given push order, list possible pop order.
//[1,2,3,4,5,6,7]
function listStackOrder(pushOrder, inStack, path) {
    if (pushOrder.length == 0) {
        console.log(path.slice().concat(inStack.slice().reverse()));
        return;
    }
    //foreach situation for inStack
    //pop up elements from inStack and apending to path
    // After pop up, also push one more element into the stack
    for (var i = 0; i < inStack.length; i++) {
        var newStack_1 = inStack.slice();
        var newPath = path.slice();
        for (var j = 0; j < i + 1; j++) {
            newPath.push(newStack_1.pop());
        }
        newStack_1.push(pushOrder[0]);
        listStackOrder(pushOrder.slice(1), newStack_1, newPath);
    }
    var nextElement = pushOrder[0];
    var newStack = inStack.slice();
    newStack.push(nextElement);
    listStackOrder(pushOrder.slice(1), newStack, path);
}
listStackOrder([1, 2, 3, 4, 5, 6, 7], [], []);
//# sourceMappingURL=listStackOrder.js.map