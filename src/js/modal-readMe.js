(() => {
  const refs = {
    openModalBtns: document.querySelectorAll('[data-modal-readMe-open]'),
    closeModalBtn: document.querySelector('[data-modal-readMe-close]'),
    modal: document.querySelector('[data-modal-readMe]'),
  };

  for (item of refs.openModalBtns) {
    item.addEventListener('click', toggleModal);
  }
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
    document.body.classList.toggle('is-scroll');
  }
})();
