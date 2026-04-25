// write a function that searches for an element in an array and returns the index, if the element is not present just return -1.

function searchElement(ele){
    for(let i=0; i<arr.length; i++){
        if(arr[i] === ele){
            return i;
        }
    }
    return -1;
}
let arr = [1, 2, 3, 4, 5, 6, 7, 8];


console.log(searchElement(8))