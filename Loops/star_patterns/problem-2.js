let n = 4;

for(i=0; i<n; i++){
    let row = "";
    for(j=0; j<=i; j++){ // here we can also use j<i+1
        row = row + "*";
    }
    console.log(row);
}

// output :- 
// *
// **
// ***
// ****