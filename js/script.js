import tabs from './modules/tabs';
import cards from './modules/cards';
import culc from './modules/culc';
import form from './modules/form';
import slider from './modules/slider';
import timer from './modules/timer';
import modal from './modules/modal';
import {showModal} from './modules/modal';



window.addEventListener('DOMContentLoaded',() => {

    const modalTimer = setTimeout(() => {
        showModal('.modal',modalTimer)
    }, 50000);
    
tabs('.tabheader__item','.tabcontent','.tabheader__items','tabheader__item_active');
cards();
culc();
form('form', modalTimer);

timer('.timer','2024-02-24');    
modal('[data-modal]','.modal',modalTimer);
slider({
    container:'offer__slider',
    slide:'.offer__slide',
    nextArrow:'.offer__slider-next',
    prevArrow:'.offer__slider-prev',
    totalCounter:'#total',
    CurrentCounter:'#current',
    wrapper:'.offer__slider-wrapper',
    fild:'.offer__slider-inner',
    
});






});