/**
 * IMPORTANT NOTE - arrow functions cannot be used as a constructor in js as they lack the prototype property, which means the this binding won't work here.
 * Instead you have to use normal function definition to do the same operation
 */

//Getting the input data and printing
const fs = require('fs');

fs.readFile("01.txt","utf-8", (err,data) => {
    const arr = data.split("\n").map((row) => row.trim());
    console.log(arr);
    console.log(`Length - ${arr.length}`); // ES6 convention
    let il = arr.length;
    
    let pos = 50;
    let count = 0;

    for(const move of arr){
        const dir = move[0];
        const steps = parseInt(move.substring(1),10);

        if(dir === "L"){
            pos = (pos-steps)%100;
            if(pos<0) {
                pos+=100;
            }
        }
        else if (dir === "R"){
            pos = (pos+steps)%100;
        }

        if(pos === 0){
            count++;
        }
    }  

    console.log(count);

})



