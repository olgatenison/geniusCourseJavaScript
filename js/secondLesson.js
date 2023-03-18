// Якщо змінна більше нуля - виведіть true, менше - false
//Перевірте це на варіантах  1, 0, -3.

// let value = 1;
// console.log(value > 0 ? true : false);

// Якщо змінна ="test" - виведіть true,
//Перевірте це на варіантах  'test', "qwerty", true

// const enterTest = prompt("Please enter test:");
// console.log(enterTest === "test" ? true : false);

// Якщо змінна більше 10 -  відніміть 5,
//менше - додайте 5, результат виведіть в консоль
//Перевірте це на варіантах  1, 10, 13.

// let num;
// num = 1;
// if (num > 10) {
//   console.log(num - 5);
// } else if (num < 10) {
//   console.log(num + 5);
// } else {
//   console.log("це 10");
// }

//Зробіть сервіс який отримує число від 1 до 12
// виведіть місяць який дорівнює числу

// const enterMonth = prompt("Please enter number 1-12:");

// switch (Number(enterMonth)) {
//   case 1:
//     alert("Січень");
//     break;
//   case 2:
//     alert("Лютий");
//     break;
//   case 3:
//     alert("Березань");
//     break;
//   case 4:
//     alert("Квітень");
//     break;
//   case 5:
//     alert("Травень");
//     break;
//   case 6:
//     alert("Червень");
//     break;
//   case 7:
//     alert("Липень");
//     break;
//   case 8:
//     alert("Серпень");
//     break;
//   case 9:
//     alert("Вересень");
//     break;
//   case 10:
//     alert("Жовтень");
//     break;
//   case 11:
//     alert("Листопад");
//     break;
//   case 12:
//     alert("Грудень");
//     break;
//   default:
//     alert("значення невірне");
// }

//Зробіть сервіс який отримує тризначне число
//Поверніть користувачу сумму цих чисел

const abc = prompt("введіть тризначне число:");
console.log(`ви ввели ${abc}`);
let a = Number(abc[0]);
let b = Number(abc[1]);
let c = Number(abc[2]);

let result = a + b + c;
console.log(result);
