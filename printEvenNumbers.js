for (let i = 1; i < 10; i++) {
    if (i % 2 === 0) console.log(i);
}

// заполняет массив четными числами от 2 до 20.

let arr = [];
for (let i = 2; i <= 20; i++){
    if (i % 2 === 0) arr.push(i);
}
console.log(arr);  //выведет [2, 4, 6, 8, 10, 12, 14, 16, 18, 20]

