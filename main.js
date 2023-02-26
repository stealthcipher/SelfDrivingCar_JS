// import Car from "./car";

const canvas = document.getElementById("myCanvas");
// myCanvas is road property assign to canvas 

// canvas.height = window.innerHeight; // moved to animate function
canvas.width = 200;


const ctx = canvas.getContext("2d"); // to draw on the context 

const car = new Car(100, 100, 30, 50);

// const control = new Controls();

// car.draw(ctx);


// animating the inputs 
function animate(){
    car.update();
    canvas.height = window.innerHeight; // resizzing the canvas
    car.draw(ctx);
    requestAnimationFrame(animate);
}

animate();