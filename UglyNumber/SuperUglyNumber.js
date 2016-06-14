// https://leetcode.com/problems/super-ugly-number/
// still can improve the performance.
var nthSuperUglyNumber = function (n, primes) {
    function miniNum(array) {
        var mini = array[0];
        var length = array.length;
        for (var i = 0; i < length; i++) {
            mini = array[i] < mini ? array[i] : mini;
        }
        return mini;
    }
    //console.log(miniNum([55, 2, 4, 7, 8, 13, 14, 16, 19, 26, 28, 32]));
    if (n > 0) {
        var arrayUglyNum = [1]; // storing ugly numbers.
        var maxNum = arrayUglyNum[arrayUglyNum.length - 1]; //max number in the array.
        var markers = {};
        for (var i = 0; i < primes.length; i++) {
            markers[primes[i]] = 0;
        }
        for (var i = 1; i < n; i++) {
            var numbersT = []; // array of numbers from T markers.
            for (var j = 0; j < primes.length; j++) {
                var numT = arrayUglyNum[markers[primes[j]]]; // init
                numbersT.push(numT * primes[j]); // init
                while (numT * primes[j] <= maxNum) {
                    markers[primes[j]]++;
                    numT = arrayUglyNum[markers[primes[j]]];
                    numbersT[j] = numT * primes[j];
                }
            }
            maxNum = miniNum(numbersT);
            arrayUglyNum.push(maxNum);
        }
        //console.log(arrayUglyNum);
        return arrayUglyNum[arrayUglyNum.length - 1];
    }
    return null;
};
console.log(nthSuperUglyNumber(10, [2, 3, 5]));
//# sourceMappingURL=SuperUglyNumber.js.map