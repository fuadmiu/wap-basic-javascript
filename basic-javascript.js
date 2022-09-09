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

// map, filter example from JsFiddle

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



// TEST CODES
/* runs test to see if expected argument is === to value returned by function2test argument */
function myFunctionTest(expected, found) {
    // condition added to compare two array
    if (expected === found || (Array.isArray(expected) && isArrayEqual(expected, found))) {
        return "TEST SUCCEEDED";
    } else {
        return "TEST FAILED.  Expected " + expected + " found " + found;
    }
}

// Additional method to compare equal array.
function isArrayEqual(array1, array2) {
    return array1.length === array2.length && array1.every(function(value, index) { return value === array2[index]});
}



// Test Cases
console.log("Expected output of max(20,10) is 20  " + myFunctionTest(20, max(20, 10)));

console.log("Expected output of maxOfThree(5,4,44) is 44  " + myFunctionTest(44, maxOfThree(5, 4, 44)));
console.log("Expected output of maxOfThree(55,4,44) is 55  " + myFunctionTest(55, maxOfThree(55, 4, 44)));

console.log("Expected output of isVowel('w') is false  " + myFunctionTest(false, isVowel('w')));
console.log("Expected output of isVowel('e') is true  " + myFunctionTest(true, isVowel('e')));

console.log("Expected output of sum([1,2,3,4]) is 10  " + myFunctionTest(10, sum([1,2,3,4])));

console.log("Expected output of multiply([1,2,3,4]) is 24  " + myFunctionTest(24, multiply([1,2,3,4])));

console.log("Expected output of reverse('jag testar') is ratset gaj  " + myFunctionTest('ratset gaj', reverse('jag testar')));

console.log("Expected output of findLongestWord(['Hello','Javascript', 'World']) is 10  " + myFunctionTest(10, findLongestWord(['Hello','Javascript', 'World'])));

console.log("Expected output of filterLongWords(['web', 'Hello','Javascript', 'World', 'JS', 3]) is ['Hello','Javascript', 'World']  " + myFunctionTest(['Hello','Javascript', 'World'], filterLongWords(['web', 'Hello','Javascript', 'World', 'JS'], 3)));


console.log('========== JS Fiddle Example output, Input array [1,3,5,3,3] ===== ');
console.log("Expected output of multiply each element by 10 is [ 10, 30, 50, 30, 30 ]  " + myFunctionTest([ 10, 30, 50, 30, 30 ], multiplyBy10()));
console.log("Expected output of return array with all elements equal to 3, is [ 3, 3, 3 ]  " + myFunctionTest([ 3, 3, 3 ], filterVal3()));
console.log("Expected output of product all elements is 135  " + myFunctionTest(135, productOfNums()));