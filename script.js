window.addEventListener("load", function() {
    scrollAdjust();
})

window.addEventListener("scroll", function() {
    scrollAdjust();
})

function scrollAdjust() {
    var fromTop = window.pageYOffset;
    var height = window.innerHeight;
    if(fromTop > height*0.15) {
        textBox1.className = "hide disappear";
    } else textBox1.className = "show";
    if(fromTop > height*0.3 && fromTop < height*0.3+900) {
        text2.className = "show";
    } else text2.className = "hide";
    if(fromTop > height*0.3+700 && fromTop < height*0.3+1800) {
        text3.className = "show";
    } else text3.className = "hide";
    if(fromTop > height*0.3+1700 && fromTop < height*0.3+2500) {
        text4.className = "show";
    } else text4.className = "hide";
}