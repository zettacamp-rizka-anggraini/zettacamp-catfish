let priceOfCredit = 20000, monthOfCredit = 5;
let termOfCredit = new Array();

let a = {
    'nama ':"abc",
    'tanggal' : 2
}

function priceTermCredit (priceOfCredit, monthOfCredit){
    for(let i=1; i<=monthOfCredit; i++){
        creditObj = {};
        let pricenow = priceOfCredit/monthOfCredit;
        creditObj['month'] = i;
        creditObj['credit'] = pricenow;
        termOfCredit.push(creditObj);
        //console.log(creditObj);
    }
}
//console.log(termOfCredit);
priceTermCredit(priceOfCredit, monthOfCredit);
const [andiCreditor, bayuCreditor, , ...rest] = termOfCredit;
const {b,tanggal} = a;

console.log(tanggal);

// const {a, b, c} = [1,2,3];
// console.log(a);
// console.log(b);
// console.log(c);

//console.log(termOfCredit);
console.log(andiCreditor);
console.log(bayuCreditor);
console.log(rest);
//console.log(termOfCredit[1]);

