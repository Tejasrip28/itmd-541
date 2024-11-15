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