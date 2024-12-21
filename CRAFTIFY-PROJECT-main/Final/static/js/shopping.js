let openShopping = document.querySelector('.icon-cart');
let closeShopping = document.querySelector('.closeShopping');
let list = document.querySelector('.list');
let listCard = document.querySelector('.listCard');
let body = document.querySelector('body');
let total = document.querySelector('.total');
let quantity = document.querySelector('.quantity');

openShopping.addEventListener('click', ()=>{
    body.classList.add('active');
})
closeShopping.addEventListener('click', ()=>{
    body.classList.remove('active');
})

let products = [
    {
        "id": 1,
        "name": "High-Quality Red Clay Bricks",
        "price": 7.38,
        "image": "static/imgs/products/f1.png"
    },
    {
        "id": 2,
        "name": "Premium Roofing Shingles",
        "price": 50,
        "image": "static/imgs/products/f2.png"
    },
    {
        "id": 3,
        "name": "Galvanized Steel Metal Rods",
        "price": 40.35,
        "image": "static/imgs/products/f3.png"
    }
    ,
    {
        "id": 4,
        "name": "Versatile Concrete Blocks",
        "price": 10,
        "image": "static/imgs/products/f4.png"
    },
    {
        "id": 5,
        "name": "Apex Floor Guard (4 Litre)",
        "price": 3999,
        "image": "static/imgs/products/f5.png"
    },
    {
        "id": 6,
        "name": "Highly Durable And Designer Glass",
        "price": 514,
        "image": "static/imgs/products/f6.png"
    },
    {
        "id": 7,
        "name": "Premium Interior Paint",
        "price": 1450,
        "image": "static/imgs/products/f7.png"
    },
    {
        "id": 8,
        "name": "Classic Clay Roofing Tiles",
        "price": 50,
        "image": "static/imgs/products/f8.png"
    },
    {
        "id": 9,
        "name": "1.5'' Iron Nail (100 pcs)",
        "price": 70.45,
        "image": "static/imgs/products/n1.png"
    },
    {
        "id": 10,
        "name": "Premium Quality Plywood",
        "price": 6499,
        "image": "static/imgs/products/n2.png"
    },
    {
        "id": 11,
        "name": "Two Way Switches",
        "price": 240.35,
        "image": "static/imgs/products/n3.png"
    },
    {
        "id": 12,
        "name": "Unsheathed Industrial Cable",
        "price": 1335,
        "image": "static/imgs/products/n4.png"
    },
    {
        "id": 13,
        "name": "Stylish Door Handles",
        "price": 1805.45,
        "image": "static/imgs/products/n5.png"
    },
    {
        "id": 14,
        "name": "Havana Door (PU-painted)",
        "price": 6499,
        "image": "static/imgs/products/n6.png"
    },
    {
        "id": 15,
        "name": "Premium Quality Hinges",
        "price": 330,
        "image": "static/imgs/products/n7.png"
    },
    {
        "id": 16,
        "name": "Xtralite ACC Blocks (4'')",
        "price": 47,
        "image": "static/imgs/products/n8.png"
    }
];
let listCards  = [];
function initApp(){
    products.forEach((value, key) =>{
        let newDiv = document.createElement('div');
        newDiv.classList.add('item');
        newDiv.innerHTML = `
            <img src="${value.image}">
            <div class="title">${value.name}</div>
            <div class="price">Rs. ${value.price.toLocaleString()}</div>
            <button onclick="addToCard(${key})">Add To cart</button>`;
        list.appendChild(newDiv);
    })
}
initApp();
function addToCard(key){
    if(listCards[key] == null){
        // copy product form list to list card
        listCards[key] = JSON.parse(JSON.stringify(products[key]));
        listCards[key].quantity = 1;
    }
    reloadCard();
}
function reloadCard(){
    listCard.innerHTML = '';
    let count = 0;
    let totalPrice = 0;
    listCards.forEach((value, key)=>{
        totalPrice = totalPrice + value.price;
        count = count + value.quantity;
        if(value != null){
            let newDiv = document.createElement('li');
            newDiv.innerHTML = `
                <div><img src="${value.image}"/></div>
                <div>${value.name}</div>
                <div>Rs. ${value.price.toLocaleString()}</div>
                <div>
                    <button onclick="changeQuantity(${key}, ${value.quantity - 1})">-</button>
                    <div class="count">${value.quantity}</div>
                    <button onclick="changeQuantity(${key}, ${value.quantity + 1})">+</button>
                </div>`;
                listCard.appendChild(newDiv);
        }
    })
    total.innerText = totalPrice.toLocaleString();
    quantity.innerText = count;
}
function changeQuantity(key, quantity){
    if(quantity == 0){
        delete listCards[key];
    }else{
        listCards[key].quantity = quantity;
        listCards[key].price = quantity * products[key].price;
    }
    reloadCard();
}