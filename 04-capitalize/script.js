/*
 * Задача 4: «С большой буквы»
 *
 * Напишите функцию capitalize(str). Функция должна возвращать новую
 * строку каждое слово в которой начинается с прописной буквы.
 *
*/

function capitalize(str) {
    let string = "";
    if ((str == "") || (str == " ")){
      return str;
    }
    if (str.substring(str.length - 1) == " "){
      string = str.substring( 0, str.length - 1);
    } 
    else {
      string = str;
    }
    let wordSplit = string.split(" ");
    for (let i = 0; i < wordSplit.length; i++) {
      wordSplit[i] = wordSplit[i][0].toUpperCase() + wordSplit[i].slice(1,wordSplit[i].length);
    }
    return wordSplit.join(" ");
}

// Протестируйте решение, вызывая функцию с разными аргументами:

console.log(capitalize('молодость всё простит')); // "Молодость Всё Простит"