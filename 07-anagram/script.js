/*
 * Задача 7: «Анаграмма»
 *
 * Два слова называют анаграммами, если они состоят из одних и тех же букв.
 * Напишите функцию, проверяющую, являются ли две строки анаграммами друг друга
 * (регистр букв не имеет значения). Для простоты примите, что в этих строках
 * нет пробелов и знаков препинания.
 * 
*/

function anagram(str1, str2) {
    if (str1.length != str2.length ) {
        return false;
    }  
    if (str1.toUpperCase() == str2.toUpperCase() ) {
        return false;
    }
    const array1 = str1.toUpperCase().split(""); 
    const array2 = str2.toUpperCase().split("");  
    for (i = 0; i < array1.length; i++) {
        if (!array2.includes(array1[i])) { 
                console.log("is false");
                return false;
            } 
        }
    return true;
}

// Протестируйте решение, вызывая функцию с разными аргументами:

console.log(anagram('finder', 'Friend')); // true
console.log(anagram('hello', 'bye')); // false