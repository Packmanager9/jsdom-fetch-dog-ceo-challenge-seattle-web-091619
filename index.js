function setup() {
 //  return  createCanvas(320, 240);
}

function draw() {
    background(51);

    loadPixels();

    for (let y = 0; i < height; x++){
        for (let x = 0; i < width; x++){
            let index = (x+y* width) *4;
            pixels[index+0] = 255
            pixels[index+1] = 255
            pixels[index+2] = 0
            pixels[index+3] = 255
        }
    }

    pixels[365] = 255

   updatePixels();  
}

window.addEventListener('DOMContentLoaded', (event) =>{
    let majig = document.getElementById("dog-image-container");
    let drawrt = document.getElementById("tutorial");
    let thisthing = drawrt.getContext('2d');

console.log(drawrt)
    drawrt.style.background ="#ffffff"
 //   majig.appendChild(())

//my_circle.draw(thisthing)
class Circle {
    constructor(x, y, radius, color) {
        this.x = x
        this.y = y
        this.radius = radius
        this.color = color
    }

    draw(context){

        context.strokeStyle = this.color
        context.beginPath();
        context.arc(this.x, this.y, this.radius, 0, (Math.PI*2), false)
        context.stroke();

        context.lineWidth = 12;

    }


}

var my_circle = new Circle((Math.random()*1000), (Math.random()*1000), 6, "brown")
var my_circle_red = new Circle((Math.random()*1000), (Math.random()*1000), 9, "red")
var my_circle_green = new Circle((Math.random()*1000), (Math.random()*1000), 3, "lightgreen")
let goybox = []

for (let g = 0; g < 33; g++){
let super_circle = new Circle((Math.random()*1000), (Math.random()*1000), 3, "lightgreen")
    goybox.push(super_circle) 
}
console.log(my_circle)

console.log(my_circle)
window.setInterval(function(){
    thisthing.clearRect(0, 0, drawrt.width, drawrt.height);


    for (let me = 0; me < goybox.length; me++){

    
    drawMePlease(goybox[me], thisthing)
    goybox[me].x = goybox[me].x % drawrt.width
    goybox[me].y = goybox[me].y % drawrt.height
}
    drawMePlease(my_circle, thisthing)
    my_circle.x = my_circle.x % drawrt.width
    my_circle.y = my_circle.y % drawrt.height
    drawMePlease(my_circle_red, thisthing)
    my_circle_red.x = my_circle_red.x % drawrt.width
    my_circle_red.y = my_circle_red.y % drawrt.height
    drawMePlease(my_circle_green, thisthing)
    my_circle_green.x = my_circle_green.x % drawrt.width
    my_circle_green.y = my_circle_green.y % drawrt.height


 },1);

console.log(my_circle)

function drawMePlease(circlex, context){
    console.log(circlex, "hello")
    if (Math.floor(Math.random()*10) < 5) {
    circlex.x = circlex.x + Math.floor(Math.random()*(circlex.radius/3))
}
if (Math.floor(Math.random()*10) < 5) {
circlex.x = circlex.x - Math.floor(Math.random()*(circlex.radius/3))
}
if (Math.floor(Math.random()*10) < 5) {
circlex.y = circlex.y + Math.floor(Math.random()*(circlex.radius/3))
}
if (Math.floor(Math.random()*10) < 5) {
circlex.y = circlex.y - Math.floor(Math.random()*(circlex.radius/3))
}
circlex.draw(context)

    return circlex
}
});


