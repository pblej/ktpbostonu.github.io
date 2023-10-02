function myFunction() {
    var x = document.getElementById("myTopnav");
    var icon = document.querySelector(".icon");
    if (x.className === "topnav") {
        x.className += " responsive";
        icon.classList.add("change");
    } else {
        x.className = "topnav";
        icon.classList.remove("change");
    }
}