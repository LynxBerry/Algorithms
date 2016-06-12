// Given stack push order, determine whether stack pop order is possible or not.
// i.e. [1,2,3,4,5]   [4,5,3,2,1] , [4,3,5,1,2]
function IsStackOrderPossible(pushOrder, popOrder) {
    if ((!pushOrder) || (!popOrder) || (pushOrder.length !== popOrder.length)) {
        return false;
    }
    var length = pushOrder.length;
    // pushOrder.length must == popOrder.length
    var stack = [];
    var pointerPushOrder = 0;
    var pointerPopOrder = 0;
    //length > 0
    for (pointerPopOrder = 0; pointerPopOrder < length; pointerPopOrder++) {
        if (stack[stack.length - 1] === popOrder[pointerPopOrder]) {
            stack.pop();
        }
        else if (pointerPushOrder >= length) {
            break;
        }
        else {
            while (pointerPushOrder < length) {
                if (popOrder[pointerPopOrder] === pushOrder[pointerPushOrder]) {
                    pointerPushOrder++;
                    break;
                }
                stack.push(pushOrder[pointerPushOrder]);
                pointerPushOrder++;
            }
        }
    } // for each element in popOrder;
    if ((stack.length == 0) && (pointerPopOrder == length)) {
        return true;
    }
    return false;
}
console.log("test3");
console.log(IsStackOrderPossible([1, 2, 3, 4, 5], [4, 3, 5, 1, 2]));
//# sourceMappingURL=stackOrder.js.map