const profileIcon = document.querySelector(".profile__logo");
const profileToTrigger = document.querySelector(".profile__disable");
const formSubmit = document.querySelector(".submit");

const nameInput = document.querySelector(".name");
const passwordInput = document.querySelector(".password");

const USER_ID_DIV = document.querySelector(".user__id");
USER_ID_DIV.textContent = `Have to login`;

profileIcon.addEventListener("click", (e) => {
	profileToTrigger.classList.toggle("profile__content__to__wrap");
});

formSubmit.addEventListener("click", () => {
	getUsers("components/users.json", (name, surname) => {
		USER_ID_DIV.textContent = `${name} ${surname}`;
	});
});

const getUsers = (path, callback) => {
	const request = new XMLHttpRequest();

	request.addEventListener("readystatechange", () => {
		if (request.readyState === 4 && request.status === 200) {
			const usersData = JSON.parse(request.responseText);
			const usersDataLenght = Object.keys(usersData).length;

			for (let i = 0; i < usersDataLenght; i++) {
				if (
					nameInput.value === usersData[i].name &&
					passwordInput.value === usersData[i].password
				) {
					callback(usersData[i].name, usersData[i].surname);

					break;
				}
			}
		}
	});

	request.open("GET", path);
	request.send();
};
