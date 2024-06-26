// cуворий режим
"use strict"

document.addEventListener('click', function (e) {
	const targetElement = e.target;
	if (targetElement.closest('.header__icon')) {
		document.documentElement.classList.toggle('menu-open');
	}
})

// -----------------------------------

const textTitle = "Основи JavaScript. Частина №3"
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


//--------- Задача №1 ----------------------------

const bodyElement = document.body
console.log(bodyElement)

// -----------------------------------------------

// -------- Задача №2 -------------------------

const footer = document.querySelector(".footer")

function createNewList(n = 7) {
	const ul = document.createElement("ul")
	ul.style.display = `flex`
	ul.style.flexWrap = `wrap`
	ul.style.gap = `10px`
	ul.style.justifyContent = `center`
	ul.style.padding = `15px`
	ul.style.backgroundColor = `orange`
	ul.style.color = `black`
	ul.style.cursor = `pointer`
	if (n === 0 || typeof n === 'string') {
		return 'Значення аргументу введено некоректно!!'
	} else {
		for (let i = 1; i <= n; i++) {
			const li = document.createElement("li")
			
			console.log(li)

			li.textContent = `Мало-li :))) номер ${i}`

			ul.append(li)
		}
		footer.before(ul)
	}
}
// createNewList(3)

function showMessage(someText = "Результат операції: все Ок") {
	console.log(someText)
}
showMessage(createNewList(3))

// -------------------------------------------------


// ------------ Задача №3 -----------------------


const bodyNewElement = document.body
bodyNewElement.classList.add('loaded')

// if (bodyNewElement.classList.contains('loaded')) {
// 	console.log('Знайшовся!')
// 	bodyNewElement.style.color = `green`
// }

// ----- або ------------------------------------

bodyNewElement.classList.contains('loaded') ? bodyNewElement.style.color = 'green' : false
console.log('Знайшовся!')

//---------------------------------------------------

// ------------ Задача №4 ----------------------------------

const listPracticeItems = document.querySelectorAll('.practice__item')
const listPracticeItem = document.querySelector('.practice__item')
listPracticeItems.forEach((listPracticeItem, index) => {
	listPracticeItem.classList.add('active')
	listPracticeItem.innerHTML = `<li class="practice__item">Елемент №${index + 1}</li>`
})

// ---------------------------------------------

// ---------- Задача №5 ---------------------------------

const practiceButton = document.querySelector('.practice__button')

if (practiceButton) {
	practiceButton.scrollIntoView({
		block: "center",
		inline: "nearest",
		behavior: "smooth"
	})
}


// ----------------------------------------------

// ---------- Задача №6 ---------------------------------


const link = document.querySelector('.footer__link')

if (link) {
	//  link.dataset.speed = '100'
	const speed = parseInt(link.dataset.speed)   // || 300
	console.log(speed)
	if (speed < 200) link.style.color = 'red'
}

// if (link) {
// 	link.dataset.direction = 'left'

// 	const direction = link.dataset.direction
// 	console.log(direction)

// 	if (direction === `left`) link.style.color = 'blue'
// }

//-----------------------------------------------------

// WINDOW

// ---- Отримання ширини вікна браузера (в'юпорта) ------

// const windowWidth = window.innerWidth //створюється const windowWidth(напр)
//  innerWidth - саме внутрішня ширина в'юпорта
// console.log(windowWidth)

// --- Отримання висоти вікна браузера (в'юпорта)------

// let windowHeight = window.innerHeight;
// console.log(windowHeight);

// if (windowWidth >= 768) {
	// якісь дії
// }

// --------- BOM (browser object model) все, що крім в'юпорта -----------------
// Navigator - можемо отримати інформацію про сам браузер  і про систему в якій знаходиться користувач, в момент, коли заходить на наш сайт

// Дані про браузер
// console.log(navigator.userAgent)
//  Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Mobile Safari/537.36
// якщо є Chrome - то це Chrome

// ----- Який в нас браузер ------------

// if (navigator.userAgent.includes("Chrome")) {
// 	console.log('Браузер Хром') // Браузер Хром
// } else if (navigator.userAgent.includes("Firefox")) {
// 	console.log('Браузер Firefox')
// }

