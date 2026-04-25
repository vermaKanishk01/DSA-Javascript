// write a program that returns the nuber of negative numbers in an array

let arr = [1, 2, -1, -2, -4, -5, 2, 4, 5];

function negativeNumber(){
    let count = 0;
    for(let i=0; i<arr.length; i++){
        if(arr[i] < 0){
            count++;
        }
    }
    return count;
}

console.log(negativeNumber());