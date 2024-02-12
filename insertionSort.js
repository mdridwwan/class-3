//Insertion Algorithm
// [5,3,6,1,7,9,4];
// => [1,3,4,5,6,7,9,];

const arr = [5, 3, 6, 1, 7, 9, 4];

function insertionSort(array) {
  for (let i = 1; i < array.length; i++) {
    let key = array[i];
    let j = i - 1;
    while (j >= 0 && array[j] > key) {
      array[j + 1] = array[j];
      j = j - 1;
    }
    array[j + 1] = key;
  }
  return array;
}

const result = insertionSort(arr);
console.log(result);
