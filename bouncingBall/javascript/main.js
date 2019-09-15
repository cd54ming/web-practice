// setup canvas

var canvas = document.querySelector('canvas');
var ctx = canvas.getContext('2d');

var width = canvas.width = window.innerWidth;
var height = canvas.height = window.innerHeight;

var balls = [];

// function to generate random number

function random(min, max) {
    var num = Math.floor(Math.random() * (max - min)) + min;
    return num;
}

function Ball() {
    this.x = random(0, width);
    this.y = random(0, height);
    this.velX = random(-7, 7);
    this.velY = random(-7, 7);
    this.color = 'rgb(' + random(0, 255) + ',' + random(0, 255) + ',' + random(0, 255) + ')';
    this.size = random(10, 20);
    this.draw = function () {
        ctx.beginPath();
        ctx.fillStyle = this.color;
        ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
        ctx.fill();
    }
}

// Ball.prototype.draw = function() {
//     ctx.beginPath();
//     ctx.fillStyle = this.color;
//     ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
//     ctx.fill();
// }

Ball.prototype.update = function () {
    if ((this.x + this.size) > width) {
        this.velX *= -1;
    }

    if ((this.y + this.size) > height) {
        this.velY *= -1;
    }

    if ((this.x + this.size) < 0) {
        this.velX *= -1;
    }

    if ((this.y + this.size) < 0) {
        this.velY *= -1;
    }

    this.x += this.velX;
    this.y += this.velY;

}

Ball.prototype.collisionDetect = function () {
    for (j = 0; j < balls.length; j++) {
        if (!(this.x === balls[j].x && this.y === balls[j].y && this.velX === balls[j].velX && this.velY === balls[j].velY)) {
            var dx = this.x - balls[j].x;
            var dy = this.y - balls[j].y;
            var distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < (this.size + balls[j].size)) {
                this.color = 'rgb(' + random(0, 255) + ',' + random(0, 255) + ',' + random(0, 255) + ')';
                balls[j].color = 'rgb(' + random(0, 255) + ',' + random(0, 255) + ',' + random(0, 255) + ')';
            }
        }
    }
}

function loop() {
    ctx.fillStyle = 'rgba(0, 0, 0, 0.25)';
    ctx.fillRect(0, 0, width, height);

    while (balls.length < 25) {
        var ball = new Ball();
        balls.push(ball);
    }

    for (i = 0; i < balls.length; i++) {
        balls[i].draw();
        balls[i].update();
        balls[i].collisionDetect();
    }

    requestAnimationFrame(loop);
}

loop();