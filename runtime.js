const perf = require('execution-time')();


function doublerAppend(nums){

    let new_nums = [];

    for (let i=0; i<nums.length; i++){
        let num = nums[i] * 2;
        new_nums.push(num);
    }

} // O(n)


function doublerInsert(nums){

    let new_nums = [];

    for (let i=0; i<nums.length; i++){
        let num = nums[i] * 2;
        new_nums.unshift(num);
    }

} // O(n^2)


function getSizedArray(size){
    let array = [];
    for (let i=0; i<size; i++){
        array.push(i);
    }
    return array
} // O(1)


const tinyArray = getSizedArray(10);
const smallArray = getSizedArray(100);
const mediumArray = getSizedArray(1000);
const largeArray = getSizedArray(10000);
const extraLargeArray = getSizedArray(100000);



// How long does it take to double every number in a given 
// array? 

// Try it with first function
perf.start();                     // Starts timer
doublerAppend(largeArray);
let resultsAppend = perf.stop();  // Stops timer and save time results


// Try it with second function
perf.start();
doublerInsert(largeArray);
let resultsInsert = perf.stop();


console.log('Results for the extraLargeArray');
console.log("insert", resultsInsert.preciseWords);
console.log("append", resultsAppend.preciseWords);

// I noticed that the tiny array took a bit more than the small array and then the pattern just slightly increased after that to take more time "microseconds" all the way up until taking some milliseconds of time by the time it gets to extraLargeArray


//SUM ZERO//

const addToZero = (arr) => {

    let defaultOutput = false

    for(let i = 0; i < arr.length; i++) {
        for(let j = i + 1; j < arr.length; j++) {

            if(arr[i] + arr[j] === 0) {
                defaultOutput = true;
            }
        }
    }

    return defaultOutput;

};

console.log(addToZero([1,2,3,-2]));

// const arr0 = [3];
// const arr1 = [4];
// const arr2 = [0];
// const arr3 = [2, 8, -9, 1];    

// const arr = [arr0, arr1, arr2, arr3]

// function zeroSum(arr) {
//     const out = [];
//     for(let i = 0; i < arr.length; i++) {
//         let sum = 0;
//         const inner = arr[i];
//         for(let j = 0; j < inner.length; j++) {
//             sum += inner[j];
//         }
//         if (sum === 0) {
//             out.push(true);
//         } else {
//             out.push(false);
//         }
//     }
//     return out;
// }

console.log(zeroSum(arr)); //O(n^2)

//UNIQUE CHARACTERS//
function uniqueChars(str) {
    let boolean = true;
    for(let i = 0; i < str.length; i++) {
        for(let j = i + 1; j < str.length; j++) {
            if(str[i] === str[j]) {
                boolean = false
            }
        }
    } 
    return boolean
} 
console.log(uniqueChars('shawn')) //O(1)


//PANGRAM SENTENCE//
const str = 'We promptly judged antique ivory buckles for the next prize'
const isPangram = (str = '') => {
    str = str.toLowerCase();
    const {length} = str;
    const alphabets = 'abcdefghijklmnopqrstuvwxyz';
    const alphaArr = alphabets.split('');
    for(let i = 0; i < length; i++) {
        const element = str[i];
        const index = alphaArr.indexOf(element);
        if(index !== -1){
            alphaArr.splice(index, 1);
        };
    };
    return !alphaArr.length;
};
console.log(isPangram(str)) // O(n)

//LONGEST WORD//
// function findLongestWord(str) {
//     let strSplit = str.split(' ');
//     let longestWord = 0;
//     for(let i = 0; i < strSplit.length; i++){
//         if(strSplit[i].length > longestWord) {
//             longestWord = strSplit[i].length;
//         }
//     }
//     return longestWord;
// }
// console.log(findLongestWord("the quick brown fox jumped over the lazy dog"));

const findLongestWord = (arr) => {

let longestDefault = arr[0].length;

for(let i = 0; i < arr.length; i++) {
    
    if(arr[i].length > longestDefault) {
        longestDefault = arr[i].length;
    }
}

return longestDefault;

};

console.log(findLongestWord(['hi','hello', 'yoyoyoyoyo']));