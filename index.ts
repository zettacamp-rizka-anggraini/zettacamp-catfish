// TYPESCRIPT
const number_1 = 9,
  number_2 = 19,
  forResult = true,
  forStringParams = "Learning Typescript is different than Javascript";

let newArray = new Array();
// use index from number and get the value by slice into one character
function filterSentence(num1: number, num2: number, showResult: boolean, phrase: string): string {
  const filter = phrase.slice(num1, num2);
  if (showResult) {
    return filter;
  } else {
    return "this is wrong";
  }
}

let resultOne = filterSentence(number_1, number_2, forResult, forStringParams);
console.log(resultOne);

//use split to get word and number for conditional
function splitSentence(num1: number, num2: number, phrase: string): string {
  let newWord = phrase.split(" ");
  const [word_1, word_2, ...word_3] = newWord;
  if (num1 == 9 && num2 == 19) {
    return word_2;
  } else if (num1 == 9 || num2 == 19) {
    return word_1;
  } else {
    return "Wrooong Wroong Wrong!!! Try Again!!!";
  }
}

let resultTwo = splitSentence(number_1, number_2, forStringParams);
console.log(resultTwo);

// use loop to get word
function loopSentence(num1: number, num2: number, phrase: string): string {
  for (let i = num1; i < num2; i++) {
    newArray.push(phrase[i]);
  }
  return newArray.join("");
}

let resultThree = loopSentence(number_1, number_2, forStringParams);
console.log(resultThree);
