/*
 * Задача 8: «Фибоначчи»
 *
 * Последовательность Фибоначчи — это порядок чисел, где каждое последующее
 * число является суммой двух предыдущих: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34.
 * 
 * Напишите функцию, которая принимает на вход число n и возвращает n-й элемент
 * последовательности Фибоначчи.
*/

function fibonacci(n) {
    let number = 0;
    let numberOld = 0;
    let result = 0;
    if (n == 0){
        return number;
    }
    for (i=0; i < n; i++){
        if (i == 0){
          numberOld = number;
          number = 0;
          result=number+numberOld;
        }
        if (i == 1){
            numberOld=number;
            number=number+1;
            result=number+numberOld;
        }
        if (i > 1){
            result=number+numberOld;
            numberOld=number;
            number=result;
        }
    }
    console.log(result);
    return result;
}

// Протестируйте решение, вызывая функцию с разными аргументами:

console.log(fibonacci(4)); // 2. Четвёртое число последовательности — двойка (0, 1, 1, 2)