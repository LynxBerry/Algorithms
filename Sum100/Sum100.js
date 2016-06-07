//print all the combination 1,2...9 
// 1 + 2 + 3 + 45 + 6 + 7 + 8 + 9
//It is not best solution.
function sum100(n, path, op) {
    if (n == 9) {
        if (eval(path + "+" + n.toString()) == 100) {
            console.log(path + "+" + n.toString());
        }
        if (eval(path + "-" + n.toString()) == 100) {
            console.log(path + "-" + n.toString());
        }
        if (eval(path + n.toString()) == 100) {
            console.log(path + n.toString());
        }
        return;
    }
    else {
        if (n == 1) {
            sum100(n + 1, "1", "");
        }
        else {
            if (eval(path + "+" + n.toString()) < 100) {
                sum100(n + 1, path + "+" + n.toString(), "+");
            }
            ;
            if (eval(path + n.toString()) < 100) {
                sum100(n + 1, path + n.toString(), "");
            }
            sum100(n + 1, path + "-" + n.toString(), "-");
        }
    }
}
sum100(1, "", "");
//# sourceMappingURL=Sum100.js.map