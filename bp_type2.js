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

    return {
        'Book Name' : nameBook,
        'Amount Of Discount' : amountDiscount,
        'Price After Discount' : priceAfterDiscount,
        'Amount Of Tax' : amountTax,
        'Price After Tax' : priceAfterTax,
        'Type' : type
    };
}

const result = bookPurchasing("book deh", priceBook_1, discountBook, taxBook);
console.log(result);
console.log("Book Purchasing");
console.log("Book Name = ", result["Book Name"]);
console.log("Amount Of Discount = ", result["Amount Of Discount"]);
console.log("Price After Discount = ", result["Price After Discount"]);
console.log("Amount Of Tax = ", result["Amount Of Tax"]);
console.log("Price After Tax = ", result["Price After Tax"]);
console.log("Type = ", result["Type"], ", ", typeof(result["Type"]));