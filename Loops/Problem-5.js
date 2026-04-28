// Write a function that returns the count of digits in a number

function countDigits(n){
    if(n == 0){
        return 1;
    }

    n = Math.abs(n); // change the negative number to positive number.

    let count = 0;
    while(n>0){
        n = Math.floor(n/10);
        count++;
    }
    console.log(count)
}

let num = 282345459;
let result = countDigits(num);