const reviews = [
    {
        id: 1,
        name: "lerka ciubotaru",
        job: "muzicolog",
        img: "url(photos/Lercik.jpeg)",
        text: "Lorem ipsum. Eu sun lorem, sensul mesajului meu este absolut nul deoarece eu exist pentru a completa spatiile. Va rog sa ma iertati ca va provoc doscomfort sau va dezamagesc asteptarile."
    },

    {
        id: 2,
        name: "piter parker",
        job: "oculist",
        img: "url(photos/ciuvacbatran.jpg)",
        text: "Lorem ipsum. Eu sun lorem, sensul mesajului meu este absolut nul deoarece eu exist pentru a completa spatiile. Va rog sa ma iertati ca va provoc doscomfort sau va dezamagesc asteptarile."
    },

    {
        id: 3,
        name: "black berry",
        job: "ornitolog",
        img: "url(photos/blackberry.jpg)",
        text: "Lorem ipsum. Eu sun lorem, sensul mesajului meu este absolut nul deoarece eu exist pentru a completa spatiile. Va rog sa ma iertati ca va provoc doscomfort sau va dezamagesc asteptarile."
    },

    {
        id: 4,
        name: "jon smith",
        job: "pernolog",
        img: "url(photos/pernolog.jpg)",
        text: "Lorem ipsum. Eu sun lorem, sensul mesajului meu este absolut nul deoarece eu exist pentru a completa spatiile. Va rog sa ma iertati ca va provoc doscomfort sau va dezamagesc asteptarile."
    },

    {
        id: 5,
        name: "sam smith",
        job: "somnolog",
        img: "url(photos/somnolog.jpg)",
        text: "Lorem ipsum. Eu sun lorem, sensul mesajului meu este absolut nul deoarece eu exist pentru a completa spatiile. Va rog sa ma iertati ca va provoc doscomfort sau va dezamagesc asteptarile."
    }
];

// Select items

const img = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const randomBtn = document.querySelector(".surprise");

// Set start item

let currentItem = 0;

// load initial item

function onloadFunction() {
    showPerson(currentItem);
};

function showPerson(person) {
    const item = reviews[person];
    img.style.backgroundImage = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
}

// Show next person 

nextBtn.addEventListener("click", function() {
    currentItem++;
    if (currentItem > reviews.length - 1) {
        currentItem = 0;
    };
    showPerson(currentItem);
    
});


prevBtn.addEventListener("click", function() {
    
    currentItem--;

    if (currentItem < 0) {
        currentItem = reviews.length - 1;
    };
    showPerson(currentItem);
});

randomBtn.addEventListener("click", function() {
    currentItem = Math.floor(Math.random() * reviews.length);
    showPerson(currentItem);
    console.log(currentItem);
});


