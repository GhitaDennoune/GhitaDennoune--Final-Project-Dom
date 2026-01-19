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
closebtn.addEventListener("click" , () => {
modaldiv.style.display="none"


})
// db labghin nmchi mn sigin up l ogine w l3aks s7i7 




function switchlogin(){
signup.classList.remove("active")
login.classList.add("active")

}
function switchsiginup(){
login.classList.remove("active")
signup.classList.add("active")

}

tbdal.forEach(ele => {
  ele.addEventListener("click", () => {
    if(ele.dataset.target === "login") {
      switchsiginup();
    } else {
      switchlogin();
    }
  });
});



let usersDatabase = [];
class User {
    constructor(fullName, email, password) {
        this.fullName = fullName;
        this.email = email;
      
        this.password = password;
       
    }}
    


