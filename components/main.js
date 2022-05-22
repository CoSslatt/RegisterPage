const profileIcon = document.querySelector(".profile__logo");
const profileToTrigger = document.querySelector(".profile__disable");

const USER_ID_DIV = document.querySelector(".user__id");

profileIcon.addEventListener("click", (e) => {
	profileToTrigger.classList.toggle("profile__content__to__wrap");
});

const loadData = (callback) => {
	const request = new XMLHttpRequest();

	request.addEventListener("readystatechange", (e) => {
		const data = JSON.parse(request.responseText);

		callback(data);

		request.open("GET", "components/users.json");
		request.send();
	});
};

loadData((data) => {
	console.log(data);
});
