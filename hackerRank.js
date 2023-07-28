console.log("hi");
function matchingStrings(strings, queries) {
    // Write your code here
    let count = 0;
    let result = [];

    for (let i = 0; i < queries.length; i++) {
        count = 0;
        for (let j = 0; j < strings.length; j++) {
            if (queries[i] === strings[j]) {
                count += 1;
            }
        }
        result.push(count);
    }
    return result;
}


let strings = ['ab', 'abc', 'ab'];
let queries = ['ab', 'abc', 'bc'];

let answer = matchingStrings(strings, queries);
console.log(answer);


