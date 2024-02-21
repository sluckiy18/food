function closeModal(modalSelector) {
    const modal = document.querySelector(modalSelector);
    modal.classList.add('hide');
    modal.classList.remove('show');
    document.body.style.overflow = '';
}

function showModal(modalSelector,modalTimer) {
    const modal = document.querySelector(modalSelector);
    modal.classList.add('show');
    modal.classList.remove('hide');
    document.body.style.overflow = 'hidden';
    if (modalTimer) {
        clearInterval(modalTimer);
    }
   
}

function modal(trigerSelector, modalSelector, modalTimer) {
    const modal = document.querySelector(modalSelector),
        btns = document.querySelectorAll(trigerSelector);


    btns.forEach((item) => {
        item.addEventListener('click', () => {
            showModal(modalSelector,modalTimer);
        });
    })

    modal.addEventListener('click', (e) => {
        if (e.target === modal || e.target.getAttribute('data-close') == '') {
            closeModal(modalSelector);
        }
    })

   

    document.addEventListener('keydown', (e) => {
        if (e.code === 'Escape' && modal.classList.contains('show')) {
            closeModal(modalSelector);
        }
    })

  
    function showModalByScroll() {
        if (window.scrollY + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
            showModal(modalSelector, modalTimer);
            window.removeEventListener('scroll', showModalByScroll)
        }
    }   
    window.addEventListener('scroll', showModalByScroll)
}

export default modal;
export {closeModal};
export {showModal}; 
