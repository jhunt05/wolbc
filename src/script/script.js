/* Display vision block */

const vision = document.querySelector('.about__vision');
const visionButton = document.querySelector('.about__btn');

visionButton.addEventListener('click', () => {
  vision.classList.toggle('show');
})