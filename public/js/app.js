// *************************inscription modale *****************************
let mybtn = document.querySelector(".modalbtn")
let modaldiv = document.querySelector(".modaldiv")
let closebtn = document.querySelector(".close")





let signup = document.querySelector(".signup")
let login = document.querySelector("#logen")
// let tbdal = document.querySelectorAll(".switch")
let login7 = document.querySelector("#sigin")
let login8 = document.querySelector("#logi2")
// db fach open modale 
mybtn.addEventListener("click", () => {
    modaldiv.style.display = "block";
    login.style.display = "none"
})
// db fach n close 
closebtn.addEventListener("click", () => {
    modaldiv.style.display = "none"


})


login7.addEventListener("click" , () => {
login.style.display = "block"
 signup.style.display= "none"


})

login8.addEventListener("click" , () => {
login.style.display = "none"
 signup.style.display= "block"


})



console.log(login);

// db ndiron les info w des condition kifach yta3tawni w nkhznhom w ndir logine b les info li t3taw f sigin up
let usersDatabase = [];
class User {
    constructor(fullName, email, password) {
        this.fullName = fullName;
        this.email = email;

        this.password = password;

    }
}



// *****hadi buttun dyal vudei lwl li f herso section ******
// let hero = document.querySelector(".hero2")
// let video = document.querySelector(".ratio")
// let clos = document.querySelector(".closes")

// hero.addEventListener("click", () => {
//     video.style.display = "block";

// })
// clos.addEventListener("click", () => {
//     video.style.display = "none"


// })
// buttun video number2

// let btn2 = document.querySelector(".btn")
// let video2 = document.querySelector(".video")
// let sda = document.querySelector(".close")
// btn2.addEventListener("click" , () => {
// video2.style.display = "block";



// })
// sda.addEventListener("click", () => {
//     video.style.display = "none"


// })


// *********************menu*************************
let breakf = document.querySelector(".breakfest-click")
let menu7 = document.querySelector(".span1")
let btnbreak = document.querySelector(".span2")
let btnbreak1 = document.querySelector(".span3")
let btnbreak2 = document.querySelector(".span4")

let men1 = document.querySelector("#sp1")
let men2 = document.querySelector("#sp2")
let men3 = document.querySelector("#sp3")
let men4 = document.querySelector("#sp4")



menu7.addEventListener("click" , () => {
men1.style.display = "block";
men2.style.display = "none";
men3.style.display = "none";
men4.style.display = "none";


})

btnbreak.addEventListener("click" , () => {
men1.style.display = "none";
men2.style.display = "block";
men3.style.display = "none";
men4.style.display = "none";


})
btnbreak1.addEventListener("click" , () => {
men1.style.display = "none";
men2.style.display = "none";
men3.style.display = "block";
men4.style.display = "none";


})
btnbreak2.addEventListener("click" , () => {
men1.style.display = "none";
men2.style.display = "none";
men3.style.display = "none";
men4.style.display = "block";


})

// })
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

setInterval(nextSlide, 4000);

document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') prevSlide();
    if (e.key === 'ArrowRight') nextSlide();
});


// caroussel  ************************


// **************************hada l boooook a table ***********************************
let btn5 = document.querySelector(".btn1")
let modal = document.querySelector(".modal")
let close3 = document.querySelector(".closeBtn")
let  content = document.querySelector(".modal-content")
let form = document.querySelector("#bookingForm")

let reservations  = []
btn5.addEventListener("click", () => {
    modal.style.display = "block";
   
})
close3.addEventListener("click", () => {
    modal.style.display = "none";
    close3.style.color = "red"
   
})

form.addEventListener("submit", (e) => {
 e.preventDefault();




 let namee = form.querySelector("input[type='text']").value;
let meal = form.querySelectorAll("select")[0].value;
    let time = form.querySelectorAll("select")[1].value;
    let persons = form.querySelector("input[type='number']").value;


   let isReserved = reservations.some(res =>
     res.time === time
  );


  if (isReserved) {
    alert("Desolé ce temps est deja réserver");

    form.reset(); 
    return;        
   
  }

  reservations.push({
    namee ,
    meal ,
    time,
    persons
  });

  console.log(reservations);

  alert(" Reservation réussi ✅");

//   db nkhwi  lia l form 
  form.reset();            
  modal.style.display = "none";
})

