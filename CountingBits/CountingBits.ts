// https://leetcode.com/problems/counting-bits/

let countBits = function (num: number): number[] {
    let resultArray:number[] = [0]; // init
    let count = 1;

    while (count <= num)
    {
        let length = resultArray.length;
        for (let i = 0; i < length; i++) {
            resultArray.push(resultArray[i] + 1);
            count++;

            if (count > num) {
                break;
            }
        }
    }

    return resultArray;



}

console.log(countBits(5));