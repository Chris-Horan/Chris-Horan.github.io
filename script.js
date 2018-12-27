window.addEventListener("scroll", function() {
    scrollAdjust();
})

function scrollAdjust() {
    var fromTop = window.pageYOffset;
    if(fromTop > window.innerHeight/8) {
        textBox1.className = "hide";
    }
    else textBox1.className = "show";
}