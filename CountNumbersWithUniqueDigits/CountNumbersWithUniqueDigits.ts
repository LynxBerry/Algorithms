// https://leetcode.com/problems/count-numbers-with-unique-digits/
// Given a non-negative integer n, count all numbers with unique digits, x, where 0 ≤ x < 10^n
// solution: https://leetcode.com/discuss/107981/backtracking-solution

function CountNumbersWithUniqueDigits(n: number):number {
    if(n > 10) {
        return CountNumbersWithUniqueDigits(10);
    }
    let count = 0;
    let bitMask:boolean[] = new Array(10);
    let maxNumber = Math.pow(10, n);
    for(let i = 0; i < 10; i++ ) { bitMask[i] = false; }
    
    count++; //for number 0

    for (let i = 1; i < 10; i ++) { // start from 1 because 0 cannot start as number.
        bitMask[i] = true;
        count += countInner(i, bitMask, maxNumber);
        bitMask[i] = false; //reset bitMask for i to un-used.

    }

    return count; 

    function countInner(cur:number, bitMask:boolean[], maxNumber):number {
        let count = 0;
        if (cur < maxNumber) {
            count++;
        } else {
            return 0;
        }

        for (let i = 0; i < 10; i++) { // start from 0, which is OK.
            if(!bitMask[i]) { // if that digit is not used.
                bitMask[i] = true;
                count += countInner(cur * 10 + i,bitMask,maxNumber);
                bitMask[i] = false;
            }
        }

        return count;
    }


}

for (let i = 0; i <= 10; i++) {
    console.log(i, ":", CountNumbersWithUniqueDigits(i));
}

