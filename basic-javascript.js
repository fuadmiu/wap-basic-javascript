// takes two numbers as arguments and returns the largest of them
function max(x, y) {
    if (x > y) {
        return x;
    } else {
        return y;
    }
}

// takes three numbers as arguments and returns the largest of them
function maxOfThree(x, y, z) {
    return max(max(x, y), z);
}

// takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
function isVowel(ch) {
    let vowels = ['a', 'e', 'i', 'o', 'u'];
    for (let i = 0; i < vowels.length; i++) {
        if (ch === vowels[i]) {
            return true;
        }
    }
    return false;
}

// sum all the numbers in an array of numbers
function sum(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    return sum;
}

// multiply all the numbers in an array of numbers
function multiply(numbers) {
    let total = 1;
    for (let i = 0; i < numbers.length; i++) {
        total *= numbers[i];
    }
    return total;
}

// computes the reversal of a string
function reverse(text) {
    let reversed = "";
    for (let i = 0; i < text.length; i++) {
        reversed = text[i] + reversed;
    }
    return reversed;
}

// takes an array of words and returns the length of the longest one.
function findLongestWord(wordsArr) {
    let maxLength = 0;
    for (let i = 0; i < wordsArr.length; i++) {
        let wordLength = wordsArr[i].length;
        if (wordLength > maxLength) {
            maxLength = wordLength;
        }
    }
    return maxLength;
}

// takes an array of words and an integer i and returns the array of words that are longer than i.
function filterLongWords(words, i) {
    return words.filter(w => w.length > i);
}

// map, filter

// use map to multiply each by 10
function multiplyBy10() {
    const a = [1,3,5,3,3]; 
    return a.map(v => v * 10);
}

// use filter to get values equal to 3
function filterVal3() {
    const a = [1,3,5,3,3]; 
    return a.filter(v => v === 3);
}

// use reduce to get product of numbers
function productOfNums() {
    const a = [1,3,5,3,3]; 
    return a.reduce((a, b) => a * b);
}