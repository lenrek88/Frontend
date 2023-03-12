// const numbers = [-25, -13, 0, 10, 11, 29, 113, 293];
//
// numbers.forEach(number => {
//    console.log(number);
// });
//
// ИЛИ
//
// const numbers = [-25, -13, 0, 10, 11, 29, 113, 293];
//
// numbers.forEach(console.log);

// Задача
// дан массив строк ['cat', 'dog', 'elephant', 'tiger', 'lion'].
//     найдите первое слово длиной больше 7 символов и выведите его в консоль
//

// const animals = ['cat', 'dog', 'elephant', 'tiger', 'lion'];
//
// const animal = animals.find(animal => animal.length > 7);
// console.log(animal);

// Задача
// Дан массив чисел [1, 11, -2, 3, -10, 4].
//     Создайте новый массив только из отрицательных чисел
// Выведите его в консоль
//

// const numbers = [1, 11, -2, 3, -10, 4];
//
// const negativeNumbers = numbers.filter(number => number < 0);
//
// console.log(negativeNumbers);

// Дан массив чисел [1, 11, -2, 3, -10, 4].
//     Создайте новый массив из абсолютных значений элементов и выведите его в консоль.
//


// const numbers = [1, 11, -2, 3, -10, 4];
//
// const absNumbers = numbers.map(number => Math.abs(number));
//
// console.log( absNumbers );

// Задача
// Дан массив чисел [1, 11, -2, 3, -10, 4].
//     Отсортируйте массив по убыванию и выведите его в консоль.

const numbers = [1, 11, -2, 3, -10, 4];

const sortNumbers = numbers.sort((a,b) => b-a);

console.log(sortNumbers);


