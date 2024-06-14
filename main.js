const cardSlider = document.querySelector('.menu-toggle')
window.addEventListener('click', function () {
  document.querySelector('.menu').classList.toggle('show');
});

function showCard(cardId) {
  const cards = document.querySelector('.cards');
  if (cardId === 'webdev') {
    cards.style.transform = 'translateX(0)';
  } else if (cardId === 'design') {
    cards.style.transform = 'translateX(-98vw)';
  }
}

// Scroll to top

const toTop = document.querySelector('.to-top')
window.addEventListener('scroll', () => {
  if (window.scrollY > 0 && window.scrollY < 3800) {
    toTop.classList.add('active');
  }

  else if (window.scrollY > 4000 && window.scrollY < 6200) {
    toTop.classList.add('active');
  }

  else {
    toTop.classList.remove('active');
  }

})