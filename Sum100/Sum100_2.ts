//print all the combination 1,2...9 
// 1 + 2 + 3 + 45 + 6 + 7 + 8 + 9

//It is not best solution.
function sum100_2(n: number, pendingNumber:string, path: string, result: number):void {
    if ( n == 9) {
        if((result + eval(pendingNumber)) == 100)
        {
            console.log(path);
        }

    } else {
        sum100_2(n + 1, "+" + (n + 1).toString(), path + "+" + (n + 1).toString(), result + eval(pendingNumber));
        sum100_2(n + 1, "-" + (n + 1).toString(), path + "-" + (n + 1).toString(), result + eval(pendingNumber));
        sum100_2(n + 1, pendingNumber + (n + 1).toString(), path + (n + 1).toString(), result);

    }

    

}

function sum100_3(n: number, path: string):void {
    if ( n == 9) {
        if(eval(path) == 100)
        {
            console.log(path);
        }

    } else {
        sum100_3(n + 1, path + "+" + (n + 1).toString());
        sum100_3(n + 1, path + "-" + (n + 1).toString());
        sum100_3(n + 1, path + (n + 1).toString());

    }

    

}

console.log("2nd solution");
//sum100_2(1, "+1", "1", 0);

//console.log("3rd solution");
sum100_3(1, "1");