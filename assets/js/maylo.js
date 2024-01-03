    document.addEventListener("DOMContentLoaded", function () {
        // Select the button by its id
        var visitRandomSiteBtn = document.getElementById("visitRandomSiteBtn");

        // Add a click event listener
        visitRandomSiteBtn.addEventListener("click", function () {
            // Redirect to a random site (replace the example URLs with actual URLs)
            var randomSites = ["https://exe.io/JiRe",
                               "https://exe.io/qUGr2",
                               "https://exe.io/lZleHE",
                               "https://exe.io/qAX8tCLN",
                               "https://exe.io/DNHCqjf",
                               "https://exe.io/nDSqWZ",
                               "https://exe.io/dcnL",
                               "https://exe.io/208A1vfy",
                               "https://exe.io/PuNgJU3",
                               "https://exe.io/eZImT",
                               "https://exe.io/04W3z",
                               "https://exe.io/Kbnoht",
                               "https://exe.io/C2gL6",
                               "https://exe.io/bcfdi9",
                               "https://exe.io/TNq7c",
                               "https://exe.io/lKET2gWr",
                               "https://exe.io/XI1tm",
                               "https://exe.io/6NETaUd",
                               "https://exe.io/XDfkHeX",
                               "https://exe.io/y3REX9k",
                               "https://exe.io/FXtKVCd",
                               "https://exe.io/RpBr41jO",
                               "https://exe.io/BihYW",
                               "https://exe.io/XhYhqge7",
                               "https://exe.io/DRBl49"];
            var randomIndex = Math.floor(Math.random() * randomSites.length);
            window.location.href = randomSites[randomIndex];
        });
    });

