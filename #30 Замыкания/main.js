function createCounter() {
    let count = 0;
    return function() {
        return count = count + 1;
}
}

let counterA = createCounter();
let counterB = createCounter();

console.log(counterA());
console.log(counterA());
console.log(counterA());

console.log(counterB());