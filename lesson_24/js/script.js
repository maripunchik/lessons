// cуворий режим
"use strict"

document.addEventListener('click', function (e) {
	const targetElement = e.target;
	if (targetElement.closest('.header__icon')) {
		document.documentElement.classList.toggle('menu-open');
	}
})

// -----------------------------------

const textTitle = "Основи JavaScript. Частина №4"

let template = ``

function initTextTitle(textTitle) {
	for (let i = 0; i < textTitle.length; i++) {
		let item = textTitle[i]
		item = item === ' ' ? '&nbsp;' : item
		template += `<span style="animation-delay: ${i * 0.1}s">${item}</span>`
	}
}

initTextTitle(textTitle)

// Вивід у в'юпорт

const practice__title = document.querySelector('.practice__title')
practice__title.insertAdjacentHTML("beforeend", template)

//-----------------------------------------------------


//--------- Задача №1 ----------------------------

document.addEventListener("click", documentAction)
const items = document.querySelectorAll('.practice__item')

function documentAction(e) {
	const elementTarget = e.target
	console.log(elementTarget)

	if (elementTarget.closest('.practice__item')) {
		const currentElement = elementTarget.closest('.practice__item')
		currentElement.classList.toggle('active')
	}
	if (elementTarget.closest('.practice__button')) {  
		const currentElement = elementTarget.closest('.practice__button') 
		currentElement.classList.toggle('active') 
	}
}
const box = document.querySelector('.practice__buttons-box')

const buttons = document.querySelectorAll('.practice__button')

box.insertAdjacentHTML("beforeend", `<button type="button" class="practice__button">Add Click!</button>`) 
// -----------------------------------------------

// -------- Задача №2 -------------------------

// ---------- mask -------------------

let mask = document.querySelector('.mask')

window.addEventListener('load', () => {
	mask.classList.add('hide')
	setTimeout(() => {
		mask.remove()
	}, 2000)
})

// ----------------------------------------


// ------------ Задача №3 -----------------------

const header = document.querySelector('header')
const footer = document.querySelector('footer')

header.addEventListener('mouseenter', bgColorFooter)
header.addEventListener('mouseleave', bgColorFooter)

function bgColorFooter() {
	if (header && footer) {
		header.addEventListener('mouseenter', () => {
			footer.style.backgroundColor = "#f18219"
		})

		header.addEventListener('mouseleave', () => {
			footer.style.backgroundColor = ""
		})
	}
}

//---------------------------------------------------

// ------------ Задача №4 ----------------------------------

const options = {
	root: null,
	rootMargin: "0px 0px 0px 0px",
	threshold: 0.5,
}

const callback = (entries, observer) => { 
	entries.forEach(entry => {

		if (entry.isIntersecting) { 
			const currentItem = entry.target
			const item = currentItem.querySelector(".practice__item-count")
			
			currentItem.classList.add('animate')
			console.log('я тебе бачу')
			if (item) {
				const speed = parseFloat(item.dataset.speed) || 1000
				const limit = parseInt(item.dataset.limit) || 0
				let i = 0
				let timer = setInterval(() => {
					console.log(i)
					i >= limit ? clearInterval(timer) : i += 1 
					item.innerHTML = i
				}, speed)
				observer.unobserve(currentItem)
			}
		} else {
			// currentItem.classList.remove('animate')
			console.log('я тебе не бачу')
		}
	})
}

const observer = new IntersectionObserver(callback, options) 

const animElements = document.querySelectorAll('[class*="--anim"]')
animElements.forEach(animElement => {
	observer.observe(animElement)
})

// ---------------------------------------------

// ---------------- Події -------------------------
// Синтаксис події
// elem/document.addEventListener("ім'я події", func, options) // додавання прослуховувача події
// elem/document.addEventListener("ім'я події", ()=>{ code }, options)

// const button = document.querySelector('.practice__button') // в константі тільки перший елемент!

// button.addEventListener("click", () => { // повісили "датчик"
// code
// alert("Click!")
// button.style.backgroundColor = "yellow"
// button.style.color = "black"
// })

// або (якщо на один і той самий об'єкт повішено декілька датчиків, які можуть посилатись на один і той самий код, який потрібно виконати)

// button.addEventListener("click", setStyle)
// button.addEventListener("mouseenter", setStyle)
// function setStyle() {
// 	button.style.backgroundColor = "yellow"
// 	button.style.color = "black"
// }


