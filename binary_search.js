// Theory in Notion

// Алгоритм бинарного поиска

/* 
Бинарный поиск (двоичный поиск, метод половинного деления, дихотомия) - алгоритм, для сортированного массива, 
который каждую итерацию при поиске элемента делит массив пополам и исключаем половину осташихся чисел, которые не попадают под заданный критерий
*/

const arr = []; // создаем пустой массив;

function addEl() {
  for (let i = 1; i <= 100; i++) {
    // через цикл наполнили массив данными
    arr.push(i);
  }
}
addEl();
console.log(arr);

// Алгоритм бинарного поиска
function binarySearch(array, el) {
  let low = 0;
  let high = array.length - 1;
  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if (arr[mid] === el) {
      return mid;
    } else if (arr[mid] < el) {
      low = mid + 1; // сдвигаем диапазон поиска ВПРАВО
    } else {
      high = mid - 1; // сдвигаем диапазаон поиска ВЛЕВО
    }
  }
  return -1; // если в цикле не находим, выходим и возвращаем -1
}

console.log(binarySearch(arr, 15));
