const { BackButton, requestContact } = window.WebApp;

const mainButton = document.querySelector('#main-button');

const mainButtonClickCallback = (e) => {
    requestContact();
};