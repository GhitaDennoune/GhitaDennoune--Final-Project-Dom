// *************************inscription modale *****************************
let mybtn = document.querySelector(".modalbtn")
let modaldiv = document.querySelector(".modaldiv")
let closebtn = document.querySelector(".close")





let signup = document.querySelector(".signup")
let login = document.querySelector(".login")
let tbdal = document.querySelectorAll(".switch")

// db fach open modale 
mybtn.addEventListener("click", () => {
    modaldiv.style.display = "block";
    login.classList.add("active");
    signup.classList.remove("active");
})
// db fach n close 
closebtn.addEventListener("click", () => {
    modaldiv.style.display = "none"


})
// db labghin nmchi mn sigin up l ogine w l3aks s7i7 




function switchlogin() {
    signup.classList.remove("active")
    login.classList.add("active")

}
function switchsiginup() {
    login.classList.remove("active")
    signup.classList.add("active")

}

tbdal.forEach(ele => {
    ele.addEventListener("click", () => {
        if (ele.dataset.target === "login") {
            switchsiginup();
        } else {
            switchlogin();
        }
    });
});


// db ndiron les info w des condition kifach yta3tawni w nkhznhom w ndir logine b les info li t3taw f sigin up
let usersDatabase = [];
class User {
    constructor(fullName, email, password) {
        this.fullName = fullName;
        this.email = email;

        this.password = password;

    }
}



// hadi buttun dyal vudei lwl li f herso section 
let hero = document.querySelector(".hero2")
let video = document.querySelector(".ratio")
let clos = document.querySelector(".closes")

hero.addEventListener("click", () => {
    video.style.display = "block";

})
clos.addEventListener("click", () => {
    video.style.display = "none"


})
// buttun video number2

let btn2 = document.querySelector(".btn")
let video2 = document.querySelector(".video")
let sda = document.querySelector(".close")
btn2.addEventListener("click" , () => {
video2.style.display = "block";



})
sda.addEventListener("click", () => {
    video.style.display = "none"


})

// *********************menu*************************
let breakf = document.querySelector(".breakfest-click")
let btnbreak = document.querySelector(".span2")

btnbreak.addEventListener("click" , () => {
breakf.style.display = "block";




})
// ************************caroussel lwl ************************



let carousel = document.querySelector('.carousel');
let prevBtn = document.querySelector('.prev-btn');
let nextBtn = document.querySelector('.next-btn');
let indicators = document.querySelectorAll('.indicator');

let currentSlide = 0;
const totalSlides = document.querySelectorAll('.carousel-slide').length;

function updateCarousel() {
    carousel.style.transform = `translateX(-${currentSlide * 100}%)`;

    indicators.forEach((indicator, index) => {
        if (index === currentSlide) {
            indicator.classList.add('active');
        } else {
            indicator.classList.remove('active');
        }
    });
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % totalSlides;
    updateCarousel();
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    updateCarousel();
}

function goToSlide(index) {
    currentSlide = index;
    updateCarousel();
}

prevBtn.addEventListener('click', prevSlide);
nextBtn.addEventListener('click', nextSlide);

indicators.forEach((indicator, index) => {
    indicator.addEventListener('click', () => {
        goToSlide(index);
    });
});

// setInterval(nextSlide, 5000);

document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') prevSlide();
    if (e.key === 'ArrowRight') nextSlide();
});






