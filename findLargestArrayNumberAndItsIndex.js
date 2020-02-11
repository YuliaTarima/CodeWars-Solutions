// найти максимальный элемент в массиве и его индекс.

let arr = [12, 4, 6, 15, 45, 2, 17, -4, 31, 8];
let max = arr[0];
let index = 0;
for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
        max = arr[i];
        index = i;
    }
}
console.log('Max element = ' + max);   //выведет "Max element = 45"
console.log('Index = ' + index); //выведет "Index = 4"