// TYPESCRIPT
var number_1 = 9, number_2 = 19, forResult = true, forStringParams = "Learning Typescript is different than Javascript";
var newArray = new Array();
// use index from number and get the value by slice into one character
function filterSentence(num1, num2, showResult, phrase) {
    var filter = phrase.slice(num1, num2);
    if (showResult) {
        return filter;
    }
    else {
        return "this is wrong";
    }
}
var resultOne = filterSentence(number_1, number_2, forResult, forStringParams);
console.log(resultOne);
//use split to get word and number for conditional
function splitSentence(num1, num2, phrase) {
    var newWord = phrase.split(" ");
    var word_1 = newWord[0], word_2 = newWord[1], word_3 = newWord.slice(2);
    if (num1 == 9 && num2 == 19) {
        return word_2;
    }
    else if (num1 == 9 || num2 == 19) {
        return word_1;
    }
    else {
        return "Wrooong Wroong Wrong!!! Try Again!!!";
    }
}
var resultTwo = splitSentence(number_1, number_2, forStringParams);
console.log(resultTwo);
// use loop to get word
function loopSentence(num1, num2, phrase) {
    for (var i = num1; i < num2; i++) {
        newArray.push(phrase[i]);
    }
    return newArray.join("");
}
var resultThree = loopSentence(number_1, number_2, forStringParams);
console.log(resultThree);
