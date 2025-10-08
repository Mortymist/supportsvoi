const { BackButton, platform } = window.WebApp;
BackButton.visible = true;
console.log(window.WebApp);



const mainButton = document.querySelector('#main-button');
const textElement = document.querySelector('.mma-promo-description > p');

const featBtnElementA = document.querySelector('#feature-a');
const featBtnElementB = document.querySelector('#feature-b');
const featBtnElementC = document.querySelector('#feature-c');

const mainButtonClickCallback = async (e) => {
    textElement.style.color = 'rgba(100, 50, 0, 1)';
    textElement.textContent = platform;
    // window.WebApp.close();
};

const featBtnACallback = (e) => {
    const dataUnsafe = WebApp.initDataUnsafe;
    const strDataUnsafe = JSON.stringify(dataUnsafe);
    const userInfo = `ID пользователя: ${dataUnsafe.user.id}\nИмя пользователя: ${dataUnsafe.user.first_name}`

    alert(userInfo);

    const blobdtMIME = new Blob([JSON.stringify(WebApp.initDataUnsafe)], {type: "text/plain"});
    const url = URL.createObjectURL(blobdtMIME);
    const lnk = document.createElement('a');
    lnk.setAttribute('download', 'initDataUnsafe');
    lnk.href = url;
    lnk.click();
};

mainButton.addEventListener('click', mainButtonClickCallback);

featBtnElementA.addEventListener('click', featBtnACallback);