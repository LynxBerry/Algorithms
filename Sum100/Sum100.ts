//print all the combination 1,2...9 
// 1 + 2 + 3 + 45 + 6 + 7 + 8 + 9

//It is not best solution.
function sum100(n: number, path: string):void {
    if ( n == 9) {
        if(eval(path + "+" + n.toString()) == 100)
        {
            console.log(path + "+" + n.toString());
        }
        
        if(eval(path + "-" + n.toString()) == 100)
        {
            console.log(path + "-" + n.toString());
        }
        
        if(eval(path + n.toString()) == 100)
        {
            console.log(path + n.toString());
        }
        
        return;

    } else {
        if (n == 1) {
            sum100(n + 1, "1");

        } else {
            sum100(n + 1, path + "+" + n.toString());
            sum100(n + 1, path + n.toString());
            sum100(n + 1, path + "-" + n.toString());
        }

    }

}


console.log("first solution:");
sum100(1,"");