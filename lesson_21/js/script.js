// cуворий режим
"use strict"

document.addEventListener('click', function (e) {
	const targetElement = e.target;
	if (targetElement.closest('.header__icon')) {
		document.documentElement.classList.toggle('menu-open');
	}
})

let numOne = 20
let numTwo = "20"
let numSumm = numOne + numTwo
console.log(typeof numSumm) // string
console.log(numSumm) // 2020

//-----let--------

//let userAge = 35

//console.log(userAge)

//...код...

//userAge = 36
//console.log(userAge)

//...код...

//let userAge = 35

//let otherUserAge
//console.log(otherUserAge)

//otherUserAge = userAge

//console.log(otherUserAge)
//console.log(userAge)

// let userAge = 35

// function someFunction() { //функція - JS-блок
 	//let userAge = 16
// 	console.log(userAge)

//    if (userAge > 0) {  //умова - JS-блок
// 		console.log(userAge)
// 	}
// }

// someFunction()

// console.log(userAge)


// let userAge = 35  // потрапить в консоль

// function someFunction() { //функція - JS-блок
// 	let userAge = 16 // потрапить в консоль
// 	console.log(userAge)

// 	if (userAge > 0) {  //умова - JS-блок
// 		let userAge = 36 // потрапить в консоль
// 		console.log(userAge)
// 	}
// }

// someFunction()

// console.log(userAge)

// коли є умова

// let user = "admin"
// let userAge //об'явити ДО

// if (user === "admin") {
// 	userAge = 35
// }

//  ...код...

// console.log(userAge)

// ---------const--------------

// const userAge = 35
// console.log(userAge)
// userAge = 36  // помилка!!! не можна змінювати значення

// якщо значення const відомо заздалегідь

// const COLOR_BLACK = '#000'  // задаємо значення таким чином
// console.log(COLOR_BLACK)


//const spanIems = document.querySelectorAll('span') // динамічне значення


//------типи даних-----


//------undefined-----


// невизначенність

// let userAge // створили "сосуд", але в ньому нічого немає
// console.log(userAge) //значення змінної  - undefined
// console.log(typeof userAge)  //тип данних змінної -undefined


// перевірка!!!

// let user = "admin1" // при зміні значення змінної
// let userAge //об'явити ДО

// if (user === "admin") {
// 	userAge = 35
// }

 //...код...

// if (userAge === undefined) {
// 	console.log('Error')
// } else {
// 	console.log(userAge)
// }


//------null-----
//----пустота, порожнеча

// let userAge = null
// console.log(userAge) //значення змінної - null
// console.log(typeof userAge)  //тип данних змінної - object(інтерпр.системою)
//-----object-----
// console.log(userAge) //значення змінної  - undefined
// console.log(typeof userAge)  //тип данних змінної -undefined

// let userAge = 35
// if (1 < 2) {
// 	userAge = 36
// 	else {
// 		userAge = null
// 	}
// }

 // ...код...
// if (userAge) {
 	//...код...
// }

//-----number-----
// число та спец.значення

// let userAge = 35
// console.log(userAge) //значення змінної  - 35
// console.log(typeof userAge)  //тип данних змінної -number

// Infinity - нескінченність
// let number = 1 / 0
// console.log(typeof number) //тип данних змінної -number
// console.log(number) //значення змінної  - Infinity

// NaN -обчислення не може бути виконано
// let number = 10 / "Жека"
//  console.log(typeof number) //тип данних змінної -number
//  console.log(number) //значення змінної  - NaN

//-----string-----
//рядки(текст), все, що в лапках-це рядки!
//String -примусова зміна даних

// let userAge = "35"
// console.log(userAge) //значення змінної  - 35-це НЕ число, це рядок, в якому написано 35
// console.log(typeof userAge)  //тип данних змінної -string

// лапки
// одинарні - '' -ідентичні
// подвійні - "" - ідентичні
//зворотні - `` - багаторядкові,  ${змінна}
// ${} - інтерполяція в JS


// let userAge = 35
// let userName = `Марина`
 //let userInfo = "Ім'я: " + userName + ", вік: " + userAge
// let userInfo = `Ім'я: ${userName}, вік: ${userAge}`
// console.log(userInfo)

// let blockStyle = `
//    width: 100;
//    height: 200;
//    color: green;
// `
//----boolean-----
//true або false
//false повернути: пустий рядок, цифра нуль, undefined, NaN
//Boolean() - примусова зміна даних

//let someVar = " " //- пробіл-повертає true
//let someVar = "" //- пустий рядок-повертає false
//let someVar = "0" //- "цифра нуль"-повертає true
//let someVar = 0 //- цифра нуль-повертає false
// let someVar = 1 //- цифра один-повертає true-в консолі Good)))
// console.log(someVar) //значення змінної  - пустий рядок*приклад 1
// console.log(typeof someVar) //тип данних змінної -string
// console.log(typeof Boolean(someVar))  //тип данних змінної -boolean
// console.log(Boolean(someVar)) //значення змінної  - true

// if (someVar) { //перевірка поверне false при значенні 0 в консолі нічого не відобразиться
	//.....
// 	console.log('Good')
// }

// -----методи роботи з рядками------

// Довжина рядка length

// let someString = `Привіт! Як справи?`
// console.log(someString.length) // в консолі 18

