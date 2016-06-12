// Given stack push order, determine whether stack pop order is possible or not.
// i.e. [1,2,3,4,5]   [4,5,3,2,1] , [4,3,5,1,2]


function IsStackOrderPossible(pushOrder: number[], popOrder: number[]):boolean {
    if ((!pushOrder) || (!popOrder) || (pushOrder.length !== popOrder.length)) {
        return false;
    }
    let length = pushOrder.length;
    // pushOrder.length must == popOrder.length

    let stack = [];
    let pointerPushOrder = 0;
    let pointerPopOrder = 0;
    //length > 0

    for (pointerPopOrder = 0; pointerPopOrder < length; pointerPopOrder++) {
        
        if (stack[stack.length - 1] === popOrder[pointerPopOrder]) { // match and move to next one.
            stack.pop();

        } else if ( pointerPushOrder >= length) { //nothing left in push order array
            break;

        } else {
            while (pointerPushOrder < length ) {


                if(popOrder[pointerPopOrder] === pushOrder[pointerPushOrder]) { // match and move to next one.
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
console.log(IsStackOrderPossible([1,2,3,4,5], [4,3,5,1,2]));