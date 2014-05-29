/**
 * Created by IPopov on 29.05.14.
 */
var arr = [1, 2, 'str', {}];

console.log( arr[2] );

arr[6] = 'six';

arr.length;

//Удаление

delete arr[1]; // не рекомендуется будут дырки
arr.splice(1,1); //так более правильно

var matrix = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
]
var newArr = arr.concat(matrix); // Склеивание массива

arr.join(', '); // создание строки по сепаратору

arr.push('new2'); // вставить новый массиа

arr.pop(); //удаляет последний элемент

arr.unshift('uo_new'); // добавить новый элемент в начало
arr.shift(); // удалить первый элемент

var revers = arr.reverse(); // новый массив в обратном порядке
var slice = arr.slice(1, 2); // вырезает массив с какого по какой.

arr.sort(); // сортировка не правильная

