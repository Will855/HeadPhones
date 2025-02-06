const menu = document.querySelector('.sidebar');
const btnMenu = document.querySelector('.header__menu-btn');
const colorList = document.querySelector('.color-picker');
const imgProduct = document.getElementById('img-product'); // Mantener ID para funcionalidad
const rrss = document.querySelectorAll('.social-links__list li');

btnMenu.addEventListener('click', () => {
    if (menu.classList.contains('sidebar--active')) {
        menu.classList.remove('sidebar--active');
        console.log('Menú cerrado');
    } else {
        menu.classList.add('sidebar--active');
        console.log('Menú abierto');
    }
});

colorList.addEventListener('click', (e) => {
    if (e.target.classList.contains('color-picker__btn')) {
        const newImage = e.target.getAttribute('data-img');
        const newColor = e.target.getAttribute('data-color');
        imgProduct.src = newImage;
        document.documentElement.style.setProperty('--primary-color', newColor);

        gsap.from('section img', {
            opacity: 0,
            duration: 1,
            delay: 0.1,
            x: -100
        });
    }
});

// Animaciones GSAP actualizadas con nuevas clases
gsap.from('.header__menu-btn', { opacity: 0, duration: 1, delay: 0.1, y: -10 });
gsap.from('.header__logo', { opacity: 0, duration: 1, delay: 0.3, y: -10 });
gsap.from('.header__btn-group', { opacity: 0, duration: 1, delay: 0.6, y: -10 });
gsap.from('.main-content__product-img', { opacity: 0, duration: 1, delay: 1, x: -100 });
gsap.from('.product-info__title', { opacity: 0, duration: 1, delay: 1.2, x: 100 });
gsap.from('.product-info__description', { opacity: 0, duration: 1, delay: 2, x: 100 });
gsap.fromTo('.product-info__buy-btn', { opacity: 0, y: -10 }, { opacity: 1, y: 0, duration: 1, delay: 2.2 });
gsap.from('.color-picker', { opacity: 0, duration: 1, delay: 2.6, x: -10 });
gsap.from([...rrss], { opacity: 0, duration: 1, delay: 2.6, x: -10 });