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

window.addEventListener("keydown", (e) => {
	switch (e.key) {
		case "Enter":
			getUsers("components/users.json")
				.then((data) => {
					USER_ID_DIV.textContent = `${data.name} ${data.surname}`;
				})
				.catch((error) => {
					console.log(error);
				});
			break;
	}
});

formSubmit.addEventListener("click", () => {
	getUsers("components/users.json")
		.then((data) => {
			USER_ID_DIV.textContent = `${data.name} ${data.surname}`;
		})
		.catch((error) => {
			console.log(error);
		});
});

const getUsers = (path) => {
	return new Promise((resolve, reject) => {
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
						resolve(usersData[i]);

						return;
					}
				}
				reject("Could not find the user");
			} else if (request.readyState === 4) {
				reject(`error ${request.status}`);
			}
		});

		request.open("GET", path);
		request.send();
	});
};
