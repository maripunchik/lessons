// cуворий режим
"use strict"

document.addEventListener('click', function (e) {
	const targetElement = e.target;
	if (targetElement.closest('.header__icon')) {
		document.documentElement.classList.toggle('menu-open');
	}
})

// ------------------------------------------------------------------------

const textTitle = "Основи JavaScript. Частина №2"
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

// ---------------------------------------------------------

//--------- Задача №1 ----------------------------

let someVar = 0
++someVar

if (someVar) {
	console.log(someVar)
	console.log(typeof someVar) // number
}

// -----------------------------------------------

// -------- Задача №2 -------------------------

for (let i = 1; i <= 10; ++i) {
	console.log(`Пункт №${i}`)
}

// ----- або -----------

for (let i = 1; i < 11; ++i) {
	console.log(`Пункт №${i}`)
}

// -------------------------------------------------


// ------------ Задача №3 -----------------------

if (2 * 20 <= 10 || 30 / 2 < 5 && 10 <= "10" || 20 === "20") {
	console.log('000')
}
if (40 <= 10 || 15 < 5 && 10 <= "10" || 20 === "20") {
	console.log('000')
}

// крок №1 (пріоритет у операторів порівняння в порівнянні з логічними операторами)

// if (false || false && true || false) {
// console.log('000')
// }

// крок №2 (пріоритет у операторa &&)
// if (false || false && true || false) {}
// false && true - повертає false
// if (false || false || false) {}

// крок №3
// if (false) {}

//---------------------------------------------------

// ------------ Задача №4 ----------------------------------


function calcDivide(a, b) {
	const result = a / b
	if (b === 0 || result === Infinity) {
		return `Результат ділення: На нуль ділити не можна!!! `
	}
	else if (a === undefined || b === undefined) {
		return `Результат ділення: Обчислення не може бути виконано!!!`
	}
	else if (Number.isNaN(result)) {
		return `Результат ділення: Значення аргументів введені некоректно!!!`

	}

	return `Результат ділення: ${result}`
}

function showMessage(someText = "Результат ділення:") {
	console.log(someText)
}

// calcDivide(100, 20) // Результат ділення: 5
showMessage(calcDivide(100, 20))  //Результат ділення: 5


// // calcDivide("someString") //
showMessage(calcDivide("someString")) // Результат ділення: Обчислення не може бути виконано!!!

// //  calcDivide(1, 0) //
showMessage(calcDivide(1, 0)) // Результат ділення: На нуль ділити не можна!!! 

// // calcDivide(1, ) //
showMessage(calcDivide(1,)) // Результат ділення: Обчислення не може бути виконано!!!



// // calcDivide(1, "2") //
showMessage(calcDivide(1, "2")) // Результат ділення: 0.5

// // calcDivide(1, "2") //
showMessage(calcDivide("впвп", "2")) // Результат ділення: Значення аргументів введені некоректно!!!


// ---------------------------------------------

// ---------- Задача №5 ---------------------------------

let someArray = [50, true, false, "Привіт!", 10]

console.log(someArray) // (5) [50, true, false, 'Привіт!', 10] , (5) - довжина масиву
console.log(someArray.length) // 5
console.log(someArray[2]) // false

console.log(Array.isArray(someArray)) // true

for (let i = 0; i < someArray.length; ++i) {
	if (someArray[i] === 10) {
		console.log('Це саме та десятка!!!')
	}
}

// --------------- або --------------

let newArray = ["Привіт!", true, false, "15", 10]

if ((newArray.includes(10))) {
	console.log('Це саме та десятка!!!')
}
else {
	console.log('Треба ще пошукати')
}

// ----------------------------------------------

// --------------- або --------------

let arrayNew = ["Привіт!", true, false, "15", 11]

if ((arrayNew.includes(10))) {
	console.log('Це саме та десятка!!!')
}
else {
	console.log('Треба ще пошукати')
}

// ----------------------------------------------

// ------- або -------------

let someNewArray = ["Привіт!", true, false, "15", 11]
let array = ["Привіт!", true, false, "15", 10]

