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
        // const len = end.length;
  

        for(let i=start;i<=end;i++){
            // console.log("ssdfsdfsdfsdfsfsdfbbb")
            // console.log(i)
            //  console.log((i.toString().length))
            if ((i.toString().length)%2!=0){
                continue;
            }

            // console.log("sdfsldfjskldjflksjfklsjflksfjklsd");

            let f_h= i.toString().substring(0, i.toString().length/2);

            let s_h = i.toString().substring(i.toString().length/2,i.toString().length);
            

            if (f_h==s_h){
                sum+=i
                // console.log("zzzzzzzzzzzzzz",i);

            }

        }


    }   
    console.log("the final answer: ",sum);

})