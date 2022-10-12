let nameBook = "Book Of Life", priceBook = 120000, monthofCredit = 5, termofCredit = new Array(), objCredit;
const discountBook = 5.75, taxBook = 2.5;

function book(nameBook, priceBook, discountBook, taxBook, monthofCredit) {
    nameBook = nameBook;
    amountDiscount = priceBook*(discountBook/100);
    priceAfterDiscount = priceBook - amountDiscount;
    amountTax = priceAfterDiscount*(taxBook/100);
    priceAfterTax = priceAfterDiscount + amountTax;

    function priceTermCredit (priceOfCredit, monthOfCredit){
        let creditObj;
        let bunga = 0;
        for(let i=1; i<=monthOfCredit; i++){
            creditObj = {};
            let pricenow = priceOfCredit/monthOfCredit;
            creditObj['month'] = i;
            creditObj['credit'] = pricenow;
            creditObj['bunga'] = pricenow * (bunga/100);
            creditObj['afterbunga'] = pricenow + (pricenow * (bunga/100));
            termofCredit.push(creditObj);
            bunga += 1;
        }
    }

    priceTermCredit(priceAfterTax, monthofCredit);
    const [creditor_1, creditor_2, , ...creditor_rest] = termofCredit;

    console.log("=====================================");
    console.log("Book Name : ", nameBook);
    console.log("Amount Of Discount : ", amountDiscount);
    console.log("Price After Discount : ", priceAfterDiscount);
    console.log("Amount Of Tax : ", amountTax);
    console.log("Price After Tax : ", priceAfterTax);
    console.log("Terms of Credit : \n creditor Bayu : " , creditor_1, "\n creditor Gita : ", creditor_2, "\n creditor Other : ", creditor_rest);
    console.log("=====================================");
}

book(nameBook, priceBook, discountBook, taxBook, monthofCredit);