function fibIterative(n) {
  res = [0, 1];
  for (let i = 0; i < n - 2; i++) {
    res.push(res.at(-2) + res.at(-1));
  }
  return res;
}

console.log(fibIterative(8));

function fibsRec(n, list = [0, 1]) {
  if (n === 0) {
    return [0];
  }
  if (n === 1) {
    return [0, 1];
  } else if (list.length === n) {
    return list;
  } else {
    const nextNum = list.at(-1) + list.at(-2);
    list.push(nextNum);

    return fibsRec(n, list);
  }
}

console.log(fibsRec(8));
