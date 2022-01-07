function calculate(command, a, b) {
    switch (command) {
        case 'add':
            return a + b;
        case 'substract':
            return a - b;
        case 'divide':
            return a / b;
        case 'multiply':
            return a * b;
        case 'remainder':
            return a % b;
        default:
            throw Error('unknown command');
    }
}

console.log(calculate('add',1000,300));
console.log(calculate('substract',10000,300));
console.log(calculate('divide',12,6000));
console.log(calculate('multiply',10,300));
console.log(calculate('remainder',10,300));
console.log(calculate('love',10,300));


