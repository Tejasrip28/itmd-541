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