if ((someNewArray.includes(10)) || (array.includes(10))) {
	console.log('Це саме та десятка!!!')
}
else {
	console.log('Треба ще пошукати')
}


// console.log(someNewArray.includes("10")) // true
// console.log(someNewArray.includes(10))  // true
// console.log(someNewArray.includes("Привіт!"))  // true


// ------------------------------------------

// ---приорітетність операторів----

// let result = 2 + 3 * 10 / + "5"

// 1. Відбувається перевід типу даних за доп.унарного оператора додавання (+ "5"), або навіть, якщо його б не було(10 / "5") - оператор ділення переводить рядок "5" в число 5
// let result = 2 + 3 * 10 / 5

// 2.
// let result = 2 + 30 / 5

// 3.
// let result = 2 + 6

// 4.
// let result = 8

// console.log(result)

//---------------------------

// let num = 5
// let results = 2 + 3 * 10 / ++num

// 1. Відбувається інкремент(збільшує на 1 (++num))
// let result = 2 + 3 * 10 / 6

// 2.
// let result = 2 + 30 / 6

// 3.
// let result = 2 + 5

// 4.
// let result = 7

// console.log(results)

//---------------------------

//----оператори порівняння-------
// повертають булеве значення (true/false)
// < > <= >=
// == != (дорівнює/недорівнює-змінюють тип даних)
// === !== (суворе дорівнює/недорівнює- НЕ змінюють тип даних)

// let result = 5 >= 6 // 5 не > і не= 6
// console.log(result) // false
// console.log(typeof result) // boolean

// let result = 5 >= 5 //
// console.log(result) // true
// console.log(typeof result) // boolean

// let result = 5 > 5 // 5 не > 5
// console.log(result) // false
// console.log(typeof result) // boolean

// let result = 12 >= 10 // 12 > 10
// console.log(result) // true
// console.log(typeof result) // boolean

//------оператор дорівнює-------

// let result = 5 == "5" // цифра 5 = рядку 5
// 1.Оператор несуворого порівняння переведе рядок в число
// let result = 5 == 5
// 2.Порівняє
// let result = true
// console.log(result) // true
// console.log(typeof result) // boolean

//-------оператор недорівнює---------------

// let result = 5 != "5" // цифра 5 не = рядку 5
// 1.Оператор несуворого порівняння переведе рядок в число
// let result = 5 != 5 // цифра 5 не= цифрі 5
// 2.Порівняє
// let result = false
// console.log(result) // false
// console.log(typeof result) // boolean

//---оператор суворого дорівнювання----------

//let result = 5 === "5" // цифра 5 суворо = рядку 5
// 1.Оператор суворого порівняння НЕ переведе рядок в число
// let result = 5 === "5" // цифра 5 суворо = рядку 5
// 2.Порівняє
// let result = false
//console.log(result) // false
//console.log(typeof result) // boolean

//---оператор суворого недорівнювання----------

//---оператор суворого дорівнювання----------

// let result = 5 === "5" // цифра 5 суворо = рядку 5
// 1.Оператор суворого порівняння НЕ переведе рядок в число
// let result = 5 === "5" // цифра 5 суворо = рядку 5
// 2.Порівняє
// let result = false
// console.log(result) // false
// console.log(typeof result) // boolean

//----------------------------

// let a = 5
// let b = "5"
// ......code......
// ......code......
// ......code......
// ......code......
// let result = a == b // a не дорівнює b!!!!!!
// console.log(result) // true
// console.log(typeof result) // boolean

// використовувати СУВОРЕ порівняння! ===

// let a = 5
// let b = "5"
// ......code......
// ......code......
// ......code......
// ......code......
// let result = a === b // a не дорівнює b!!!!!!
// console.log(result) // false
// console.log(typeof result) // boolean

// для пееревірки запросити тип даних операндів

// console.log(a) // 5
// console.log(typeof a) // number

// console.log(b) // 5
// console.log(typeof b) // string

//----- оператор присвоєння =  ------------
// let someNum = 5

//----логічні оператори------

//-- ! || && ---

