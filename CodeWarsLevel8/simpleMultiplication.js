function simpleMultiplication(n) {
    if (n%2) return n * 9;
    return n * 8;
}

function simpleMultiplication(n) {
    return n * (n % 2 ? 9 : 8);
}

function simpleMultiplication(n){
    return n % 2 == 0 ? n * 8 : n * 9
}

simpleMultiplication = n => n * (8 + n % 2)

function simpleMultiplication(value){

    if(value%2===0 ){
        return value *8
    }
    else{
        return value* 9;
    }
}

const simpleMultiplication=n=>n*(n%2?9:8);

function simpleMultiplication(number) {
    if (typeof number === 'number') {
        return number * (8 + number % 2);
    } else {
        console.log(arguments.callee.name + ': Invalid argument');
    }
}

