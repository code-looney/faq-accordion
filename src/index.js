let plus = document.querySelector('.plus');
let para = document.querySelector('p');
let minus = document.createElement('img');

console.log(plus)

plus.addEventListener('click', () => {
    setTimeout(() => {
            if (plus === document.querySelector('.plus')) {
                console.log('open')
        para.classList.remove('hidden')
        para.classList.add('block')
        plus.classList.remove('plus')
        plus.classList.add('minus')
        plus.src = './images/icon-minus.svg'
    } else if (plus === document.querySelector('.minus')) {
                console.log('close')
        para.classList.remove('block')
        para.classList.add('hidden')
        plus.classList.remove('minus')
        plus.classList.add('plus')
        plus.src = './images/icon-plus.svg'
    }
    }, 500)
})