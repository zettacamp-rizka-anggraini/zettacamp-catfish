// Typescript Day 2
//CASE NUMBER 1 && CASE NUMBER 2 && CASE NUMBER 3
// let arrayNumber1 = [1, 'data', '3', 'result'];
// let arrayNumber2 = ['Bejo', 'has', '4', 'sport', 'car'];
// type arrayType = (string | number)[];
// function caseNumber(data: arrayType):string{
//     let newWord = data.join(" ");
//     return newWord;
// }
// console.log(caseNumber(arrayNumber1));
// console.log(caseNumber(arrayNumber2));
function combination(input) {
    var result;
    var result2;
    if (typeof input === 'string' || 'number') {
        result = input.join(" ");
    }
    result2 = result;
    return result2;
}
var combinationInput = combination([2, '3', '4', '5']);
console.log(combinationInput);
console.log(typeof combinationInput);
// let arrayNumber1_2= [false, true, false, true, false];
// function caseNumber1_type1(data1: (string|number|boolean)[]):string{
//     let data = data1;
//     console.log(data);
//     if(typeof data1 !== 'boolean'){
//         let newWord = data1.join(" ");
//         return newWord;
//     } else {
//         return "This Is not Array";
//     }
// }
// console.log(caseNumber1_type1(arrayNumber1_2));
