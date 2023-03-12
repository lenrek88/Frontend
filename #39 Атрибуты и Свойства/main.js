let changeBg = document.getElementById('change-bg');
let changeBgEvery = document.querySelector('#change-bg-every');

function changeBgHandler(event) {
    event.preventDefault();
    document.body.style.backgroundColor = changeBg.getAttribute('data-color');
}

function changeBgEveryHandler(event) {
    event.preventDefault();
    const colors = ['red', 'blue', 'green', 'orange'];
    setInterval(() =>  { document.body.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)] }, 2000);
}

changeBg.addEventListener('click', changeBgHandler);
changeBgEvery.addEventListener('click', changeBgEveryHandler)