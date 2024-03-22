let plus1 = document.querySelector('.plus-1');
let para1 = document.querySelector('.p1');

let plus2 = document.querySelector('.plus-2');
let para2 = document.querySelector('.p2');

let plus3 = document.querySelector('.plus-3 ');
let para3 = document.querySelector('.p3 ');

let plus4 = document.querySelector('.plus-4 ');
let para4 = document.querySelector('.p4 ');



plus1.addEventListener('click', () => {

    if (plus1 === document.querySelector('.plus-1')) {
        para1.classList.remove('hidden')
        para1.classList.add('block')
        plus1.classList.remove('plus-1')
        plus1.classList.add('minus-1')
        plus1.src = './images/icon-minus.svg'
    } else if (plus1 === document.querySelector('.minus-1')) {

        para1.classList.remove('block')
        para1.classList.add('hidden')
        plus1.classList.remove('minus-1')
        plus1.classList.add('plus-1')
        plus1.src = './images/icon-plus.svg'
    }
})

plus2.addEventListener('click', () => {

    if (plus2 === document.querySelector('.plus-2')) {
        para2.classList.remove('hidden')
        para2.classList.add('block')
        plus2.classList.remove('plus-2')
        plus2.classList.add('minus-2')
        plus2.src = './images/icon-minus.svg'
    } else if (plus2 === document.querySelector('.minus-2')) {

        para2.classList.remove('block')
        para2.classList.add('hidden')
        plus2.classList.remove('minus-2')
        plus2.classList.add('plus-2')
        plus2.src = './images/icon-plus.svg'
    }
})

plus3.addEventListener('click', () => {

    if (plus3 === document.querySelector('.plus-3')) {
        para3.classList.remove('hidden')
        para3.classList.add('block')
        plus3.classList.remove('plus-3')
        plus3.classList.add('minus-3')
        plus3.src = './images/icon-minus.svg'
    } else if (plus3 === document.querySelector('.minus-3')) {

        para3.classList.remove('block')
        para3.classList.add('hidden')
        plus3.classList.remove('minus-3')
        plus3.classList.add('plus-3')
        plus3.src = './images/icon-plus.svg'
    }
})

plus4.addEventListener('click', () => {

    if (plus4 === document.querySelector('.plus-4')) {
        para4.classList.remove('hidden')
        para4.classList.add('block')
        plus4.classList.remove('plus-4')
        plus4.classList.add('minus-4')
        plus4.src = './images/icon-minus.svg'
    } else if (plus4 === document.querySelector('.minus-4')) {

        para4.classList.remove('block')
        para4.classList.add('hidden')
        plus4.classList.remove('minus-4')
        plus4.classList.add('plus-4')
        plus4.src = './images/icon-plus.svg'
    }
})