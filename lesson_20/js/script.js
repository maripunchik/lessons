"use strict"

document.addEventListener('click', function (e) {
	const targetElement = e.target;
	if (targetElement.closest('.top-header__icon')) {
		document.documentElement.classList.toggle('menu-open');
	}
})

//--------------


let checkbox = document.querySelector("#switch");
let body = document.querySelector('body');


let localStorageTheme = localStorage.getItem("theme");

const setThemeColor = () => {

	localStorageTheme === "dark" ? setDarkMode() : setLightMode();
}

const checkModeSeting = () => {
	window.matchMedia('(prefers-color-scheme: dark').addEventListener('change', () => {
		checkThemeChange()
	})
}

const checkThemeChange = () => {
	if (localStorageTheme == null && window.matchMedia('(prefers-color-scheme: dark').matches) {
		setDarkMode()
	} else if (localStorageTheme && window.matchMedia('(prefers-color-scheme: dark').matches) {
		setDarkMode()
	}else {
		setLightMode()
	}
}


const setDarkMode = () => {
	body.classList = 'dark';
	localStorage.setItem("theme", "dark")

	checkbox.checked = true;
}

const setLightMode = () => {
	body.classList = 'light';
	localStorage.setItem("theme", "light")

	checkbox.checked = false;
}



checkModeSeting()
checkThemeChange()
setThemeColor()

checkbox.addEventListener('click', () => checkbox.checked ? setDarkMode () : setLightMode())




// window.addEventListener("load", windowLoad);

// function windowLoad() {
// 	//HTML 
// 	const htmlBlock = document.documentElement;

// 	// Отримуємо збережену тему
// 	const saveUserTheme = localStorage.getItem('user-theme');

// 	// робота з системними налаштуваннями
// 	let userTheme;
// 	if (window.matchMedia) {
// 		userTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
// 	}
// 	window.matchMedia('(prefers-color-scheme:dark)').addEventListener('change', e => {!saveUserTheme ? changeTheme() : null; 
// 	});

// 	// Зміна теми по кліку
// 	const themeButton = document.querySelector('.header__theme');
// 	const resetButton = document.querySelector('.header__reset');
// 	if (themeButton) {
// 		themeButton.addEventListener("click", function (e){
// 			resetButton.classList.add('active');
// 			changeTheme(true);
// 		});
// 	}
// 	if (resetButton) {
// 		resetButton.addEventListener("click", function (e) {
// 			resetButton.classList.remove('active');
// 			localStorage.setItem('user-theme', '');
// 		})
// 	}

// 	// Функція додавання класу теми
// 	function setThemeClass() {
// 		if (saveUserTheme) {
// 			htmlBlock.classList.add('active');
// 		} else {
// 			htmlBlock.classList.add(userTheme);
// 		}
// 	}
//    // Додаємо клас теми 
// 	setThemeClass();

// 	// Функція зміни теми
// 	function changeTheme(saveTheme = false) {
// 		let currentTheme = htmlBlock.classList.contains('light') ? 'light' : 'dark';
// 		let newTheme;
// 		if (changeTheme === 'light') {
// 			newTheme = 'dark';
// 		} else if (currentTheme === 'dark') {
// 			newTheme = 'light';
// 		}
// 		htmlBlock.classList.remove(currentTheme);
// 		htmlBlock.classList.add(newTheme);
// 		saveTheme ? localStorage.setItem('user-theme', newTheme) : null;
// 	}
// }

