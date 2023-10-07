import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';

const slider = document.querySelector('.swiper');

if (slider) {
    let prev = slider.closest('section').querySelector('.prev')
    let next = slider.closest('section').querySelector('.next')

    new Swiper(slider, {
        modules: [
            Navigation,
        ],
        loop: true,
        slidesPerView: 2,
        spaceBetween: 29,
        navigation: {
            prevEl: prev,
            nextEl: next,
        },
    })
}