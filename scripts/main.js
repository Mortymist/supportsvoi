const { BackButton, platform } = window.WebApp;
BackButton.visible = true;
console.log(window.WebApp);



const mainButton = document.querySelector('#main-button');
const textElement = document.querySelector('.mma-promo-description > p');

const mainButtonClickCallback = async (e) => {
    textElement.style.color = 'rgba(100, 50, 0, 1)';
    textElement.textContent = platform;
    await WebApp.ScreenCapture.disableScreenCapture();
    await WebApp.requestScreenMaxBrightness();
    window.WebApp.requestContact();
};

mainButton.addEventListener('click', mainButtonClickCallback);