function displayMenu() {
    var x = document.getElementById("myTopnav");
    if (x.className === "navbar-container") {
        x.className += " show-menu";
    } else {
        x.className = "navbar-container";
    }
}