// оператор "ні" ! (унарний)

// let result = 0
// console.log(typeof result) // number
// console.log(result) // 0

// let result = !0
// 1. перевод типу даних в буліан
// 2. отримання рез-ту true або false
// let result = false
// 3.зміна булєвого значення на протилежне
// let result = true
// console.log(typeof result) // boolean
// console.log(result) // true

//----------------

//let result = !12
// 1. перевод типу даних в буліан
// 2. отримання рез-ту true або false
// let result = true
// 3.зміна булєвого значення на протилежне
// let result = false
//console.log(typeof result) // boolean
//console.log(result) // false

//-------------------

// ----оператор "або" || (бінарний)---------
// операнд №1 || операнд №2

// 1. перевод типу даних в буліан
// 2. отримання рез-ту true або false операнда №1 (чи є хліб)
// 3. якщо рез-т кроку 2 - true, завершуємо дію  (хліб є)))
// 3.1 рез-м операції буде значення операнда №1 та булеве значення true
// 4. якщо рез-т кроку 2- false, отримання рез-ту true або false операнда №2 (не побачили хліб, шукаємо булку)
// 4.1 якщо рез-т кроку 4 true, рез-том операції буде значення операнда №2 та булеве значення true
// 5. якщо рез-т кроку 4 false, рез-том операції буде значення операнда №2 та булеве значення false (нема ні хліба ні булки)

//-------на практиці-------------

// let result = 0 || ""
// console.log(result) // значення, яке потрапляє в змінну
// console.log(Boolean(result)) // булеве значення операції

// 1. 0 переводиться в буліан
//    пустий рядок переводиться в буліан
// 2. отримання рез-ту true або false операнда №1:
//  0 в булевому значенні-це false
// 3. якщо рез-т кроку 2 - true, завершуємо дію
// 3.1 рез-м операції буде значення операнда №1 та булеве значення true
// 4. якщо рез-т кроку 2- false, отримання рез-ту true або false операнда №2:
// пустий рядок в бул.значенні false
// 4.1 якщо рез-т кроку 4 true, рез-том операції буде значення операнда №2 та булеве значення true
// 5. якщо рез-т кроку 4 false, рез-том операції буде значення операнда №2(пустий рядок) та булеве значення false

//------------------------------------------

// let result = 2 || ""
// console.log(result) // значення, яке потрапляє в змінну
// console.log(Boolean(result)) // булеве значення операції

// 1. 2 переводиться в буліан
//    пустий рядок переводиться в буліан
// 2. отримання рез-ту true або false операнда №1:
//  2 в булевому значенні-це true
// 3. якщо рез-т кроку 2 - true, завершуємо дію
// 3.1 рез-м операції буде значення операнда №1(2) та булеве значення true

// -------------------------------------

// let result = 50 || 12
// console.log(result) // значення, яке потрапляє в змінну
// console.log(Boolean(result)) // булеве значення операції

// 1. 50 переводиться в буліан
//    12 переводиться в буліан
// 2. отримання рез-ту true або false операнда №1:
//  50 в булевому значенні-це true
// 3. якщо рез-т кроку 2 - true, завершуємо дію
// 3.1 рез-м операції буде значення операнда №1 (50) та булеве значення true

//--------------------------------------

// --- логічний оператор "та" && -----

// let result = 4 && 5

// 1. перевод типу даних в буліан
// 2. отримання рез-ту true або false операнда №1 (чи є хліб)
// 3. якщо рез-т кроку 2 - false, завершуємо дію  (хліба немає, немає сенсу шукати масло)))
// 3.1 рез-м операції буде значення операнда №1 та булеве значення false
// 4. якщо рез-т кроку 2- true, отримання рез-ту true або false операнда №2 (побачили хліб, шукаємо масло)
// 4.1 якщо рез-т кроку 4 false, рез-том операції буде значення операнда №2 та булеве значення false(якщо не знайшли масла)
// 5. якщо рез-т кроку 2 ТА 4 true, рез-том операції буде значення операнда №2 та булеве значення true (є хліб та масло)

