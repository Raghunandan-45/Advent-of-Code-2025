    const fs = require('fs');

    fs.readFile("02.txt","utf-8", (err,data) => {
        const arr = data.split("\n").map((row) => row.split(','));
        const ranges = arr.flat();
        console.log(ranges);

        let sum = 0;

        for(const range of ranges){
            if(!range){
                continue;
            }
            const [start,end] = range.split('-').map(Number);
            // console.log(start,end);
            
            for(let i=start;i<=end;i++){
                const s = i.toString();
                const len = s.length;

                let found = false;

                for (let j = 1; j <= Math.floor(len / 2); j++) {

                    if (len % j !== 0) continue;   // substring length must divide full length

                    const part = s.slice(0, j);
                    const repeated = part.repeat(len / j);

                    if (repeated === s) {
                        sum += i;
                        found = true;
                        break; // no need to check further j
                    }
                }
            }
        
        }

        console.log("the final answer: ",sum);

    })