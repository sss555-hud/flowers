
let product = [
    {
        title:"101 красная роза",
        id:1,
        image:"./image/flow1.png",
        h5:"2800 грн",
        h6:"2280 грн",
        sale:"-19%"

    },
    {
        title:"25 розовых пионовидных роз",
        id:2,
        image:"./image/flow2.png",
        h5:"2800 грн",
        h6:"1680 грн",
        sale:"-10%",

    },
    {
        title:"Влюбленность",
        id:3,
        image:"./image/flow3.png",
        h5:"2800 грн",
        h6:"1270 грн",
          sale:"-19%"

    },
    {
        title:"Конзина все для тебя",
        id:4,
        image:"./image/flow4.png",
        h5:"2800 грн",
        h6:"2020 грн",
          sale:"-19%"

    },
    {
        title:"101 красная роза",
        id:1,
        image:"./image/flow1.png",
        h5:"2800 грн",
        h6:"2280 грн",
          sale:"-19%"

    },
    {
        title:"25 розовых пионовидных роз",
        id:2,
        image:"./image/flow2.png",
        h5:"2800 грн",
        h6:"1680 грн",
          sale:"-10%"

    },
    {
        title:"Влюбленность",
        id:3,
        image:"./image/flow3.png",
        h5:"2800 грн",
        h6:"1270 грн",
          sale:"-19%"

    },
    {
        title:"Конзина все для тебя",
        id:4,
        image:"./image/flow4.png",
        h5:"2800 грн",
        h6:"2020 грн",
          sale:"-19%"

    },
   
]

let section = document.querySelector(".wrap-5")


section.innerHTML = product.map((item)=>{
    return`
     <div class="product">
                <div class="sale">-19%</div>
                <div class="top">top</div>
                <div class="frame">
                   <img src="${item.image}"">
                </div>
            
                <div class="product-bottom">
                    <div class="stars">
                        <img src="./svg/stars.svg" alt="">
                    </div>
                    <div class="des">
                        <h4>${item.title}</h4>
                        <h5>${item.h5}</h5>
                        <h6>${item.h6}</h6>
                    </div>
                    <button>Заказать</button>
                    <p>быстрый заказ<a href="index.html" ></a> </p>
                  
                </div>
            </div>`
}).join("")
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

