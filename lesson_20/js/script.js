"use strict"

document.addEventListener('click', function (e) {
	const targetElement = e.target
	if (targetElement.closest('.top-header__icon')) {
		document.documentElement.classList.toggle('menu-open')
	}
	const targetElInput = e.target
	if (targetElInput.closest('.search-header__button')) {
		document.documentElement.classList.toggle('menu-open-input')
	}
})

//------------------------------------------------------------


let checkbox = document.querySelector("#switch")
let body = document.querySelector('body')
let header = document.querySelector('header')


let localStorageTheme = localStorage.getItem("theme")

const setThemeColor = () => {

	localStorageTheme === "dark" ? setDarkMode() : setLightMode()
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

const navHeaderList = document.querySelector('.nav-header__list')
const listMenuItems = document.querySelectorAll('.nav-header__link')
const listMenuItem = document.querySelector('.nav-header__link')

const choiceLinks = document.querySelectorAll('.top-header__choice-link')

const choiceLinkAccount = document.querySelector('.top-header__choice-link--account')
if (choiceLinkAccount.length) {
	console.log(choiceLinkAccount)
}

const choiceLinkBasket = document.querySelector('.top-header__choice-link--basket')
if (choiceLinkBasket.length) {
	console.log(choiceLinkBasket)
}

const collections = document.querySelector('.collections')
const follow = document.querySelector('.follow-on-instagram')

const setDarkMode = () => {
	body.classList = 'dark'
	header.classList = 'dark'
	follow.classList = 'follow-on-instagram dark'
	navHeaderList.classList = 'nav-header__list dark'
	collections.classList = 'collections dark'
	console.log(collections)

	listMenuItems.forEach((listMenuItem, index) => {

		listMenuItem.classList = 'nav-header__link dark'
		console.log(listMenuItem)

	})

	choiceLinks.forEach((choiceLinkAccount, index) => {

		choiceLinkAccount.classList = 'top-header__choice-link top-header__choice-link--account dark'
		console.log(choiceLinkAccount)
		choiceLinkBasket.classList = 'top-header__choice-link top-header__choice-link--basket dark'
		console.log(choiceLinkBasket)

	})

	localStorage.setItem("theme", "dark")
	checkbox.checked = true;
}

const setLightMode = () => {
	body.classList = 'light'
	header.classList = 'light'
	collections.classList = 'collections light'
	console.log(collections)
	follow.classList = 'follow-on-instagram light'
	navHeaderList.classList = 'nav-header__list light'

	listMenuItems.forEach((listMenuItem, index) => {

		listMenuItem.classList = 'nav-header__link light'
		console.log(listMenuItem)

	})

	choiceLinks.forEach((choiceLink, index) => {

		choiceLinkAccount.classList = 'top-header__choice-link top-header__choice-link--account light'
		console.log(choiceLinkAccount)
		choiceLinkBasket.classList = 'top-header__choice-link top-header__choice-link--basket light'
		console.log(choiceLinkBasket)

	})

	localStorage.setItem("theme", "light")
	checkbox.checked = false
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


