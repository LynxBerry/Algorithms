//Problem: http://www.codeabbey.com/index/task_view/square-root
function squareRoot(x, n) {
    var r = 1;
    console.log("calcuate square root for x %d", x);
    console.log(r);
    for (var i = 0; i < n; i++) {
        r = (r + x / r) / 2;
        console.log(r);
    }
    return r;
}
squareRoot(9, 15);
//# sourceMappingURL=squareRoot.js.map