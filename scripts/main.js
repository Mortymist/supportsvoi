const { BackButton, requestContact, close } = window.WebApp;

const mainButton = document.querySelector('#main-button');

const mainButtonClickCallback = (e) => {
    close();
};

mainButton.addEventListener('click', mainButtonClickCallback);