const scrollBtn = document.querySelector('scrollUp');
window.onscroll = () => {
  if (window.scrollY > 100) {
    scrollBtn.classList.remove('hide');
  } else if (window.scrollY < 100) {
    scrollBtn.classList.add('hide');
  }
};
