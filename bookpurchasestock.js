let monthOfCredit = 5, creditObj, termOfCredit = new Array(); 
const discountBook = 10, taxBook = 5;

let myBook = {
        nameBook : 'Book Of Life',
        priceBook : 50000,
        stockBook : 20,
        purchaseBook: 5 
    }

function bookPurchasing(stockBook, purchaseBook, monthOfCredit) {
    let purBook = 0;
    let priceBook = myBook["priceBook"];
    let totalPrice = 0;

    function priceTermCredit (priceBook, monthOfCredit){
        let creditObj;
        for(let i=1; i<=monthOfCredit; i++){
            creditObj = {};
            let pricenow = priceBook/monthOfCredit;
            creditObj['month'] = i;
            creditObj['credit'] = pricenow;
            termOfCredit.push(creditObj);
            //console.log(creditObj);
        }
    }

    priceTermCredit(priceBook, monthOfCredit);
    const [creditor_1, creditor_2, , ...creditor_rest] = termOfCredit;
    //console.log(termOfCredit);

    for(i=0; i<=stockBook; i++){  
        if(purBook<stockBook){
            console.log("==== Iteration to-",purBook," ====");
            console.log("Book Price : ", priceBook);
            totalPrice = totalPrice + priceBook;
            console.log("Total Price : ", totalPrice);
            console.log("Terms of Credit : \n creditor Bayu : " , creditor_1, "\n creditor Gita : ", creditor_2, "\n creditor Other : ", creditor_rest);
            console.log("Note : can be purchased again");
            purBook += 1;
            console.log("==== ==== ==== ==== ==== ==\n");
        }else if(purBook>=stockBook){
            console.log("==== ==== ==== ==== ==== ==");
            console.log("can't be purchased again");
            console.log("==== ==== ==== ==== ==== ==\n");
            break;
        }
    }

    

    let totalBook = purchaseBook+purBook;
    let totalAllPrice = totalBook*priceBook;
    let nameBook = myBook["nameBook"];
    let amountDiscount = totalAllPrice*(discountBook/100);
    let priceAfterDiscount = totalAllPrice - amountDiscount;
    let amountTax = priceAfterDiscount*(taxBook/100);
    let priceAfterTax = priceAfterDiscount + amountTax;

    console.log("==== ==== ==== ==== ==== ==== ==");
    console.log("Book Name : ", nameBook);
    console.log("Total Purchase Book: ", totalBook, " Books");
    console.log("Total Price : Rp ", totalAllPrice);
    console.log("Amount Of Discount : Rp ", amountDiscount);
    console.log("Price After Discount : Rp ", priceAfterDiscount);
    console.log("Amount Of Tax : Rp ", amountTax);
    console.log("Price After Tax : Rp ", priceAfterTax);
    console.log("==== ==== ==== ==== ==== ==== ==\n");
 
}

bookPurchasing(myBook['stockBook'], myBook['purchaseBook'], monthOfCredit);
