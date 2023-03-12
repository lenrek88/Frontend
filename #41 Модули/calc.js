export function calc(operation,a,b) {
    switch (operation) {
        case 'add':
            return a+b;
        case 'multi':
            return a*b;
        case 'subtract':
            return a-b;
        case 'division':
            return a/b;
    }
}