// --------- Платформа -------------
// Інформація про систему
// console.log(navigator.userAgentData) //NavigatorUAData {brands: Array(3), mobile: false, platform: 'Windows'}
// Мобілка?
// console.log(navigator.userAgentData.mobile)  //false
// Платформа
// console.log(navigator.userAgentData.platform) //Windows

//----------------------------------------------

// ----------- Location ------------
// Адресний рядок браузера

// console.log(location)
// console.log(location.href)
// console.log(location.hash)

// const cleanHash = location.hash.replace("#", "")
// console.log(cleanHash);

// if (cleanHash === "popup") {
 	// ....
// }

//--------------------------------------

// ------ Перенаправлення користувача ------
// можемо не тільки отримати адресний рядок користувача, а і змінити його

// location.href += '#popup' // location.href додається інша сторінка, на яку буде перенаправлено користувача

// location.href += 'practice.html'

// --------------------------------------------

// ---------- Alert --------------------------
//  alert('Повідомлення') // стилізувати не можемо
//--------------------------------------------

// ----- Сonfirm - більш складне повідомлення -------
// Ok-true / Скасувати - false

// const confirmAnswer = confirm("Запитання")
// console.log(confirmAnswer)

//  if (confirmAnswer) {
  	//якщо так
//  } else {
  	//якщо ні
//  }

// або

// confirmAnswer ? якщо так : якщо ні

//---------------------------------------

// ---------- Prompt ---------------------
// Запитання з imput
// Cancel - отримаємо 0
//

let promptAnswer = prompt("Погодьтесь, ми на найкращому курсі з ЯПВІ у Всесвіті?")
console.log(promptAnswer)

if (!promptAnswer) {
	console.log('Ok')
}


if (promptAnswer === null) {
	console.log('Юзер натиснув cancel')
} else if (promptAnswer) {
	console.log(`Відповідь користувача: ${promptAnswer}`)
} else {
	console.log(`Користувач не надав відповідь`)
}

// --------------------------------------------------

// -----Document Object Model (DOM) ---------------
// Об'ектна модель документу

// ---- Навігація по документу -------

// До тегу html

// const htmlElement = document.documentElement
// console.log(htmlElement) // весь HTML (дерево)


// До тегу head

// const headElement = document.head
// console.log(headElement) // тільки head зі всім вмістом


// До тегу body

// const bodyElement = document.body
// console.log(bodyElement) // тільки body зі всім вмістом


// Перший та останній дочірній елемент

// const bodyElement = document.body
// const firstChild = bodyElement.firstElementChild
// const lastChild = bodyElement.lastElementChild

// console.log(firstChild)
// console.log(lastChild)

// --------------------------------------------------

// Усі дочірні елементи (Колекція)
// const bodyElement = document.body
// Колекція дочірніх елементів
// const childNodes = bodyElement.children

// console.log(childNodes)  // HTMLCollection(2) [div.wrapper, script]


// for (let index = 0; index < childNodes.length; index++) {
// 	console.log(childNodes[index])
// }


// For ... of метод перебору для колекцій

// for (let childNode of childNodes) {
// 	console.log(childNode)
// }

// -------------------------------------------------

// Навігація до батьківських та сусідніх елементів

// відносно поточного, на тому ж рівні вкладенності

// const bodyElement = document.body
// const previousSibling = bodyElement.previousElementSibling
// const nextSibling = bodyElement.nextElementSibling
// console.log(previousSibling) // отримаємо доступ до head
// console.log(nextSibling) // отримаємо null

// ---------------------------------

//- !!! Найчастіше використовується !!!
//-----------------------------------------
// Пошук та отримання довільного елементу //
//-------------------------------------------

// Оримання одного першого знайденого об'єкту

// const liElement = document.querySelector("li")
// console.log(liElement) // <li class="header__nav-item">...</li>

 // Чи щось знайдено?
// if (liElement) {
	// тоді працюємо...
// }

// ------------------------------------------

// Оримання списку знайдених об'єктів
// (статична колекція)

// const liElements = document.querySelectorAll("li")
// console.log(liElements)
// NodeList(6) [li.header__nav-item, li.header__nav-item, li.header__nav-item, li.header__nav-item, li.header__nav-item, li.header__nav-item]

// forEach - найбільш простий і зрозумілий спосіб перебрати статичну колекцію
// Чи щось знайдено?
//  if (liElements.length) { // перевірка (саме з length!!!)
 	// тоді працюємо...
