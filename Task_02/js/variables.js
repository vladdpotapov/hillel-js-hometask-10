const categories = [
    { name: 'Laptops', key: 'laptops'},
    { name: 'Phones',  key: 'phones' },
    { name: 'Players', key: 'players'},
];

const products = {
    Laptops: [
        { name: 'Apple Macbook', price: 2000, desc: 'Lorem sadflkj asdlfkjasdf lkjd jsndf jhasdfo wqeoiru adslfkjfa'},
        { name: 'Acer A517',     price: 450,  desc: 'Lorem sadflkj asdlfkjasdf lkjd jsndf jhasdfo wqeoiru adslfkjfa'},
        { name: 'Dell 3581',     price: 350,  desc: 'Lorem sadflkj asdlfkjasdf lkjd jsndf jhasdfo wqeoiru adslfkjfa'},
        { name: 'Lenovo 330',    price: 420,  desc: 'Lorem sadflkj asdlfkjasdf lkjd jsndf jhasdfo wqeoiru adslfkjfa'},
        { name: 'HP Pav G 15',   price: 900,  desc: 'Lorem sadflkj asdlfkjasdf lkjd jsndf jhasdfo wqeoiru adslfkjfa'},
    ],
    Phones: [
        { name: 'iPhone X',      price: 800,  desc: 'Lorem sadflkj asdlfkjasdf lkjd jsndf jhasdfo wqeoiru adslfkjfa'},
        { name: 'iPhone 7 plus', price: 600,  desc: 'Lorem sadflkj asdlfkjasdf lkjd jsndf jhasdfo wqeoiru adslfkjfa'},
        { name: 'Samsung A51',   price: 780,  desc: 'Lorem sadflkj asdlfkjasdf lkjd jsndf jhasdfo wqeoiru adslfkjfa'},
        { name: 'Meizu M8',      price: 200,  desc: 'Lorem sadflkj asdlfkjasdf lkjd jsndf jhasdfo wqeoiru adslfkjfa'},
        { name: 'HTC 10',        price: 500,  desc: 'Lorem sadflkj asdlfkjasdf lkjd jsndf jhasdfo wqeoiru adslfkjfa'},
    ],
    Players: [
        { name: 'Apple TV 4K', price: 450,    desc: 'Lorem sadflkj asdlfkjasdf lkjd jsndf jhasdfo wqeoiru adslfkjfa'},
        { name: 'Beelink GT1', price: 100,    desc: 'Lorem sadflkj asdlfkjasdf lkjd jsndf jhasdfo wqeoiru adslfkjfa'},
        { name: 'Android H96', price: 180,    desc: 'Lorem sadflkj asdlfkjasdf lkjd jsndf jhasdfo wqeoiru adslfkjfa'},
        { name: 'Xiaomi 4K',   price: 120,    desc: 'Lorem sadflkj asdlfkjasdf lkjd jsndf jhasdfo wqeoiru adslfkjfa'},
        { name: 'Mecool KM3',  price: 200,    desc: 'Lorem sadflkj asdlfkjasdf lkjd jsndf jhasdfo wqeoiru adslfkjfa'},
    ],
};

const categoriesList = document.querySelector('.categories__list');         
const categoriesListItems = document.querySelectorAll('.categories__item');
const goodsBox = document.querySelector('.goods');
const dataBox = document.querySelector('.data');

// let currentCategory;
// let currentProduct;
// let goodsItem;
// let goodsDescription;
let formButton;
let formContainer;