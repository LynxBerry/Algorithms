// Reverse a given list. Do not use extra storage

let list: any[] = [3,4,5,6,8]


function reverseList(array: any[])
{
    let length = array.length;
    let halflength = Math.floor(length / 2);
    let temp;

    for (let i = 0; i < halflength; i++)
    {
        temp = array[i];
        array[i] = array[length - 1 - i];
        array[length - 1 - i] = temp;
    }

}

reverseList(list);

console.log("The list is %s",list);