//  	liElements.forEach((item, index) => {
// 		console.log(item) // отримаємо кожен li окремо
// 	});
//  }

// -----------------------------------------

// ------------Селектор класів-----------

//- !!! Обов'язково використовуємо крапку для імені класу

// const liElements = document.querySelectorAll(".list__item")
// console.log(liElements) //NodeList [] length:0

// можна уточнити (саме li, якщо, напр., буде div з таким же класом):

// const liElements = document.querySelectorAll("li.list__item")
// console.log(liElements) //NodeList [] length:0

// -----------------------------------------

// Уточнення пошуку .active

//  const liElements = document.querySelectorAll('.list__item.active')
// console.log(liElements) // NodeList []

// -------------------------------------------


// Усі об'єкти які мають в назві класу __item

// const liElements = document.querySelectorAll('[class*="__item"]')
// console.log(liElements)

// -----------------------------------------

// Селектор ID

// const someElement = document.querySelector('#some-id')
// console.log(someElement)

// ----------------------------------------------------


// ------ Отримання батьківського об'єкту ------------

// const listElement = document.querySelector('.header__nav-list')
// const parentElement = listElement.parentElement
// console.log(parentElement) // <div class="header__container">...</div>


// --------- Closest -------------------

// (Перевірка наявності батьківського об'єкту)
//- ! Шукає не тільки батьківський об'єкт
// а й перевіряє чи є вказаний селектор у самого об'єкту

// const listItem = document.querySelector('.header__nav-item')

// const parentElement = listItem.closest('.wrapper')
// console.log(parentElement) // div.wrapper

// const parentElement = listItem.closest('.footer')
// console.log(parentElement) // null (не являється батьківським елементом)

// const parentElement = listItem.closest('.active')
// .active - починає шукати з самого себе, не з батьківського елемента
// console.log(parentElement) // null

// -------------------------------------------------

// ----------Зміна документу-----------------

const listItems = document.querySelectorAll('.header__nav-item')
console.log(listItems)
// NodeList(6) [li.header__nav-item, li.header__nav-item, li.header__nav-item, li.header__nav-item, li.header__nav-item, li.header__nav-item]

// innerHTML - дає змогу отримати те що всередені об'єкту, включно з тегами. Він і візьме тег і може записати
// Також дозволяє перезаписувати контент в середені об'єкту

listItems.forEach((listItem, index) => {
	console.log(listItem.innerHTML)
	//<a class="header__nav-link" href="#task1">Задача №1</a> ...
	listItem.innerHTML = `<a class="header__nav-link" href="#task1">Перейти до Задачі №${++index}</a>`
})

const someIdElements = document.querySelectorAll('#task')
console.log(someIdElements)

someIdElements.forEach((someIdElement, index) => {
	
	someIdElement.innerHTML = `#task${index + 1}`
})


// -------------------------------------------

// textContent дає змогу отримати текст всередені об'єкту. Він не може працювати з тегами. Тег буде виводитися як рядок. Він візьме тег і записати зможе лише текст у вигляді тегу(але це буде текст)
// Також дозволяє перезаписувати текст в середені об'єкту

// listItems.forEach(listItem => {
 	//console.log(listItem.textContent)
	//listItem.textContent = '<span>Привіт!</span>'
// })


// ---------- Створення об'єктів -------------

// let newElement = document.createElement('div')
// newElement.innerHTML = `<span>Привіт!</span>`
// console.log(newElement)

// const page = document.querySelector('.page')
// знаходиться тільки в пам'яті, потрібно вивести

// звертаємось до page:

// Вставка ВЖЕ створеного об'єкту
// Перед
//page.before(newElement)
// Після
// page.after(newElement)
// Всередену на початок
// page.prepend(newElement)
// Всередену в кінець
// page.append(newElement)

// ----------------------------------------

// insertAdjacentHTML/Text/Element - де саме виведеться елемент

// --------------------------------------

const page = document.querySelector('.page')

let example = `<div class="block">` // в змінну пхаємо купу HTML
if (page) { // якщо існує page, ми ще дозаписуємо +=
	example += `<span style="color:${'black'}; background-color:${'orange'}; padding: ${'10px 10px'}; display:${'flex'}; justify-content:${'center'};"><a href="https://uk.wikipedia.org/wiki/JavaScript" target="_blank">JavaScript</a></span>`
} 
example += `</div>` // вкінці дозаписуємо, закриваючи </div>, який закриває цей блок

