    document.addEventListener("DOMContentLoaded", function () {
        // Select the button by its id
        var visitRandomSiteBtn = document.getElementById("visitRandomSiteBtn");

        // Add a click event listener
        visitRandomSiteBtn.addEventListener("click", function () {
            // Redirect to a random site (replace the example URLs with actual URLs)
            var randomSites = ["https://exe.io/sSAfYJ4A",
                               "https://exe.io/oEWtx77B",
                              "https://exe.io/prRW63"];
            var randomIndex = Math.floor(Math.random() * randomSites.length);
            window.location.href = randomSites[randomIndex];
        });
    });
