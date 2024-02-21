function slider({container,slide,nextArrow, prevArrow, totalCounter, CurrentCounter, wrapper, fild}) {
    const slides = document.querySelectorAll(slide),
        slider= document.querySelector(container),
        prev = document.querySelector(prevArrow),
        next = document.querySelector(nextArrow),
        total = document.querySelector(totalCounter),
        current = document.querySelector(CurrentCounter),
        slidesWrapper = document.querySelector(wrapper),
        slidesFild = document.querySelector(fild),
        width = window.getComputedStyle(slidesWrapper).width;

    let slideIndex = 1;
    let offset = 0;


    slidesFild.style.width = 100 * slides.length + '%';
    slidesFild.style.display = 'flex';
    slidesFild.style.transition - '0.5s all';
    slidesWrapper.style.overflow = 'hidden';

    slides.forEach(item => item.style.width = width);

    slidesIndex(slideIndex)
    
    function slidesIndex(SI) {
        if (slides.length < 10) {
            total.textContent = `0${slides.length}`;
            current.textContent = `0${SI}`
        } else {
            total.textContent = slides.length;
            current.textContent = SI;
        }
    };


    next.addEventListener('click', () => {
        if (offset == +width.replace(/\D/g, '') * (slides.length - 1)) {
            offset = 0
        } else {
            offset += +width.replace(/\D/g, '');
        }
        slidesFild.style.transform = `translateX(-${offset}px)`;

        if (slideIndex == slides.length) {
            slideIndex = 1;
        } else {
            slideIndex++;
        }
        slidesIndex(slideIndex);
    });

    prev.addEventListener('click', () => {
        if (offset == 0) {
            offset = +width.replace(/\D/g, '') * (slides.length - 1)

        } else {
            offset -= +width.replace(/\D/g, '');
        }

        slidesFild.style.transform = `translateX(-${offset}px)`;

        if (slideIndex == 1) {
            slideIndex = slides.length;
        } else {
            slideIndex--;
        }
        slidesIndex(slideIndex);
    })

    // showSlides(slideIndex);  

    // if (slides.length < 10) {
    //     total.textContent = `0${slides.length}`;
    // } else {
    //     total.textContent = slides.length;
    // }

    // function showSlides(n) {
    //     if (n > slides.length)
    //         slideIndex = 1;
    //     if (n < 1)
    //         slideIndex = slides.length;

    //     slides.forEach(item => { item.style.display = 'none' });
    //     slides[slideIndex - 1].style.display = 'block';

    //     if (slides.length < 10) {
    //         current.textContent = `0${slideIndex}`;
    //     } else {
    //         current.textContent = slideIndex;
    //     }


    // }

    // function plussSlider(n) {
    //     showSlides(slideIndex += n);
    // }

    // next.addEventListener('click', () => plussSlider(1));
    // prev.addEventListener('click', () => plussSlider(-1));

}

export default  slider;