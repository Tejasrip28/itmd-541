//IIFE (Immediately Invoked Function Expression)

/*1. In the hero section change the main headline to the following text (do not
include the wrapping quotes):
“Supercharge Your Brand with Stellar Marketing”*/

(function() {
    document.querySelector('#hero h1').textContent = "Supercharge Your Brand with Stellar Marketing";
    })();


/*2. Change the line of text below the hero headline to the following text (do not
include the wrapping quotes, notice the bold and italic):
“Leverage innovative strategies from Stellar Marketing to make your business
shine and succeed.”*/

const subHeadline = document.querySelector('#hero p');
if (subHeadline) {
subHeadline.innerHTML = "Leverage innovative strategies from Stellar Marketing to make your business <strong><em>shine</em></strong> and <strong><em>succeed</em></strong>.";
}


/*3. Change the image in the background of the hero to the one below:
https://picsum.photos/id/683/1280/720//*/

const heroSection = document.querySelector('#hero');
if (heroSection) {
    heroSection.style.backgroundImage = "url('https://picsum.photos/id/683/1280/720')";
}


/*4. Change the background color of the nav bar to the same color that is used in
the footer*/

const navBar = document.querySelector('header');
const pageFooter = document.querySelector('footer');
if (navBar && pageFooter) {
navBar.style.backgroundColor = window.getComputedStyle(pageFooter).backgroundColor;
}


//5. Remove the get started Call-to-action (CTA) from the hero.

const heroCTA = document.querySelector('#hero a');
if (heroCTA) {
heroCTA.remove();
}


//6. In the services section change the icons color to a light blue (#6495ed)

const serviceIcons = document.querySelectorAll('#services .material-symbols-outlined');
serviceIcons.forEach(serviceIcon => {
    serviceIcon.style.color = "#6495ed";
});


/*7. The icons use the “Material Symbols Outlined” library. Change the digital
marketing icon to use ‘Ads Click’ instead of the current icon.
https://fonts.google.com/icons?selected=Material+Symbols+Outlined:ads_click:FIL
L@0;wght@400;GRAD@0;opsz@24&icon.size=24&icon.color=%23e8eaed*/

const adsClickIcon = document.querySelector('#services .material-symbols-outlined[data-icon="digital"]');
if (adsClickIcon) {
adsClickIcon.textContent = "ads_click";
}


