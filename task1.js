sumArrayPromise([1, 2, 3, 4, 5]).then(console.log)

function sumArrayPromise(arr) {
    return new Promise(resolve => setTimeout(() => resolve(sumArray(arr)), 3000));
}

function sumArray(arr) {
    let sum = 0;
    for (const num of arr) sum += num;
    return sum;
  }