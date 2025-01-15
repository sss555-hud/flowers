let products = [
    {
        title: "Торт Наполеон",
        id:1,
        price: 2280,
        image: "./img/tort.png",
    },
    {
        title: "Киевский торт",
        id:2,
        price: 1680,
        image: "./img/tort2.png",
    },
    {
        title: "Торт Левантинер",
        id:3,
        price: 1270,
        image: "./img/tort3.png",
    },
    {
        title: "Торт на день рождения",
        id:4,
        price: 2020,
        image: "./img/tort4.png",
    },
    {
        title: "Торт Наполеон",
        id:5,
        price: 2280,
        image: "./img/tort5.png",
    },
    {
        title: "Киевский торт",
        id:6,
        price: 1680,
        image: "./img/tort6.png",
    },
    {
        title: "Торт Левантинер",
        id:7,
        price: 1270,
        image: "./img/tort7.png",
    },
    {
        title: "Торт на день рождения",
        id:8,
        price: 2020,
        image: "./img/tort8.png",
    },
]

let productCard = document.querySelector(".payment-grid")
productCard.innerHTML = products.map((our) => {
    return `<div class="product-card">
            <div class="card-top">
                <img src="${our.image}" alt="Торт Наполеон" class="product-image">
                <div class="top-label">TOP</div>
                <div class="favorite-icon"><img src="./svg/love.svg" alt=""></div>
                <div class="card-content">
                <div class="rating">★★★★★</div>
                <h2 class="product-title">${our.title}</h2>
                <p class="price">${our.price} грн</p>
                <button class="order-button">Заказать</button>
                <a href="#" class="quick-order">Быстрый заказ</a>
                </div>
            </div>
        </div>  `
}) .join("")