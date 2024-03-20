let plus = document.querySelector('.plus');
let minus = document.createElement('img');

console.log(plus)

plus.addEventListener('click', () => {
    if (plus === document.querySelector('.plus')) {
        plus.classList.remove('plus')
        plus.classList.add('minus')
        plus.src = './images/icon-minus.svg'
    } else if (plus === document.querySelector('.minus')) {
        plus.classList.remove('minus')
        plus.classList.add('plus')
        plus.src = './images/icon-plus.svg'
    }
})