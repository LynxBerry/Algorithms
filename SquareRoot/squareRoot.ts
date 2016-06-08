//Problem: http://www.codeabbey.com/index/task_view/square-root

function squareRoot(x:number, n:number):number {
    let r = 1;
    console.log("calcuate square root for x %d", x);
    console.log(r);
    for(let i = 0; i < n; i++)
    {
         r = (r + x / r) / 2;
         console.log(r);
    }
  
    return r;
}

squareRoot(9, 15);