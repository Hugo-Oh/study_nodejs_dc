const fs = require('fs')

const beforeMem = process.memoryUsage().rss;
//fs.rename('./fiel.txt', './file.txt', (error) => {
//  console.log(error);
//});

fs.readFile("./file.txt", (_, data) => {
  fs.writeFile(',/file2.txt', data, () => {});
  // calculate
  const afterMem = process.memoryUsage().rss;
  const diff = afterMem - beforeMem;
  const consumed = diff / 1024 / 1024
  console.log(diff);
  console.log(`Consumed Memory: ${consumed}MB`)
});

// 4984832
// Consumed Memory: 4.75390625MB