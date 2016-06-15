// reverse String

let reverseString = function(s: string): string { // let function be immutable.
    let newString = "";
    for (let i = s.length - 1; i >= 0; i--) {
        newString = newString.concat(s[i]);
    }

    return newString;
};


//test case

console.log(reverseString("abcdefghijk"));