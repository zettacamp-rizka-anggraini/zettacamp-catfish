let nameBook = "Book Of Life";
let priceBook_1 = 120000;
const discountBook = 10;
const taxBook = 5;

function bookPurchasing(nameBook, priceBook, discountBook, taxBook) {
    nameBook = nameBook;
    amountDiscount = priceBook*(discountBook/100);
    priceAfterDiscount = priceBook - amountDiscount;
    amountTax = priceAfterDiscount*(taxBook/100);
    priceAfterTax = priceAfterDiscount + amountTax;

    let type = (nameBook === priceAfterDiscount);

    console.log("Book Name : ", nameBook);
    console.log("Amount Of Discount : ", amountDiscount);
    console.log("Price After Discount : ", priceAfterDiscount);
    console.log("Amount Of Tax : ", amountTax);
    console.log("Price After Tax : ", priceAfterTax);
    console.log(type, "tipe", typeof(type));
}

bookPurchasing(nameBook, priceBook_1, discountBook, taxBook);