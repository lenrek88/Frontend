function delay(ms) {
    return new Promise(function(resolve, reject){
        setTimeout(resolve(ms), ms)
    })
}

delay(3000).then(() => console.log('Выполнилось через 3 секунды!'))