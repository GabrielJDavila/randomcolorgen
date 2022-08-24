console.log("hihi");
const colorBtn = document.querySelector('.color-btn');
const bodyColor = document.querySelector('body');
const bnsColors = document.querySelector('.bns-colors');
const bnsColorsContainer = document.querySelector('.bns-colors-container');


colorBtn.addEventListener('click', () => {
  document.body.style.backgroundColor = `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})`;
});

bnsColorsContainer.addEventListener('mouseover', () => {
  bnsColors.style.visibility = 'visible';
  bnsColors.style.backgroundColor = `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})`;
});