console.log(example)

// виводимо в HTML

// page.innerHTML += example


page.insertAdjacentHTML("beforebegin", example)




// -------------------------------------------------

// page.insertAdjacentText("afterend", example) // все, навіть теги, виведуться текстом
// page.insertAdjacentElement("beforeend", newElement)

// ---------------------------------------------------


// "beforebegin" – вставити html безпосередньо перед wrapper,
// "afterbegin" – вставити html на початок wrapper,
// "beforeend" – вставити html в кінець wrapper,
// "afterend" – вставити html безпосередньо після wrapper.

// -----------------------------------------


// page.insertAdjacentHTML("beforeend",
// 	`<div class="about">...</div>`
// )

// --------------------------------------------

// ---------- Перенесення елементу -----------

const img = document.querySelector('.practice__img-wrapper')
const pageImg = document.querySelector('.page')
page.insertAdjacentElement('beforeend', img)

if (pageImg) {
	img.style.padding = '20px'
	img.style.marginInline = 'auto'
}

// ----------------------------------------------

// ------------- Клонування елементу ------------

// cloneNode() - клонує сам об'єкт БЕЗ ВМІСТУ!!!
// coneNode(true) - клонує об'єкт з вмістом

// const page = document.querySelector('.page')
// const clonePage = page.cloneNode()
// const clonePage = page.cloneNode(true)
// console.log(clonePage)

const cloneImg = img.cloneNode(true)
page.insertAdjacentElement('afterbegin', cloneImg)

// --------------------------------------

// ----------- Видалення об'єкту ------------

// const list = document.querySelector('.page')
// list.remove() // (видалився page) фізично видалено

// ---------------------------------------------------

// ----------------- Стилі та класи -----------------

// ------- className -------- classList ------------

// ------ className - перезапис класу (не додаємо, а саме перезаписуємо)--------------

// const list = document.querySelector('.list')
// list.className = 'some-class'

// -----------------------------------------------

// const list = document.querySelector('.list')

// classList - метод роботи з класами
//- !!! НЕ використовуємо крапку для імені класу

// list.classList.add('red') // додати клас
// list.classList.remove('active') // видалити клас
// list.classList.toggle('active') // якщо є клас, він його прибере, якщо немає-він його додасть
// list.classList.contains('active') // не метод, а перевірка(чи є клас у об'єкта?)

// if (list.classList.contains('active')) {
// 	console.log('Клас є!')
// }

// --------------------------------------------------

// -------------- Управління стилями ----------------

// style (параметр style)
// const list = document.querySelector('.list')
/*
list.style.paddingTop = `50px`
list.style.fontSize = `50px`
list.style.backgroundColor = `red`
list.style.color = `black`
*/
// ------------------------------------------


// Перезапис стилів на вказані

// list.style.cssText = `
		// padding-top: 20px;
		// background-color: #794f45;
		// font-size: 30px;
// `

// ----------------------------------

// Отримання стилю (його значення)
// getComputedStyle
//const list = document.querySelector('.list')
//const listStyle = getComputedStyle(list)
//const listStyleFontSize = listStyle.fontSize
//const listStyleFontSize = parseFloat(listStyle.fontSize) // працюємо зі значенням, як з числом

//console.log(listStyleFontSize)

// ----------------------------------------

// Робота з атрибутами

// const list = document.querySelector('.list')
//Перевіряємо наявність атрибута. Повертаємо true/false
// list.hasAttribute('name')
//console.log(list.hasAttribute('class'))
//Отримуємо значення атрибута.
// list.getAttribute('name')
//console.log(list.getAttribute('class'))
//Установлюємо значення атрибута.
// list.setAttribute('name', 'value')
// list.setAttribute('title', "Підказка")
//Видаляємо атрибут.
// list.removeAttribute('name')
// list.removeAttribute('class')

// ------------------------------------------------

// ----------- DATA атирибути ------------------

// Завжди буде повертатись рядок
// Унарний оператор + переведе рядок в число
// Краще використовувати parseFloat

