'use strict';

{
    const productName = "Playstation 5";
    const productQuantity = 10;
    const productCategory = "Games";
    const productPrice = 400;
    
    console.log(`Product name: ${productName}`);
    console.log(`Products overall price: ${productQuantity * productPrice}`);
}

{
    const productName = "TV Sony";
    const productQuantity = 12;
    const productCategory = "Electronics";
    const productPrice = 700;
    
    console.log(`Product name: ${productName}`);
}

{
    const productName = prompt('Введите название товара');
    const productQuantity = +prompt('Введите количество товара');
    const productCategory = prompt('Введите категорию товара');
    const productPrice = +prompt('Введите цену товара');

    console.log(`На складе ${productQuantity} единицы товара ${productName} на сумму ${productQuantity * productPrice}`);
}