// console.log(result) // значення, яке потрапляє в змінну
// console.log(Boolean(result)) // булеве значення операції

//--------------------------------------------

// ---- Умовне вітвлення-----
// синтаксис

//if (умова #1) {
	// код, який виконається, тільки якщо умова #1 повертає true
//} else if (умова #2) {
	// код, який виконається, тільки якщо умова #2 повертає true, а умова #1 повертає false
//} else {
	// код, який виконається, тільки якщо умова #2 повертає false, та умова #1 повертає false
// }
// продовження коду ...

//-----------------------------

// let varOne = 5 // Працює!
// let varTwo = 30

// конструкція if переводить тип даних в boolean і перевіряє

// if (varOne) { // чи varOne true?
// виконуємо, якщо так (true)
// console.log("Працює!")
// }

//-----------------------------------


//  let varOne = 5
//  let varTwo = 20

// if (varOne > varTwo) {
// чи правда(true), що varOne більше за varTwo?
// 	console.log(`${varOne} більше ніж ${varTwo}`)
// } else if (varOne === 10) {
// чи правда(true), що varOne суворо дорівнює 10?
// 	console.log(`varOne дорівнює 10`)
// } else if (varTwo === 20) {
// чи правда(true), що varTwo суворо дорівнює 20?
// 	console.log(`varTwo дорівнює 20`)
//  } else {
// виконуємо, якщо всі попередні умови false
// 	console.log(`Все пропало...`)
// }

// продовження коду ...
// console.log(`продовження коду...`)
// else if - може бути безліч (умовне вітвлення)

// ------------------------------

// let varOne = "1"
// let varTwo = 3
// let varThree = 3
// let varFour = 4

// if (varTwo === 2 || varOne > 3 && varThree > 4 || varFour > 6) {
//код виконається тільки якщо умова повертає true
// 	console.log(`Умова true`)
// }

// продовження коду ...
// console.log(`продовження коду...`)

// крок №1 (пріоритет у операторів порівняння в порівнянні з логічними операторами)

// if (false || false && true || false) {}

// крок №2 (пріоритет у операторa &&)
// if (false || false && true || false) {} // false && true - повертає false
// if (false || false || false) {}

// крок №3
// if (false) {}

//---------------------------------

//---- оператор умови ? -----------------
// синтаксис

// умова ? значення, якщо умова true : значення, якщо умова false

// let someVar = 10 > 5 ? "10 більше 5" : "10 менше 5"
// console.log(someVar) // 10 більше 5

// або

// let someVar
// if (10 > 5) {
// 	someVar = "10 більше 5"
// } else {
// 	someVar = "10 менше 5"
// }
// console.log(someVar) // 10 більше 5

//---Гарний приклад порівняння (умова без умови)------

// const item = document.querySelectorAll(`.some-class`)
// const animateSpeed = +item.dataset.speed || 500

//-----------------------------

// const userAge = 40

// const userType = userAge >= 40 ? "Старий" : "Ще побігає"

// let userType
// if (userAge >= 40) {
// 	userType = "Старий"
// } else {
// 	userType = "Ще побігає"
// }

// console.log(userType)

//-------------------------------------

// -----------Цикл for--------
// цикл-перебір чогось
// початок з нульового значення, крок -1 коло за раз, умова закінчення циклу(10 кіл, напр)
// синтаксис

// for(початок; умова закінчення циклу; крок) {
	// код виконується на кожному колі циклу
//}

// let someString = "Привіт! Як справи?"
// console.log(someString.length)

// console.log(someString[0])
// console.log(someString[1])
// console.log(someString[2])
// console.log(someString[3])
// console.log(someString[4])
// console.log(someString[5])
// console.log(someString[6])
// console.log(someString[7])

// for(let i = 0; i < 7; ++i) {
// 	console.log(someString[i])
// }

// вивести окремо кожен символ рядка someString
// for (let i = 0; i < someString.length; ++i) {
// 	console.log(someString[i])
// }

//----- Масиви ------

// let someArray = [] // - це вже масив, порожній масив
// console.log(typeof someArray) // в консолі можна розвернути [] тип даних object
// console.log(someArray)

