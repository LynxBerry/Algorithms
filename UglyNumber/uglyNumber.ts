// Test if it is ugly number.
// Generate ugly number.

// 1 is first ugly number. The afterwards number must contains and only contains 2, 3 or 5 as factors.
function isUglyNumber(num: number): boolean { //https://leetcode.com/problems/ugly-number/
    let result = false;
    if (num > 0) { // We need to exclude number that <= 0.

        /* Try to let this number be divided by 2, 3 and 5 as many times as possible. */
        while (num % 2 === 0) {
            num /= 2;
        }

        while (num % 3 === 0) {
            num /= 3;
        }

        while (num % 5 === 0) {
            num /= 5;
        }

        if (num === 1) { result = true; } // If the final remainder is zero, it means it is ugly number.

    }
    return result;
} 


// https://leetcode.com/problems/ugly-number-ii/
function genNthUglyNumber(n: number): number { //n means nth ugly number.
    function miniNum(t2: number, t3: number, t5: number):number {
        let mini = 0;
        if (t2 < t3) {
            mini = t2;
        } else {
            mini = t3;
        }

        if (t5 < mini) {
            // marker no change
            mini = t5;
        }
        //markers[marker]++; //maybe unecessary
        return mini;


    }

    if(n > 0)
    {
        let arrayUglyNum = [1]; //array for storing ugly numbers.
        let maxNum = arrayUglyNum[arrayUglyNum.length - 1]; //max number in the array.
        let markers = {t2:0, t3: 0, t5: 0}; // They are the markers.

        for (let i = 1; i < n; i++) { //starting from 1;
            let numT2 = arrayUglyNum[markers.t2];
            while (numT2 * 2 <= maxNum) {// make numT2 just larger than maxNum                
                markers.t2++;
                numT2 = arrayUglyNum[markers.t2];
            }

            let numT3 = arrayUglyNum[markers.t3];           
            while (numT3 * 3 <= maxNum) { // make numT2 just larger than maxNum
                markers.t3++;
                numT3 = arrayUglyNum[markers.t3];
            }

            let numT5 = arrayUglyNum[markers.t5];           
            while (numT5 * 5 <= maxNum) { // make numT2 just larger than maxNum
                markers.t5++;
                numT5 = arrayUglyNum[markers.t5];
            }


            maxNum = miniNum(numT2 * 2, numT3 * 3, numT5 * 5);
            arrayUglyNum.push(maxNum);

        }

        //console.log(arrayUglyNum);
        return arrayUglyNum[arrayUglyNum.length - 1];


    }
    return null;

}



//test case for isUglyNumber
console.log("Ugly Number:")
console.log(isUglyNumber(0)); //false
console.log(isUglyNumber(-5)); //false
console.log(isUglyNumber(2)); //true
console.log(isUglyNumber(5)); //true
console.log(isUglyNumber(10)); //true
console.log(isUglyNumber(30)); //true
console.log(isUglyNumber(14)); //true

console.log("The nth ugly number:");
console.log(genNthUglyNumber(10));