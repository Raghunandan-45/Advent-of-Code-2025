const fs = require('fs');

fs.readFile("03.txt","utf-8", (err,data) => {
    const arr = data.split("\n").map((row) => row.split(','));
    const ranges = arr.flat();
    console.log(ranges);
    let len = ranges.length;

    let sum = 0;
    
    for(let i = 0;i<len;i++){
        let p1 = ranges[i][0];
        for(let j = 1;j < ranges[i].length-1;j++){
            p1 = Math.max(ranges[i][j],p1);

        }
        let index = ranges[i].indexOf(p1);
        console.log(`Index - ${index}`);
        
        let p2 = ranges[i][index+1];
        p2 = Number(p2)
        console.log(typeof index);
        for(let j = index+2;j<ranges[i].length;j++){
            p2 = Math.max(ranges[i][j],p2);
        }
        sum+=(p1*10+p2);
    }
    console.log(sum);


})  