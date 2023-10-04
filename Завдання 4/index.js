"use strict";

// перше

// let array = [1, 2, 3];
// let array2 = [4, 5, 6];
// let array3 = [7, 8, 9];
// let array4 = [10, 11, 12];

// let arrayComb = array.concat(array2, array3, array4);
// let arraySrt = arrayComb.sort((a, b) => b - a);
// console.log(arraySrt);

// друге

// let array1 = [1, 2, 3];
// let array2 = [1, 2, 4];
// let array3 = [1, 2, 5];
// let array4 = [1, 2, 6];

// const uniqueArray1 = array1.filter(
//   (element) => !array2.includes(element) && !array3.includes(element) && !array4.includes(element)
// );
// const uniqueArray2 = array2.filter(
//   (element) => !array1.includes(element) && !array3.includes(element) && !array4.includes(element)
// );
// const uniqueArray3 = array3.filter(
//   (element) => !array1.includes(element) && !array2.includes(element) && !array4.includes(element)
// );
// const uniqueArray4 = array4.filter(
//   (element) => !array1.includes(element) && !array2.includes(element) && !array3.includes(element)
// );

// const uniqueElementsArray = [].concat(uniqueArray1, uniqueArray2, uniqueArray3, uniqueArray4);

// console.log(uniqueElementsArray);

// третє

// let array = [1, 4, 3];
// let array2 = [3, 4, 5];
// let array3 = [3, 4, 6];
// let array4 = [3, 4, 8];

// const generalElem = array.filter((element) => {
//   return array2.includes(element) && array3.includes(element) && array4.includes(element);
// });

// console.log(`Спільним для всіх масивів є ${generalElem}`);

// четверте

// let array1 = [2, 3, 4, 5, 6, 7, 8, 9];
// let array2 = [5, 10, 11, 12, 13, 14, 15];
// let array3 = [2, 3, 16, 17, 18, 19, 20];
// let array4 = [1, 2, 3, 4, 21, 22, 23, 24];

// function searchSimpleNumb(array) {
//   return array.filter((number) => {
//     if (number <= 1) return false;
//     for (let i = 2; i <= Math.sqrt(number); i++) {
//       if (number % i === 0) {
//         return false;
//       }
//     }
//     return true;
//   });
// }

// let simpleArray1 = searchSimpleNumb(array1);
// let simpleArray2 = searchSimpleNumb(array2);
// let simpleArray3 = searchSimpleNumb(array3);
// let simpleArray4 = searchSimpleNumb(array4);

// let allSimpleNumber = array1.concat(simpleArray2, simpleArray3, simpleArray4);

// console.log(allSimpleNumber);
