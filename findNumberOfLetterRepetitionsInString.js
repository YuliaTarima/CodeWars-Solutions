// находящую количество букв 'g' в строке.

let str = 'I am studying programming';
let count = 0;
for (let i = 1; i < str.length; i++) {
    if (str[i] === 'g') {
        count++;
    }
}
console.log('count of letters `g` equal to ' + count);