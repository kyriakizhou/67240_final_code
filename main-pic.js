var pic = document.getElementById("main-pic");
var opacities = [0.1, 0.15, 0.2, 0.25, 0.3, 0.35, 0.4, 0.45, 0.5, 0.55, 0.6, 0.65, 0.7, 0.8, 0.9, 1];
var counter = 0;
var inst = setInterval(appear, 40);

function appear(){
    if (counter < 16){
        pic.style.opacity = opacities[counter]
    }
    counter += 1;
}