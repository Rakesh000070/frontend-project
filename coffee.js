const menuOpenButton = document.querySelector("#menu-open-button");
const menuCloseButton = document.querySelector("#menu-close-button");
const navLinks = document.querySelectorAll(".nav-menu .nav-link");

menuOpenButton.addEventListener("click", () => {
	document.body.classList.toggle("show-mobile-menu");//21.52 doesnot work on mobail visibility
});
//close menu  when the close button is clicked
menuCloseButton.addEventListener("click", () => menuOpenButton.click());

//close menu  when the close nav linked is clicked 
navLinks.forEach(link => {
link.addEventListener("click", () => menuOpenButton.click())
});
const swiper = new Swiper(".slider-wrapper", {
	loop: true,
	grabCursor:true,
	spaceBetween:15,
  
	// If we need pagination
	pagination: {
	  el: ".swiper-pagination",
	  clickable:true,
	  dynamicBullets:true,
	},
  
	// Navigation arrows
	navigation: {
	  nextEl: ".swiper-button-next",
	  prevEl: ".swiper-button-prev",
	},

	breakpoints:{
		0: {
			slidesPerView: 1
		},

		768: {
			slidesPerView: 2
		},

		1024: {
			slidesPerView: 3
		}
	}
  });

  let form = document.querySelector("#contactform");

  form.addEventListener("submit",function(event){
    event.preventDefault();

	let user = document.querySelector("#name");
	let email = document.querySelector("#email");
	let message = document.querySelector("#Message");

	console.log("Name =",user.value);
	console.log("Email =",email.value);
	email.value = "";  // after write email press ok input box automatically clear
	console.log("Message =",message.value);
	message.value = "";  // after write messaage press ok input box automatically clear
alert(`Hi ${user.value}, your email ${email.value} is successfully submit`);
user.value = ""; 
  });