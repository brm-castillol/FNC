function myFunction() {
    var x = document.getElementById("navegacion");
    if (x.className === "menu-fundacion") {
        x.className += "responsive";
    } else {
        x.className = "menu-fundacion";
    }
}