// наповнюємо масив данними (через кому)

// let someArray = [10, "Жека", true, "Привіт!"]
// кожне значення-комірка, початок з нульового значення
// 10 - 0
// "Жека" - 1
// true - 2
// "Привіт!" - 3

// ------------------------------------


// someArray.forEach((item, index) => {
// 	console.log(index) // номер комірчинки
// 	console.log(item) // в даному випадку значення
// })

// console.log(someArray) // (4) [10, 'Жека', true, 'Привіт!'] , (4) - довжина масиву
// console.log(someArray.length) // 4
// console.log(someArray[1]) // Жека

// Чи це масив? Array.isArray(тут пишемо змінну)
// використовується в умовних вітвленнях

// let someArray = []
// console.log(Array.isArray(someArray)) // true (працюємо)
// if (Array.isArray(someArray)) {
 	// якщо someArray- це масив
	// працюємо...
// }

//---Перебираємо масив за допомогою for------

// let someArray = [10, "Жека", true, "Привіт!"]

// for (let i = 0; i < someArray.length; ++i) {
// 	console.log(someArray[i]) // отримали значення кожної комірки
// }

// for (let i = 0; i < someArray.length; ++i) {
// 	if (someArray[i] > 5) {
// 		console.log('Це число більше 5') // Це число більше 5
// 	}
// }

// ---Пербираємо масив за допомогою методу перебору масиву forEach---
// масив.forEach(змінна, яка отримає значення елементу масива => {})

// let someArray = [10, "Жека", true, "Привіт!"]

// someArray.forEach((item, index) => {
// 	console.log(index) // номер комірчинки
// 	console.log(item) // в даному випадку значення
// })

//---Додати елемент в масив(до цього нам були відомі всі елементи, хтось заповнив до нас)---
// push додає елемент в кінець масиву

// let usersNames = ["Вася", "Петро", "Ілдика"]
// console.log(usersNames) //(3) ['Вася', 'Петро', 'Ілдика']
// usersNames.push("Жека")
// console.log(usersNames) //(4) ['Вася', 'Петро', 'Ілдика', 'Жека']

//-- includes (чи є елемент в масиві (пошук елемента))
// чутливий до регістру

// let usersNames = ["Вася", "Петро", "Ілдика", 20]
// console.log(usersNames.includes("петро")) // false
// console.log(usersNames.includes(20))  // true

//----------------------------

// якщо в масиві usersNames НЕМА значення 10, то додати

// let usersNames = ["Вася", "Петро", "Ілдика", 20]
// if (!usersNames.includes(10)) { //якщо немає 10 в масиві-тоді push 10
// 	usersNames.push(10)
// }

// console.log(usersNames) // (5) ['Вася', 'Петро', 'Ілдика', 20, 10]

// -- або -----

// let usersNames = ["Вася", "Петро", "Ілдика", 20]

//- !usersNames.includes(10) ? usersNames.push(10) : null

//console.log(usersNames)//(5) ['Вася', 'Петро', 'Ілдика', 20, 10]


// ----- З масива в рядок---

// let usersNames = ["Вася", "Петро", "Ілдика"]

// let usersNamesString = usersNames.join(', ')

// console.log(typeof usersNamesString) //string
// console.log(usersNamesString)  // Вася, Петро, Ілдика

// ------------------------------

// ------ Об'єкти --------------

// const someObject = {} // створення об'єкту

// console.log(someObject)
// console.log(typeof someObject)

// const user = {
// 	age: 40,
// 	name: "Жека"
// }
// console.log(user) //{age: 40, name: 'Жека'}
// console.log(typeof user)   // object
// console.log(user.age) // 40
// console.log(user.name) // Жеека

// const someStyles = {
// 	color: "green",
// 	["font-size"]: 25
// }
// console.log(someStyles) // {color: 'green', font-size: 25}
// console.log(someStyles.color) // green

//--оскільки це об'єкт, всередині можна змінити значення const (дані всередині об'єкта) ----

