const { BackButton, platform } = window.WebApp;
console.log(window.WebApp);

try {
    console.log(WebAppData);
    console.log(WebAppStartParam);
} catch(e) {}

WebApp.enableClosingConfirmation();


const mainButton = document.querySelector('#main-button');
const textElement = document.querySelector('.mma-promo-description > p');

const featBtnElementA = document.querySelector('#feature-a');
const featBtnElementB = document.querySelector('#feature-b');
const featBtnElementC = document.querySelector('#feature-c');

const mainButtonClickCallback = async (e) => {
    textElement.textContent = 'Ваша платформа: ' + platform;
};

const featBtnACallback = (e) => {
    const dataUnsafe = WebApp.initDataUnsafe;
    const strDataUnsafe = JSON.stringify(dataUnsafe);
    const userInfo = `ID пользователя: ${dataUnsafe.user.id}\nИмя пользователя: ${dataUnsafe.user.first_name}`;

    const data = WebApp.initData;
    const strData = JSON.stringify(data);

    alert(strData);
};

const featBtnBCallback = (e) => {
    if(WebApp.ScreenCapture.isScreenCaptureEnabled) {
        WebApp.ScreenCapture.disableScreenCapture();
        alert(WebApp.ScreenCapture.isScreenCaptureEnabled);
    } else {
        WebApp.ScreenCapture.enableScreenCapture();
        alert(WebApp.ScreenCapture.isScreenCaptureEnabled);
    }
    // alert(WebApp.platform);
};

mainButton.addEventListener('click', mainButtonClickCallback);

featBtnElementA.addEventListener('click', featBtnACallback);
featBtnElementB.addEventListener('click', featBtnBCallback);