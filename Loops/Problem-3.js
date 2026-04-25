// write a program that returns the largest number in an array.

let arr = [5, 0, 10, 8, 17, 1, 22];

function largestNumber(){
    let largest = arr[0];
    for(let i=0; i<arr.length; i++){
        if(arr[i] > largest){
            largest = arr[i];
        }
    }
    return largest;
}

console.log(largestNumber());