// Write a program that reverses the given integer.

function reverseInterger(n){
    let nCopy = n;
    n = Math.abs(n);

    let rev = 0;
    while(n>0){
        let rem = n%10; // rem gives us the last digit of the integer.
        rev = (10 * rev) + rem;
        n = Math.floor(n/10);
    }
    return (nCopy < 0) ? -rev : rev;
}

let num = 134;
let result = reverseInterger(num);
console.log(result);