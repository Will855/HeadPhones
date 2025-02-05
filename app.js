const menu = document.querySelector('.menu');
const btnMenu = document.querySelector('.btn-menu')
const btnClose = document.querySelector('.btn-close')
const rrss = document.querySelectorAll('.rrss ul li');
const colorList = document.querySelector('.color-list');
const imgProduct = document.getElementById('img-product');

btnMenu.addEventListener('click', () => {

    if (menu.classList.contains('active')) {
        menu.classList.remove('active')
        console.log('El elemento NO tiene la clase "activo".');
    } else {
        menu.classList.add('active');
        console.log('El elemento tiene la clase "activo".');
    }
})

colorList.addEventListener('click', (e) => {
    if(e.target.classList.contains('btn-color'))
    {
        const newImage = e.target.getAttribute('data-img');
        const newColor = e.target.getAttribute('data-color');
        imgProduct.src = newImage;
        document.documentElement.style.setProperty('--primary-color', newColor)

        gsap.from('section img',{
            opacity: 0,
            duration: 1,
            delay: 0.1,
            x: -100
        })
    }    
})
gsap.from('.btn-menu', {
    //meter ease
    opacity: 0,
    duration: 1,
    delay: 0.1,
    y: -10
});

gsap.from('.logo', {
    //meter ease
    opacity: 0,
    duration: 1,
    delay: 0.3,
    y: -10
});

gsap.from('.btn-group', {
    //meter ease
    opacity: 0,
    duration: 1,
    delay: 0.6,
    y: -10
});

gsap.from('section img', {
    //meter ease
    opacity: 0,
    duration: 1,
    delay: 1,
    x: -100
});

gsap.from('section .content h1', {
    //meter ease
    opacity: 0,
    duration: 1,
    delay: 1.2,
    x: 100
});

gsap.from('section .content p', {
    //meter ease
    opacity: 0,
    duration: 1,
    delay: 2,
    x: 100
});

gsap.fromTo('section .content .btn-primary',{
    //meter ease
    opacity: 0,
    duration: 1,
    delay: 2.2,
    y: -10
},
{
    opacity: 1,
    duration: 1,
    delay: 2.2,
    y: 0
});

gsap.from('section .content .color-list',{
    opacity: 0,
    duration: 1,
    delay: 2.6,
    x: -10
});

gsap.from([...rrss],{
    opacity: 0,
    duration: 1,
    delay: 2.6,
    x: -10
});