// Натискання
// button.addEventListener("click", setStyle) // найчастіше викор-ся подія click
// Наведення миші
// button.addEventListener("mouseenter", setStyle)
// Втрата наведення миші
// button.addEventListener("mouseleave", setStyle)
// Рух миші
// button.addEventListener("mousemove", setStyle)

// ....code...
// setStyle()

// --------------------------------------------------

// const buttons = document.querySelectorAll('.practice__button')

// buttons.forEach(button => {
// 	button.addEventListener("click", () => {
// 		button.style.backgroundColor = "yellow"
// 		button.style.color = "black" // коли є span-не працює
// 	})
// })

// або

// const buttons = document.querySelectorAll('.practice__button')

// buttons.forEach(button => {
// 	button.addEventListener("click", setStyle)
//     function setStyle() {
// 		button.style.backgroundColor = "yellow"
// 		button.style.color = "black" 
// 	})
// })
// ------------------------------------------------------

// const box = document.querySelector('.practice__buttons-box')

// const buttons = document.querySelectorAll('.practice__button')

// box.insertAdjacentHTML("beforeend", `<button type="button" class="practice__button">Add Click!</button>`) 
// колекція статична, додана кнопка не потрапить в цикл, до неї не додадуться стилі і працювати не буде

//   buttons.forEach(button => {
// 	button.addEventListener("click", setStyle)
// 	function setStyle() {
// 		button.style.backgroundColor = "orange"
// 		button.style.color = "black"
// 		button.style.padding = "10px"
// 	}
// 	})

// ---------------------------------------------------

// -- Делегування події (вішаємо один прослуховувач на весь document)---

//document.addEventListener("click", documentAction)
//document.addEventListener("mousemove", documentAction)

//  document.addEventListener("click", () => { // датчик стоїть на всьому документі (Всі товари)
// 	console.log('Click')
// })

// document.addEventListener("click", (e) => { 
// 	console.log(e)
// })

// --------------- Змінна події -------------------------
// event або e

// document.addEventListener("click", setStyle)
// function setStyle(e) {
// 	console.log(e)
// }

// переназиваємо function на documentAction

// document.addEventListener("click", documentAction) // тому що вішаємо подію на весь документ. Тому назва загальна
// document.addEventListener("mouseenter", documentAction)
// function documentAction(e) {
	// 	console.log(e)
	// 	console.log(e.type)
	// 	console.log(e.target)
	// 	if (e.type === "click") {
	// 		// ...
	// 	} else if (e.type === "mouseenter") {
	// 		// ...
	// 	}
	// const tag = e.target.tagName;
	// if (tag === "BUTTON") {
	// 	alert('BUTTON')
	// }


	// Два кроки
	// Крок №1 отримання об'єкту взаємодії
	// const elementTarget = e.target
	// console.log(elementTarget)
	 // Крок №2 перевірка - чи є об'єкт взаєдії
	 // тим який нам потрібен SPAN!!! closest а не contains
// if (elementTarget.closest('.practice__button')) {  // відслідкували, що або у самого об'єкта, або у його батьківського елемента є клас .practice__button
// 	const currentElement = elementTarget.closest('.practice__button') // далі в const привласнюємо або сам об'єкт, або батьківський об'єкт з класом .practice__button
// 	currentElement.classList.toggle('active') // і вже из ним працюємо
// }
	// 	if (elementTarget.closest('.block') && e.type === "mousemove") {
	// 		const currentElement = elementTarget.closest('.block')
	// 		console.log(e.clientX - currentElement.offsetLeft)
	// 		console.log(e.clientY - currentElement.offsetTop)
// }
// Відміна дії за замовченням HTML тегу(якщо є ще посилання )
// 	 e.preventDefault()

//  }


// ----------- Тип події -------------------
//console.log(e.type);
// Об'єкт на якому відбулась подія
//console.log(e.target);
// Положення курсора по осі X відносно вікна
//console.log(e.clientX)
// Положення курсора по осі Y відносно вікна
//console.log(e.clientY)
// Положення курсора по осі X відносно документу
//console.log(e.pageX)
// Положення курсора по осі Y відносно документу
//console.log(e.pageY)



// ---------------- Основні події миші -------------

// click, mouseenter, mouseleave, mousemove


// mouseenter - наведення миші
// mouseleave - переведення миші
// mousemove - рух миші


// -------------- Scroll ----------------------
// window.addEventListener("scroll", func) // можемо відслідковувати скрол тільки на window


// const itemScroll = document.querySelector('.practice__item--scroll')
// window.addEventListener("scroll", windowScroll)

