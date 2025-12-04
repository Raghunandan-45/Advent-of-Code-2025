const fs = require('fs');

fs.readFile("03.txt", "utf-8", (err, data) => {

    const arr = data.split("\n").map((row) => row.split(','));
    const ranges = arr.flat();
    console.log(ranges);

    let len = ranges.length;
    let sum = 0;
    const K = 12;

    for (let i = 0; i < len; i++) {
        // skip too-short strings
        if (ranges[i].length < K) {
            console.log("skip (too short):", ranges[i]);
            continue;
        }

        let n = ranges[i].length;
        let stack = []; // will hold characters (digits)

        for (let j = 0; j < n; j++) {
            let ch = ranges[i][j];

            // while we can pop and improve the stack lexicographically,
            // and still have enough characters left to fill K after popping
            while (
                stack.length > 0 &&
                stack[stack.length - 1] < ch &&
                // after popping one, maximum available = (stack.length - 1) + (n - j)
                (stack.length - 1 + (n - j)) >= K
            ) {
                stack.pop();
            }

            // push if we still need more digits
            if (stack.length < K) {
                stack.push(ch);
            }
        }

        // stack now contains >= K chars (or exactly K); take first K
        let ans = stack.slice(0, K).join('');

        console.log("Max12 for", ranges[i], "=>", ans);

        // accumulate (safe for 12 digits to use Number)
        sum += Number(ans);
    }

    console.log("Final Sum =", sum);
});
