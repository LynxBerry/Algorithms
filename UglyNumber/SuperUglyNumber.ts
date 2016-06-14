// https://leetcode.com/problems/super-ugly-number/
// still can improve the performance.
let nthSuperUglyNumber = function(n: number, primes: number[]) {
    function miniNum(array: number[]):number {
        let mini = array[0];
        let length = array.length;

        for (let i = 0; i < length; i++ ) {
            mini = array[i] < mini ? array[i] : mini;
        }
        return mini;

    } 

    //console.log(miniNum([55, 2, 4, 7, 8, 13, 14, 16, 19, 26, 28, 32]));

    if (n > 0) {
        let arrayUglyNum = [1]; // storing ugly numbers.
        let maxNum = arrayUglyNum[arrayUglyNum.length - 1]; //max number in the array.
        let markers = {};
 
        for (let i = 0; i < primes.length; i++) { // init markers 
            markers[primes[i]] = 0;
        }
        

        for (let i = 1; i < n; i++) { //starting from 1;
            let numbersT = []; // array of numbers from T markers.
            for (let j = 0; j < primes.length; j++) {

                let numT = arrayUglyNum[markers[primes[j]]]; // init
                numbersT.push(numT * primes[j]);  // init
                while (numT * primes[j] <= maxNum) { // make numT just larger than maxNum
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


}

console.log(nthSuperUglyNumber(10,[2,3,5] ));
