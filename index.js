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
                        <h4>${item.h4}</h4>
                        <h5>${item.h5}</h5>
                        <h6>${item.h6}</h6>
                    </div>
                    <button>Заказать</button>
                    <p>быстрый заказ<a href="index.html" ></a> </p>
                  
                </div>
            </div>`
}).join("")