const {readFileSync, writeFileSync} = require('fs');

const first = readFileSync('./content/first.txt', 'utf8');
const second = readFileSync('./content/second.txt', 'utf8');

// console.log(first);
// console.log(second);

writeFileSync(
    './content/result-sync.txt',
    `Here is the result:\n${first}\n${second}`,
    {flag: 'a'} // append
    //{flag: 'wx'}  // like 'w' but fails if the path exists
    );
