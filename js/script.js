console.log("Hello, JavaScript is connected!");

// toggle

let menuToggle = document.querySelector('.menu-toggle');
let header = document.querySelector('header');

menuToggle.onclick = function(){
    header.classList.toggle('active');   
}

// dropdown

let menuDropdown1 = document.querySelector('.menu-dropdown1');
let dropdown1 = document.querySelector('.dropdown1');

menuDropdown1.onclick = function(){
    dropdown1.classList.toggle('active-dropdown');   
}

let menuDropdown2 = document.querySelector('.menu-dropdown2');
let dropdown2 = document.querySelector('.dropdown2');

menuDropdown2.onclick = function(){
    dropdown2.classList.toggle('active-dropdown');   
}

// create looping for recipe article

function populateRecipe() {
    const container = document.getElementById('content');

    dataRecipe.forEach(recipe => {
        const section = document.createElement('section');
        section.innerHTML = `
            <h2 class="recipe-title"><span class="number">${recipe.id}. </span>${recipe.title}</h2>
            <img class="recipe-picture" src="${recipe.picture}" alt="${recipe.title}">
            <figcaption class="picture-caption"><em>${recipe.title}</em></figcaption>
            <p class="recipe-detail">${recipe.description}</p>
            <p><strong>Recipe: </strong><a class="recipe-url" href="${recipe.url}">${recipe.title}</a></p>
        `;
        container.appendChild(section);
    });
}

// create looping for trending card 

function populateTrendingCard() {
    const container = document.getElementById('trending');

    dataTrending.forEach(trending => {
        const divs = document.createElement('div');
        divs.classList.add('card');
        divs.innerHTML = `
            <img class="thumbnail" src="${trending.picture}" alt="${trending.title}">
            <h3 class="small-card-title">${trending.title}</h3>
        `;
        container.appendChild(divs);
    });
}

// create looping for news card

function populateNewsCard() {
    const container = document.getElementById('news');

    dataNews.forEach(news => {
        const divs = document.createElement('div');
        divs.classList.add('card');
        divs.innerHTML = `
            <img class="thumbnail" src="${news.picture}" alt="${news.title}">
            <h3 class="small-card-title">${news.title}</h3>
        `;
        container.appendChild(divs);
    });
}

// calling functions

document.addEventListener('DOMContentLoaded', function () {
    populateRecipe();
    populateTrendingCard(); 
    populateNewsCard();
});

// data

const dataRecipe = [
    { id: 1, title: 'Taco Soup', picture: "assets/images/food1.webp", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora minima culpa commodi quasi nihil cupiditate ratione, exercitationem perspiciatis, veritatis sint et alias distinctio debitis voluptate reiciendis, eos quod suscipit! Sapiente!", url: "recipe url" },
    { id: 2, title: 'Garlic Chicken and Veggie Pasta', picture: "assets/images/food2.webp", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora minima culpa commodi quasi nihil cupiditate ratione, exercitationem perspiciatis, veritatis sint et alias distinctio debitis voluptate reiciendis, eos quod suscipit! Sapiente!", url: "recipe url" },
    { id: 3, title: 'Hoisin Chicken Lettuce Wraps', picture: "assets/images/food3.webp", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora minima culpa commodi quasi nihil cupiditate ratione, exercitationem perspiciatis, veritatis sint et alias distinctio debitis voluptate reiciendis, eos quod suscipit! Sapiente!", url: "recipe url" },
];

const dataTrending = [
    { id: 1, title: 'Taco Soup', picture: "assets/images/food1.webp" },
    { id: 2, title: 'Garlic Chicken and Veggie Pasta', picture: "assets/images/food2.webp" },
    { id: 3, title: 'Fajita Parchment-Baked Chicken', picture: "assets/images/food6.webp" },
    { id: 4, title: 'Veggie Garlic Noodles', picture: "assets/images/food7.webp" },
    { id: 5, title: 'One-Pot Lemon Garlic Shrimp Pasta', picture: "assets/images/food8.webp" },
    { id: 6, title: 'Taco Soup', picture: "assets/images/food1.webp" },
    { id: 7, title: 'Garlic Chicken and Veggie Pasta', picture: "assets/images/food2.webp" },
    { id: 8, title: 'Fajita Parchment-Baked Chicken', picture: "assets/images/food6.webp" },
    { id: 9, title: 'Veggie Garlic Noodles', picture: "assets/images/food7.webp" },
    { id: 10, title: 'One-Pot Lemon Garlic Shrimp Pasta', picture: "assets/images/food8.webp" },
];

const dataNews = [
    { id: 1, title: 'a plum crisp, stuffed butternut squash, and stacked zucchini fritters If Fall Is Also Your Favorite Cooking Season, You\'ll Want To Bookmark These 30 Recipes For September ASAP', picture: "assets/images/articlethumb1.webp" },
    { id: 1, title: 'This 3-Ingredient Filipino Drink Is The Perfect Thirst-Quencher Before Melon Season Ends — And It Takes Less Than 15 Minutes To Make', picture: "assets/images/articlethumb2.webp" },
    { id: 1, title: 'This Ridiculously Simple "Chocolate Salami" Is My Go-To Dessert When The Weather Gets Uncomfortably Warm — Here\'s How To Make It In Just 10 Minutes', picture: "assets/images/articlethumb3.webp" },
];