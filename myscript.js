function attachCollapseTriggers() {
    var colTrigs = document.getElementsByClassName("collapse-trigger");
    for (var colTrig of colTrigs) {
        colTrig.addEventListener("click", function() {
            this.classList.toggle("active");
        });
    }
    
    /* var menuTrigs = document.getElementByClassname("menubars");
    for (var menuTrig of menuTrigs) {
        menuTrig.addEventListener("click", function() {
            this.classList.toggle("active");
        });
    }
    
    document.getElementById("menubars").onclick = function() {
      document.getElementById("menubars").classList.toggle("active");
    }; */
}

attachCollapseTriggers();