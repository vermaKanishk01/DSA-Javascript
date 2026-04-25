// write a program that returns the second largest number in an array.
let arr = [5, 0, 10, 8, 111, 1];

function largestNumber() {
    let largest = arr[0];
    let secondLargest = arr[0];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > largest) {
            secondLargest = largest;
            largest = arr[i];
        } else if (arr[i] > secondLargest && arr[i] !== largest) {
            secondLargest = arr[i];
        }
    }

    return secondLargest;
}

console.log(largestNumber()); // 10