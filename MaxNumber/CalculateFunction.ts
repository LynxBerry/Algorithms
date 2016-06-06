// sum from k = 1 to 10^6 (-1) ^ k+1 / 2k -1
let object = { up: 0, down: 1};

function gcd(a: number, b: number): number {
    if ( !b ) {
        return a;
    }
    
    return gcd(b, a % b);
        
};

function calcFunction(k: number): number {
    for(let i = 1; i <= k; i++)
    {
        
        
        let downNumber = 2 * i - 1; //next downNumber
        let newObject = { up: 1 * object.down , down: object.down * downNumber};
        object.up = object.up * downNumber;
        object.down = object.down * downNumber;
        if(i%2 == 0) // if even(i) -> - 
        {
            object.up = object.up - newObject.up;
        }
        else // if odd(i) -> +
        {
            object.up = object.up + newObject.up;
        }
        
        let tempGcd = gcd(object.up, object.down);
        
        object.up = object.up / tempGcd;
        object.down = object.down / tempGcd;
        
        console.log("%d/%d",object.up, object.down);
        
    }
    
    return object.up/object.down;
}

console.log(calcFunction(1000000));
