//Insertion Algorithm
// [5,3,6,1,7,9,4];
// => [1,3,4,5,6,7,9,];

const arr = [5, 3, 6, 1, 7, 9, 4];

function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let key = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j];
      j = j - 1;
    }
    arr[j + 1] = key;
  }
  return arr;
}

const result = insertionSort(arr);
console.log(result);
