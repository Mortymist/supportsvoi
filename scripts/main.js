const { BackButton } = window.WebApp;
BackButton.visible = true;
console.log(BackButton);

const mainButton = document.querySelector('#main-button');
const textElement = document.querySelector('.mma-promo-description > p');

const mainButtonClickCallback = (e) => {
    textElement.style.color = 'rgba(100, 50, 0, 1)';
};

mainButton.addEventListener('click', mainButtonClickCallback);