// const list = document.querySelector('.list')
// const speed = parseFloat(list.dataset.speed) || 500 // -пишемо значення за замовчення(або те, що написав користувач, або значення за замовченням)
// const direction = list.dataset.direction || "left" // -пишемо значення за замовчення(або те, що написав користувач, або значення за замовченням)
// const scrollSpeed = +list.dataset.scrollSpeed || 100 // унарний оператор + переведе в number

// if (list.hasAttribute('data-scroll-animate')) {
 // якщо .list має наступний атрибут, тоді працюємо
// } else {

// }

// if (direction === 'left') {

// } else {

// }

// -----------------------------------------------------

// ----------- Корисні властивості --------------------


// const list = document.querySelector('.list')


// ----------- Отримання імені тегу ---------------

// console.log(list.tagName)

// if (list === "UL"){

// }

// ------------------------------------------------

// ---------------- Атрибут hidden --------------

// list.hidden = true // краще за display:none
// ховаємо об'єкт без зміни його поведінки

// -----------------------------------------


// ---------- Розміри та кординати ------------

// Розміри вікна браузера (з полосами прокрутки)

// --------- об'єкт window ---------------------

// const windowWidth = window.innerWidth;
// const windowHeight = window.innerHeight;
// console.log(windowWidth);
// console.log(windowHeight);

// -----------------------------------------

// Розміри вікна браузера (без прокрутки)

// --------------- об'єкт body -------------

// clientWidth clientHeight

// const mainElement = document.body;
// const windowClientWidth = mainElement.clientWidth;
// const windowClientHeight = mainElement.clientHeight;
// console.log(windowClientWidth);
// console.log(windowClientHeight);


// --------- Кількість прокручений пікселів ------
// --------- об'єкт window ----(prostir) ----------

// const windowScrollTop = window.scrollY
// const windowScrollLeft = window.scrollX
// console.log(windowScrollTop)
// console.log(windowScrollLeft)

// ----------------------------------------------

// -------- window.scrollTo({ options }) ---------
// -------- прокрутка на вказані кординати --------

// window.scrollTo({
// 	top: 1000,
// 	left: 0,
// 	behavior: "smooth" // Safari не працює // поведінка прокрутки
// })

// --------------------------------------------

// --------- elem.scrollIntoView(); ---------
// --------- Проктурка до об'єкту -----------
// щоб не вираховувати, скільки пікселів до об'єкту

// const list = document.querySelector('.list')
// function scrollToBlock(element) {
// 	const block = element.dataset.scroll
// 	element.scrollIntoView({
 		//"start", "center", "end". За замовчуванням "center".
// 		block: block,
 		//"start", "center", "end" чи "nearest". За замовчуванням "nearest".
// 		inline: "nearest",
// 		behavior: "smooth"
// 	});
// }
// scrollToBlock(list);

// керування з HTML data-scroll=""

// ----------------------------------------------

// ------------ Позиція об'єкта ------------------

// offsetLeft та offsetTop
// offsetParent - батьківський об'єкт
// (transform, або position absolute, relative, fixed чи sticky)
// відносно якого рахується кординати

const listPos = document.querySelector('.header__nav-list')
const listPosLeftPos = listPos.offsetLeft
const listPosTopPos = listPos.offsetTop

console.log(listPosLeftPos) // 345 - зліва
console.log(listPosTopPos) // 20 - зверху

// ----------------------------------------


// ---- Кординати відносно вікна браузера ----
// -------- getBoundingClientRect -----------

const list = document.querySelector('.header__nav-list')
console.log(list.getBoundingClientRect().top) // -2278.800
console.log(list.getBoundingClientRect().left) // 345

// -----------------------------------------------

// -- Загальні розміри елемента (без зовнішніх відступів) --
// --------- offsetWidth и offsetHeight -------------

const listSize = document.querySelector('.header__nav-list')
console.log(listSize.offsetWidth) // 439
console.log(listSize.offsetHeight) // 100

// ----------------------------------------------

// --------- Intersection Observer API -----------
// https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API

// ------------------------------------------------

// ---------- NodeList, HTMLCollection, Array ---------

// const list = document.querySelector('.list')
// const listItems = document.querySelectorAll('.list__item')
// // const listItems = list.children
// list.insertAdjacentHTML('beforeend', `<li class="list__item">6</li>`)

// // Перевід колекції в масив
// const listItemsArray = Array.from(listItems)
// console.log(listItemsArray)

// ------------------------------------------------------