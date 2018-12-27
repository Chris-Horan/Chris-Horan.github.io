window.addEventListener("load", function() {
    scrollAdjust();
})

window.addEventListener("scroll", function() {
    scrollAdjust();
})

function scrollAdjust() {
    var fromTop = window.pageYOffset;
    var height = window.innerHeight;
    if(fromTop > height*0.125) {
        textBox1.className = "hide";
    } else textBox1.className = "show";
    if(fromTop > height*0.3 && fromTop < height*0.3+900) {
        text2.className = "show";
    } else text2.className = "hide";
    if(fromTop > height*0.3+700 && fromTop < height*0.3+1500) {
        text3.className = "show";
    } else text3.className = "hide";
    if(fromTop > height*0.3+1700 && fromTop < height*0.3+2000) {
        text4.className = "show";
    } else text4.className = "hide";
}