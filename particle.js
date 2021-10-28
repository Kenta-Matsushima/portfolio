//define
let canvas = document.querySelector('#canvas'),
    c = canvas.getContext('2d'),
    width = canvas.width = window.innerWidth,
    height = canvas.height = window.innerHeight,
    hue = 0,
    particleArray = [];


//resize
window.addEventListener('resize', function(){
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
    apperParticle();
})


//particle class
class Particle{
    constructor(){
        this.size = 1;
        this.x = Math.random() * (width - this.size * 2) + this.size,
        this.y = Math.random() * (height - this.size * 2) + this.size,
        this.speedX = (Math.random() - 0.5) * 0.7;
        this.speedY = (Math.random() - 0.5) * 0.7;
    }

    update(){
        this.x += this.speedX;
        this.y += this.speedY;

        this.color = 'hsl(' + hue + ', 100%, 50%)'

        if (this.x + this.size > width || this.x + this.size < 0) {
            this.speedX = -this.speedX;
        }
        if (this.y + this.size > height || this.y - this.size < 0) {
            this.speedY = -this.speedY;
        }
    }

    draw(){
        c.beginPath();
        c.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        c.strokeStyle = this.color;
        c.stroke();
    }
}


//make particles based on particle class
for (let i = 0; i < 200; i++) {
    particleArray.push(new Particle())
}


//draw particles
function apperParticle(){
    for (let i = 0; i < particleArray.length; i++) {
        particleArray[i].update();
        particleArray[i].draw();

        for (let j = i; j < particleArray.length; j++) {
            let dx = particleArray[i].x - particleArray[j].x,
                dy = particleArray[i].y - particleArray[j].y,
                dis = Math.sqrt(dx * dx + dy * dy);
            if (dis < 80) {
                c.beginPath();
                c.moveTo(particleArray[i].x, particleArray[i].y);
                c.lineTo(particleArray[j].x, particleArray[j].y);
                c.stroke();
            }

            
        }
        
    }
}


//animation
animate()

function animate(){
    c.fillStyle = 'white'
    // c.fillStyle = 'rgba(0,0,0,1)'
    c.fillRect(0, 0, width, height);


    apperParticle();
    hue += 0.2;
    requestAnimationFrame(animate)
}
