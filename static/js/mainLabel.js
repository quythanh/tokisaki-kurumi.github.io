mainLabel1 = document.getElementById("general-label");
mainLabel2 = document.getElementById("google-label");
mainLabel3 = document.getElementById("skill-label");

mainPage1 = document.getElementById("general-page");
mainPage2 = document.getElementById("google-page");
mainPage3 = document.getElementById("skill-page");

mainLabel1.addEventListener('click', function() {
    if (mainLabel1.className != "col-4 mainLabel active") {

        mainLabel2.className = "col-4 mainLabel";
        mainPage2.className = "row hidden justify-content-center";

        mainLabel3.className = "col-4 mainLabel";
        mainPage3.className = "row hidden";

        mainLabel1.className = "col-4 mainLabel active";
        mainPage1.className = "row";
    }
}, false);
mainLabel2.addEventListener('click', function() {
    if (mainLabel2.className != "col-4 mainLabel active") {
        mainLabel1.className = "col-4 mainLabel";
        mainPage1.className = "row hidden";

        mainLabel3.className = "col-4 mainLabel";
        mainPage3.className = "row hidden";

        document.getElementById("google-content").className = "col-7 hidden";

        mainLabel2.className = "col-4 mainLabel active";
        mainPage2.className = "row justify-content-center";
    }
}, false);
mainLabel3.addEventListener('click', function() {
    if (mainLabel3.className != "col-4 mainLabel active") {
        mainLabel1.className = "col-4 mainLabel";
        mainPage1.className = "row hidden";

        mainLabel2.className = "col-4 mainLabel";
        mainPage2.className = "row hidden justify-content-center";

        mainLabel3.className = "col-4 mainLabel active";
        mainPage3.className = "row";
    }
}, false);