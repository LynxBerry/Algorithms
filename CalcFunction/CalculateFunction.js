// sum from k = 1 to 10^6 (-1) ^ k+1 / 2k -1
var object = { up: 0, down: 1 };
function gcd(a, b) {
    if (!b) {
        return a;
    }
    return gcd(b, a % b);
}
;
function calcFunction(k) {
    for (var i = 1; i <= k; i++) {
        var downNumber = 2 * i - 1; //next downNumber
        var newObject = { up: 1 * object.down, down: object.down * downNumber };
        object.up = object.up * downNumber;
        object.down = object.down * downNumber;
        if (i % 2 == 0) {
            object.up = object.up - newObject.up;
        }
        else {
            object.up = object.up + newObject.up;
        }
        var tempGcd = gcd(object.up, object.down);
        object.up = object.up / tempGcd;
        object.down = object.down / tempGcd;
        console.log("%d/%d", object.up, object.down);
    }
    return object.up / object.down;
}
console.log(calcFunction(1000000));
//# sourceMappingURL=CalculateFunction.js.map