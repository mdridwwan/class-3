// Divide

function margeSort(arr) {
  let len = arr.length;
  if (len < 2) {
    return arr;
  }

  const mid = Math.floor(len / 2);
  const leftArr = arr.slice(0, mid);
  const rightArr = arr.slice(mid);
  return marge(margeSort(leftArr), margeSort(rightArr));
}
//Marge
function marge(leftArr, rightArr) {
  const sortedArr = [];
  while (leftArr.length && rightArr.length) {
    if (leftArr[0] <= rightArr[0]) {
      sortedArr.push(leftArr.shift());
    } else {
      sortedArr.push(rightArr.shift());
    }
  }
  return [...sortedArr, ...leftArr, ...rightArr];
}

console.log("hwwlo");

const arr = [10, 20, -20, -5, 2, 5, 1, 100, -200, 30];

console.log(margeSort(arr));