//рядок-це масив символів []
//масив-це комірки з номером, починаючи з 0
//кожна комірка заповнена/незаповнена даними
// let someString = `Привіт! Як справи?`
// console.log(someString[20]) // в консолі 18, в консолі не відобразиться
// console.log(someString[17]) // в консолі відобразиться знак оклику ![17комірка]

//----регістр---
// toUpperCase()
// toLowerCase()
// let someString = `Привіт! Як справи?`
// console.log(someString.toUpperCase()) // в консолі: ПРИВІТ! ЯК СПРАВИ?
// console.log(someString.toLowerCase()) // в консолі: привіт!як справи?


// ------Пошук -----

//let someString = `Привіт! Як справи?`
 // методи

 // includes - пошук в усьому рядку / результат- true/false
 // console.log(someString.includes('Як')) // в консолі: true
 // console.log(someString.includes('як')) // в консолі: false

 // startsWith
// console.log(someString.startsWith('Пр')) // в консолі: true
// console.log(someString.startsWith('По')) // в консолі: false

 // endsWith
// console.log(someString.endsWith('?')) // в консолі: true
// console.log(someString.endsWith('По')) // в консолі: false

// -----отримання частини рядка, метод slice(start,end)-----
// від start(включно) до end

// let someString = `Привіт! Як справи?`
// let someNewString = someString.slice(2, 6) // в консолі: ивіт
// console.log(someNewString)

//-----пошук та заміна replace (що, на що)
// буде опрацьована тільки перша знахідка

// let someString = `Привіт! Як справи?`
// let someNewString = someString.replace('п', 'т') // в консолі: Привіт! Як страви?)))
// console.log(someNewString)

// основні методи чисел
// Math.floor - округлення в меншу сторону
//let someNotRoundNum = 25.9
//console.log(Math.floor(someNotRoundNum))  // в консолі: 25

// Math.ceil - округлення в більшу сторону
//let someNotRoundNum = 25.001
//console.log(Math.ceil(someNotRoundNum))  // в консолі: 26

// Math.round - округлення до ближнього цілого
// let someNotRoundNum = 25.5
// console.log(Math.round(someNotRoundNum)) // в консолі: 26

//----модуль числа----
// Math.abs
// let someNotRoundNum = -25.9
// console.log(Math.abs(someNotRoundNum)) // в консолі: 25.9

// Math.random()
// Рандои числа від 0 до 1
// console.Log(Math.random())

// Math.max(a, b, c...) / Math.min(a, b, c...)
// console.log(Math.max(1, 2, -3))   //2
// console.log(Math.min(1, 2, -3))   //-3

// let numMax = Math.max(1, 2, -3)
// console.log(numMax) //2

// parseInt і parseFloat-переводимо рядок в число і обрізаємо рядок
//let someVar = `35.5px`
//let someVar = `W35.5px` // якщо починається не з числа-NaN
//let someNum = parseInt(someVar)
//console.log(someNum) //35 - ціле число
//let someNum = parseFloat(someVar)
//console.log(someNum) //35.5 - з дробами


// ----ОСНОВНІ ОПЕРАТОРИ-----
// майже всі оператори автоматично змінюють тип даних на number

// let varOne = "20"
// let varTwo = "5"

 // оператор мінус (-)
// let varRes = varOne - varTwo
// console.log(typeof varRes) // number
// console.log(varRes) // 15

// оператор ділення (/)
// let varRes = varOne / varTwo
// console.log(typeof varRes) // number
// console.log(varRes) // 4

 // оператор множення (*)
// let varRes = varOne * varTwo
// console.log(typeof varRes) // number
// console.log(varRes) // 100

// взяття залишку від ділення (%) -сума дробної частини
// визначається число парне / непарне
// не повеертає бул.значення
// let varRes = varOne % varTwo
// console.log(typeof varRes) // number
// console.log(varRes) // 0

// let rez = 10 % 2
// console.log(rez)

// if (!rez) {
// 	console.log('Парне') // if (rez === 0)
// } else {
// 	console.log('Непарне')
// }


// оператор додавання (+) - тільки цей оператор(бінарний) НЕ змінює тип даних
// let varOne = "20"
// let varTwo = "5"
// let varSumm = varOne + varTwo
//  console.log(typeof varSumm) // string
//  console.log(varSumm) // 205  )))))

// varOne varTwo - це операнди
// Бінарний оператор - коли є 2 операнда
// Унарний оператор - коли є 1 операнд

// Унарний оператор додавання викор-ся тільки з одним операндом(учасником обчислення)

// let varOne = +"10"  // + використовується замість parseFloat/parseInt
// let varTwo = +"20"
// let varSumm = varOne + varTwo
// console.log(typeof varSumm) // number
// console.log(varSumm) // 30


// ---Інкремент (збільшує на 1 ++)----
// ---Декремент (зменшує на 1 --)----
// працює лише зі змінними

// let someNumOne = 5
// let someNumTwo = 3

// someNumOne += 1
// console.log(someNumOne) // 6

// ++someNumOne //6 - збільшили на 1 число 5
// --someNumTwo  //2 - зменшили на 1 число 3

// console.log(someNumOne)
// console.log(someNumTwo)

// ------Комбінація операторів-----

// let someVar = 20

// someVar = someVar + 5
// console.log(someVar) // 25

// або

// someVar += 5
// console.log(someVar) // 25

// let someVar = `Жека`
// someVar += " "

// if () {
// someVar += "привіт!"
//  } else {
// 	someVar += "пока!"
//  }
// console.log(someVar)

















































