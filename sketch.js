var car1, car2, car3,  wall;
var speed, weight;
var def1, def2, def3;

function setup() {
    createCanvas(1600,400);
    car1 = createSprite(50, 150, 20, 20);
    car2 = createSprite(50, 200, 20, 20);
    car3 = createSprite(50, 250, 20, 20);
    wall = createSprite(1200, 200, 60, height / 2);
    speed = random(55, 90);
    weight = random(400, 1500);
    car1.velocityX = speed;
    car1.weight = weight;
    car2.velocityX = speed;
    car2.weight = weight;
    car3.velocityX = speed;
    car3.weight = weight;
}

function draw() {
    background("black");
    car1.collide(wall);
    car2.collide(wall);
    car3.collide(wall);
    deformation();
    drawSprites();
}

function deformation() {
    def1 = (car1.weight * car1.velocityX * car1.velocityX * 0.5) / 22500;
    if (def1 < 100) {
        car1.shapeColor = "green";
    }
    if (def1 > 100 && def1 < 180) {
        car1.shapeColor = "yellow";
    }
    if (def1 > 180) {
        car1.shapeColor = "red";
    }

    def2 = (car2.weight * car2.velocityX * car2.velocityX * 0.5) / 22500;
    if (def2 < 100) {
        car2.shapeColor = "green";
    }
    if (def2 > 100 && def2 < 180) {
        car2.shapeColor = "yellow";
    }
    if (def2 > 180) {
        car2.shapeColor = "red";
    }

    def3 = (car3.weight * car3.velocityX * car3.velocityX * 0.5) / 22500;
    if (def3 < 100) {
        car3.shapeColor = "green";
    }
    if (def3 > 100 && def3 < 180) {
        car3.shapeColor = "yellow";
    }
    if (def3 > 180) {
        car3.shapeColor = "red";
    }
}