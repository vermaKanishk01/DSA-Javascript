// Write a program to check if a number is palindrome or not.
function isPalindrome(n){

    let rev = 0;
    while(n>0){
        let rem = n%10;
        rev = (10*rev) + rem;
        n = Math.floor(n/10);
    }
    
    if(rev === num){
        return true;
    }else{
        return false;
    }
}

let num = 1241;
let result = isPalindrome(num);
console.log(result);