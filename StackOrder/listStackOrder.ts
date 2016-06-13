// Given push order, list possible pop order.
//[1,2,3,4,5,6,7]



function listStackOrder(pushOrder: number[], inStack: number[], path: number[]):void {
    if (pushOrder.length == 0) { //nothing left to push
        console.log(path.slice().concat(inStack.slice().reverse()));
        return;
    }

    //foreach situation for inStack
    //pop up elements from inStack and apending to path
    // After pop up, also push one more element into the stack
    for (let i = 0; i < inStack.length; i++) {
        let newStack = inStack.slice();
        let newPath = path.slice();
        for (let j = 0; j < i + 1; j++) { // pop (i + 1) times.
            newPath.push(newStack.pop());
            
        } 
        newStack.push(pushOrder[0]);
        listStackOrder(pushOrder.slice(1), newStack, newPath);
    }

    let nextElement = pushOrder[0];
    let newStack = inStack.slice();
    newStack.push(nextElement);
    listStackOrder(pushOrder.slice(1),newStack,path); 

}

listStackOrder([1,2,3,4,5,6,7],[],[]);