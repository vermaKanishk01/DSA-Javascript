// remove all element z from the array and return the array.

function removeElement(arr, element){
    let x = 0;
    for(let i=0; i<arr.length; i++){
        if(arr[i] !== element){
            arr[x] = arr[i];
            x = x + 1
        }
    }
    arr.length = x;
    return arr;
}

let arr = [1, 2, 5, 2, 0, 9, 3, 8];
console.log(removeElement(arr, 2));