// const someStyles = {
//       color: "green",
//    	["font-size"]: 25
//  }
// console.log(someStyles["font-size"]) //25
// console.log(someStyles.color) // green

// someStyles["font-size"] = 50
// console.table(someStyles) //
// console.table() - в консолі таблиця

//----------------------------------

// -----Функції--------

// Викор-ся для запуску коду, який повторюється, та для використання методу функціонального програмування
// (кожну дію варто помістити в окрему функцію)

// Об'ява функції
//синтаксис

// function ім'я(параметри) {
	// тіло функції (код функції)
// }

// починаються з show, get, calc, create, check

// Приклади імен: showMessage, getOptions, calcSum

//  Виклик (запуск) функції

// ДО

// showMessage()

// function showMessage() {
// 	console.log('я текст!')
// }

 // ПІСЛЯ

// showMessage()
// showMessage()
// showMessage()
// showMessage()

//-----------------------

// ----Параметри функції----

// function showMessage(someText = "Текст за замовченням") {
// 	console.log(someText)
// }

// showMessage()

// ........
// ..........
// ........

// showMessage("Моє повідомлення")

//  якщо нічого не передаємо, буде використовуватися "Текст за замовченням"
// якщо передаємо - використовується те, що передаємо

//-----------------------------------

// const numOne = 10
// const numTwo = 20

// function calcSum(a = 0, b = 0) {
// 	console.log(a + b)
//  }

// calcSum() // в консолі 0 ( 0 + 0)

// calcSum(numOne) // 10 (передаємо значення тільки а)
// calcSum(numOne, numTwo) // 30 (передаємо значення а, b)
// calcSum(50, 300) // 350 (задаємо своє значення)

//----------------------------------

// --Повернення результату----
// return - повертає результат функції
// замість виводу в консоль, будемо просто повертати результат

// const numOne = 10
// const numTwo = 20

// function calcSum(a = 0, b = 0) {
//    return a + b // ключове слово return  і просто дію(суму)
//    }

	// тепер, коли викликаємо функцію і передаємо або змінні або свої значення, нічого в консолі не буде відображатись, функція поверне суму

// 	calcSum(numOne, 300)

	// але )) маємо функцію showMessage, яка приймає якусь змінну і виводить її в консоль

// function showMessage(someText = "Текст за замовченням") {
// 	console.log(someText)
// }

 // Функції showMessage передаємо в якості параметра функцію calcSum, в якій передаємо свої параметри

// showMessage(calcSum(numOne, 300)) // в консолі 310

// --- Стрілочні функції ------

// -- Звичайна функція ---

// function someName(text) {
// 	console.log(text)
// }

// дорівнює

// ---- Стрілочна функція в один рядок-----

// let someName = (text) => console.log(text) // може бути в один рядок(одразу запис)

 // або

// функція, де більше рядків

//let someName = (text) => {
 // console.log(text)
 // ..............
 // ............
	// якщо багато коду
// }

// =>  це НЕ оператор порівняння, це є стрілочною функцією


//-------ТЕКСТ З ЕФЕКТОМ ДРУКУ-------

// const text = "Hello to everyone!"
// let template = ``

 // init - ініціалізація, побудова

// function initText(text) {
// 	for (let i = 0; i < text.length; i++) {
// 		const item = text[i]
// 		template += `<span style="animation-delay: ${i * 0.1}s">${item}</span>`
// 	}
// }

// 1. Будуємо цикл, де text.length, де будемо "бігати" по кожній літері
// 2. const item буде відповідати за кожну літеру
// 3. template += `` (беремо значення змінної і додаємо нове)
// 4. Додаємо <span></span> і всередину будемо додавати літеру ${item}

//5. Щоб текст виводився з затримкою, прописуємо в <span style="animation-delay: ${i * 0.1}s">${item}</span>
// робимо це саме в js, оскількт тут нам відома кількість літер


// Запускаємо функцію, передавши текст, який написали

// initText(text)

// Вивід у в'юпорт

// const page = document.querySelector('.page')
// page.insertAdjacentHTML("beforeend", template)

// -----------------------------------


















































































