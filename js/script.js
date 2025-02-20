//Header Scroll
let nav = document.querySelector(".navbar");
window.onscroll = function(){
    if(document.documentElement.scrollTop>20){
        nav.classList.add("header-scrolled");
    }else{
        nav.classList.remove("header-scrolled");
    }
}

// nav hide on phone
let navBar = document.querySelectorAll(".nav-link");
let navCollapse = document.querySelector(".navbar-collapse.collapse");
navBar.forEach(function (a){
    a.addEventListener("click",function(){
        navCollapse.classList.remove("show");
    })
})


// form
document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");
    
    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();

        if (name === "") {
            alert("Please enter your name.");
            return;
        }
        
        if (email === "" || !validateEmail(email)) {
            alert("Please enter a valid email address.");
            return;
        }
        
        if (message === "") {
            alert("Please enter a message.");
            return;
        }

        sendEmail(name, email, message);
        form.reset();
    });

    function validateEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    function sendEmail(name, email, message) {
        const recipient = "mansiahirwar2202@gmail.com";
        const mailtoLink = `mailto:${recipient}?subject=Message from ${name}&body=Email: ${email}%0D%0A%0D%0A${message}`;
        window.location.href = mailtoLink;
    }
});