// function windowScroll(e) {
// 	if (itemScroll.getBoundingClientRect().top - window.innerHeight <= 0) { //віднімаємо висоту вікна, щоб дізнатись, коли об'єкт з'явиться
// 		console.log('Видно!') // змінюються пікселі прокрутки
// 	}

// 	// console.log(window.scrollY) // кількість прокручених пікселів по Y
// 	// console.log(window.scrollX) // кількість прокручених пікселів по X
// }

// ---------------------------------------

//Intersection Observer API
//https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API

// const options = {
// 	root: null, // батьківський елемент, всередині якого ми хочемо відслідковувати об'єкт
// 	rootMargin: "0px 0px 0px 0px",
	// Відсоток від розміру об'єкту.
	// При появі якого спрацьовує подія
	// Де 0 це будь яка поява
	// 100 це повна поява об'кта в в'юпорті
// 	threshold: 0.5,
// }

// const callback = (entries, observer) => { //(входження, сам observer) // робиться реакція на подію
// 	entries.forEach(entry => {
		
// 		if (entry.isIntersecting) { // якщо об'єкт з'являється, ми йому надаємо клас
// 			const currentItem = entry.target
// 			currentItem.classList.add('animate')
// 			console.log('я тебе бачу')
// 			if (item) {
// 				let i = 0
// 				let timer = setInterval(() => {
// 					i === limit ? clearInterval(timer) : i += 1
// 					item.innerHTML = i
// 				}, speed)
// 				observer.unobserve(currentItem)
// 			}
// 		} else {
// 			currentItem.classList.remove('animate')
// 			console.log('я тебе не бачу')
// 		}
// 	})
// }

// const observer = new IntersectionObserver(callback, options) // створення(запуск)  observer

// // // якщо один об'єкт
// // // const target = document.querySelector(".button")
// // // observer.observe(target)

// const animElements = document.querySelectorAll('[class*="--anim"]')
// animElements.forEach(animElement => {
// 	observer.observe(animElement)
// })

// observer.unobserve(target)

// ---------------------------------------------------

// ---------- Завантаження ------------------------

// браузер повністю завантажив HTML,
// було побудовано DOM-дерево, але зовнішні ресурси,
// такі як картинки <img> і стилі,
// можуть бути ще не завантажені.


// window.addEventListener("DOMContentLoaded ", domLoaded)
// function domLoaded(e) {

// }

// браузер завантажив HTML і зовнішні ресурси
// (картини, стилі і т.д.).

// window.addEventListener("load", pageLoaded)
// function pageLoaded(e) {
// ALL CODE
// document.documentElement.style.opacity = 1
// 	document.documentElement.classList.add('loaded')
// }

// -----------------------------------------

// --------- Таймер -----------------

// function someFunc() {
// 	console.log('go go go')
// }
// Затримка виконання коду

// setTimeout(() => {
// 	someFunc()
// }, 1000)

// --------------------------------------

// ------------- Інтервал ----------------
// setInterval()

// Зупинка інтервалу
//clearInterval(timer) // дозволяє зупинити таймер

// function someFunc() {
// 	console.log('go go go')
// }

// let i = 5;
// let timer = setInterval(() => {
// 	console.log(i)
// 	i === 1 ? clearInterval(timer) : null
// 	--i
// }, 1000)

// ----------------------------------------

// ------------ AJAX (двосторонній зв'язок з бекендом) -----

async function getData() { // створюється асинхронна функція, отримуємо данні з файлу info.json (напр.може бути адреса серверу)
	const response = await fetch("data/info.json", {})
	if (response.ok) {
		const result = await response.json()
		// console.log(result) // {name: 'Жека', age: '40'}
		initData(result)
	} else {
		alert('помилка')
	}
}
getData()


function initData(data) { // виводимо данні в свій інтерфейс
	for (const item in data) {
		console.log(data[item])
		// const page = document.querySelector('.page')
		// page.insertAdjacentHTML("afterbegin", `<p>${data[item]}</p>`)
	}
}

// --- Данні з метеосайту -----------------

// https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&hourly=temperature_2m


// async function getMeteoData() {
// 	const response = await fetch("https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&hourly=temperature_2m&forecast_days=1", {})
// 	if (response.ok) {
// 		const result = await response.json()
// 		initData(result)
// 	} else {
// 		alert('помилка')
// 	}
// }
// getMeteoData()

// function initData(data) {
// 	data.hourly.temperature_2m.forEach(temp => {
// 		console.log(temp)
// 	})
// }

// -----------------------------------------------------