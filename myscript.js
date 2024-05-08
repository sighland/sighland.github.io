function attachCollapseTriggers() {
    var colTrigs = document.getElementsByClassName("collapse-trigger");
    for (var colTrig of colTrigs) {
        colTrig.addEventListener("click", function() {
            this.classList.toggle("active");
        });
    }
}

attachCollapseTriggers();