
// refactor spinner one to use less repetitive code

// process.stdout.write is different than console.log because console.log adds a line-break character at the end of the line *** 

let delay = 150;
let loading = ["\r|   ", "\r/   ", "\r-   ", "\r\\    ", "\r|   ", "\r/   ", "\r-   ", "\r\\    "];

for (const load of loading) {
  setTimeout(() => {
    process.stdout.write(load);
  }, delay)
  delay += 150;
}