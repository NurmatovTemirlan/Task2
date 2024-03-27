// !Задание Nº1
// Дан массив ["dlrow", "olleH"]. Измените его таким образом, чтобы в итоге получилось ["Hello", "world"]. Используйте методы массива.
let word = ["dlrow", "olleH"];
word.reverse();
word[0] = "Hello";
word[1] = "world";
console.log(word);

// !Задание Nº2
// Дан массив ['а', 'б', 'в']. Добавьте ему в конец элементы 4,3,5,5.
let arr = ["а", "б", "в"];
arr.push("4, 3, 5, 5");
console.log(arr);

// !Задание Nº3
// Дан массив ["Apple", "Orange", "Pinapple","Cherry"]. Удалите сначала первый элемент"Apple" и этот же элемент подставтье после"Pineapple" .
let arr2 = ["Apple", "Orange", "Pinapple", "Cherry"];
arr2.shift(1);
arr2.splice(2, 0, "Apple");
console.log(arr2);

// !Задание Nº4
// Дан массив 18, -7, -21, 44, 31. Вывести в консоль наиболшее число из массива.
// Подсказка: нужно использовать метод sort().
let arr3 = [18, -7, -21, 44, 31];
arr3.sort((a, b) => b - a);
console.log(arr3[0]);
