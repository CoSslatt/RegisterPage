const profileIcon = document.querySelector(".profile__logo");
const profileToTrigger = document.querySelector(".profile__disable");
const formSubmit = document.querySelector(".submit");

const USER_ID_DIV = document.querySelector(".user__id");

profileIcon.addEventListener("click", (e) => {
	profileToTrigger.classList.toggle("profile__content__to__wrap");
});
