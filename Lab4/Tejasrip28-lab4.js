(function() {
    if (window.location.href === "https://illinoistech-itm.github.io/ITMD4541-F24/lab4/") {
        console.log("Running script on the specified page.");

        // Change the main headline
        document.querySelector('.hero-headline-selector').textContent = "Supercharge Your Brand with Stellar Marketing";

        // Additional code here...

    } else {
        console.log("This script only runs on the specified website.");
    }
})();
