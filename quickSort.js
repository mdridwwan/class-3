// [1,5,6,3,8,4,7,2];

// pivot 2
// [1, 2 ,6,3,8,4,7,5];
// left p-1, rigth p-5;
// [1, 2, 3,4,5,6,7,8]
// left p-4, rigth p-8;
// [1, 2, 3,4, 5 6,7,8]
// left p-3, rigth p-7;
// [1, 2, 3, 4, 5, 6,7, 8]
// left p-6, rigth p-;
// [1, 2, 3, 4, 5, 6, 7, 8]

function quickSort(arr) {
  if (arr.length < 2) {
    return arr;
  }
  let pivot = arr[arr.length - 1];
  let left = [];
  let rigth = [];
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      rigth.push(arr[i]);
    }
  }
  return [...quickSort(left), pivot, ...quickSort(rigth)];
}

const arr = [1, 5, 6, 3, 8, 4, 7, 2, 100, 400, 200, 10000, 2110];
console.log(quickSort(arr));
