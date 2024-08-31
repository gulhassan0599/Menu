import menuList from "./database.js";

const menu = document.querySelector(".menu");
const btn = document.querySelector(".nav");

function menuDisplay(menuList) {
    const menuItem = menuList.map((item) => {
        return `
        <div id=${item.id} class="menu-item">
            <div class="menu-img">
                <img src= ${item.img} alt="menu item">
            </div>
            <div class="menu-info">
                <div class="name">
                    <h1>b ${item.title} </h1>
                    <p class="price"> $${item.price} </p>
                </div>
                <p class="detail"> ${item.desc} </p>
             </div>
        </div>`;
    }).join("");

    menu.innerHTML = menuItem;
};

window.addEventListener("DOMContentLoaded", () => {
    menuDisplay(menuList);
});


btn.addEventListener("click", (e) => {
    const category = e.target.dataset.class;
    const menuCategory = menuList.filter((item) => {
        if (item.category === category) {
            return item;
        }
    });

    if(category === "all") {
        menuDisplay(menuList);
    }
    else{
        menuDisplay(menuCategory);
    }
});