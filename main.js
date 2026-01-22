//Cau 1
let Product = function(id, name, price, quantity, category, isAvalible) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.quantity = quantity;
    this.category = category;
    this.isAvalible = isAvalible;
}

//Cau 2
let product1 = new Product(1, "Gia Do Dien Thoai", 10, 10, "Accessories", true);
let product2 = new Product(2, "Op Lung", 20, 0, "Accessories", false);
let product3 = new Product(3, "Iphone 17", 30, 0, "Phone", true);
let product4 = new Product(4, "Iphone 17 Pro", 40, 40, "Phone", false);
let product5 = new Product(5, "Iphone 17 Pro Max", 50, 50, "Phone", true);

let products = [];
products.push(product1);
products.push(product2);
products.push(product3);
products.push(product4);
products.push(product5);

console.log("Cau 2: ", products);

//Cau 3
let cau3 = [];
cau3 = products.map(
    function(product){
        return array = {
            name: product.name,
            price: product.price
        }
    }
)
console.log("Cau 3: ", cau3);

//Cau 4
let cau4 = [];
cau4 = products.filter(
    function(product){
        return product.quantity > 0;
    }
)
console.log("Cau 4: ", cau4);

//Cau 5
let cau5 = [];
cau5 = products.some(
    function(product){
        return product.price > 30;
    }
)

console.log("Cau 5: ", cau5);

//Cau 6
let cau6 = [];

cau6 = products.filter(
    function(product){
        return (product.category === "Accessories");
    }
).every(
    function(product){
        return product.isAvalible === true;
    }
);
console.log("Cau 6: ", cau6);

//Cau 7

let cau7 = products.reduce(
    function(total, product){
        let giatri = product.price * product.quantity;
       return total += giatri;
    },0);

console.log("Cau 7: ", cau7);

//Cau 8
let cau8 = [];
for (const element of products) {
    cau8.push({
        name: element.name,
        category: element.category,
        isAvalible: element.isAvalible
    })
};
console.log("Cau 8: ", cau8);

//Cau 9
let cau9 = [];
for (const key in products) {
    cau9.push({
        key: key,
        name: products[key].name,
        price: products[key].price,
        quantity: products[key].quantity,
        category: products[key].category,
        isAvalible: products[key].isAvalible
    })
};
console.log("Cau 9: ", cau9);

//Cau 10
let cau10 = products.filter(
    function(product){
        return (product.isAvalible === true && product.quantity > 0)
    }
).map(
    function(product){
        return {
            name: product.name
        }
    }
)
console.log("Cau 10: ", cau10);
