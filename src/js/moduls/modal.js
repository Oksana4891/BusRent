
function bindModal(triggerSelector, modalSelector, closeSelector,animationOpen, animationClose, closeClickOverlay = true) {
    const triggers = document.querySelectorAll(triggerSelector),
        modal = document.querySelector(modalSelector),
        close = document.querySelector(closeSelector),
        modals = document.querySelectorAll('.popup');
       

    triggers.forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            hideAllModals();
            handelOpenModal();
        });
    });


    // Function close modal
    close.addEventListener('click', (e) => {
        modal.classList.add(animationClose);
        handelCloseModal(modal, animationOpen);
    });

    modal.addEventListener('click', (e) => {
        if (e.target === e.currentTarget && closeClickOverlay) {
            modal.classList.add(animationClose);
            handelCloseModal(modal, animationOpen);
        }
    });
     
    function handelCloseModal(modal, animationOpen) {
        document.body.style.overflow = "";
        modal.classList.remove('is-open');
        modal.classList.remove(animationOpen);
    } 

     // Function hide all modal

    function hideAllModals() {
        modals.forEach(item => {
            handelCloseModal(item);
        });
    }


     // Function open modal

    function handelOpenModal() {
        document.body.style.overflow = "hidden";
        modal.classList.add('is-open'); 
        modal.classList.add(animationOpen);
        modal.classList.remove(animationClose);
       
    }

}
