function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  const mid = Math.trunc(arr.length / 2);
  const left = arr.slice(0, mid);
  const right = arr.slice(mid);

  const leftArr = mergeSort(left);
  const rightArr = mergeSort(right);
  return merge(leftArr, rightArr);
}

function merge(leftArr, rightArr) {
  let left = 0;
  let right = 0;

  let mergedArr = [];

  while (left < leftArr.length && right < rightArr.length) {
    if (leftArr[left] <= rightArr[right]) {
      mergedArr.push(leftArr[left]);

      left += 1;
    } else {
      mergedArr.push(rightArr[right]);
      right += 1;
    }
  }

  while (left < leftArr.length) {
    mergedArr.push(leftArr[left]);
    left += 1;
  }
  while (right < rightArr.length) {
    mergedArr.push(rightArr[right]);
    right += 1;
  }
  return mergedArr;
}

console.log(mergeSort([1, 3, 5, 3, 10, 2]));
console.log(mergeSort([]));
console.log(mergeSort([73]));
console.log(mergeSort([1, 2, 3, 4, 5]));
console.log(mergeSort([3, 2, 1, 13, 8, 5, 0, 1]));
console.log(mergeSort([105, 79, 100, 110]));
