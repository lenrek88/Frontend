function showVerticalMessage(message){
    let k = 0;
    for (let symbol of message) {
        if (k === 7) {
            return;
        }
        if (!k) {
            console.log(symbol.toUpperCase())
        } else {
            console.log(symbol)
        }
        k += 1;
    }
}

showVerticalMessage('strada');
