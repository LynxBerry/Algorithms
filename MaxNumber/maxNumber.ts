function maxNumber(input: number[]): number {
    let max: number;
    let length: number; 
    
    if(input && input.length > 0) // The input array cannot be null or empty list.
    { 
        max = input[0];
        length = input.length;
        
        for (let i = 0; i < length; i++)
        {
            max = max > input[i] ? max : input[i];
        
        }
        
    }
    
    return max; // If the input array is null or empty, return max equals undefined.
    
}

//Test cases.

console.log(maxNumber([1,2,3,4,5,6,7,8,8]));
console.log(maxNumber([1,2,3,4,5,6,7,88,8]));