class Planet{
    constructor(reference, angle, speed, radius){
        this.reference = reference;
        this.angle = angle;
        this.speed = speed;
        this.radius = radius;
    }


    move = ()=> {
        const x = Math.cos(this.angle * Math.PI/180) * this.radius;
        const y = Math.sin(this.angle * Math.PI/180) * this.radius;
        this.reference.style.left = `${x}vh`;
        this.reference.style.top = `${y}vh`;
        this.angle += this.speed;
    }

}


const mercury = new Planet(document.querySelector('.mercury'), 0, 0.3, 20);
const venus = new Planet(document.querySelector('.venus'), 30, 0.23, 35);
const mars = new Planet(document.querySelector('.mars'),  20, 0.2,  50);
const earth = new Planet(document.querySelector('.earth'), 50, 0.18, 75);
const jupiter = new Planet(document.querySelector('.jupiter'), 50, 0.1, 110);


const planetsMove = () => {
    mercury.move();
    venus.move();
    mars.move();
    earth.move();
    jupiter.move();
}

setInterval(planetsMove, 10)


for(let i = 0; i < 50; i++){
    const star = document.createElement('div');
    star.classList = 'star';
    document.body.appendChild(star);
    const xRand = Math.floor(Math.random()*99);
    const yRand = Math.floor(Math.random()*99);
    const rand = Math.floor(Math.random()* 7 + 3);
    const rand2 = Math.floor(Math.random()*2);
    star.style.top = `${xRand}vh`;
    star.style.left = `${yRand}vw`;
    star.style.boxShadow = `0px 0px ${rand}px ${rand2}px white`
}
for(let i = 0; i < 50; i++){
    const star = document.createElement('div');
    star.classList = 'starsm';
    document.body.appendChild(star);
    const xRand = Math.floor(Math.random()*99);
    const yRand = Math.floor(Math.random()*99);
    const rand = Math.floor(Math.random()* 1);
    const rand2 = Math.floor(Math.random()*1);
    star.style.top = `${xRand}vh`;
    star.style.left = `${yRand}vw`;
    star.style.boxShadow = `0px 0px ${rand}px ${rand2}px white`
}
for(let i = 0; i < 50; i++){
    const star = document.createElement('div');
    star.classList = 'starsms';
    document.body.appendChild(star);
    const xRand = Math.floor(Math.random()*99);
    const yRand = Math.floor(Math.random()*99);
    const rand = Math.floor(Math.random()* 1);
    const rand2 = Math.floor(Math.random()*1);
    star.style.top = `${xRand}vh`;
    star.style.left = `${yRand}vw`;
    star.style.boxShadow = `0px 0px ${rand}px ${rand2}px white`
}


    class Comet{
        constructor(reference, x, y){
            this.x = x;
            this.y = y;
            this.reference = reference;
            this.interval;
            this.counter = 0;
            this.direction;
            this.rotate;
        }
        initialComet = () => {
            this.reference.style.left = `${this.x}px`
            this.reference.style.top = `${this.y}px`
            this.reference.style.transform = `rotate(${this.rotate}deg)`
        }
        randomTrajectory = () => {
            const rand = Math.random();
            if(rand<0.24) this.direction = "left";
            else if(rand>=0.24 && rand<0.5) this.direction = 'center-left';
            else if(rand>=0.5 && rand<0.75) this.direction = 'center-right';
            else if(rand>=0.75) this.direction = 'right';
        }
        setCometTrajectory = () => {
            switch(this.direction){
                case "left":
                this.x--;
                this.rotate = 45;
                break;

                case "center-left":
                this.x-= 0.5;
                this.rotate = 30;
                break;

                case "center-right":
                this.x += 0.5;
                this.rotate = -30;
                break;

                case "right":
                this.x++;
                this.rotate = -45;
                break;
            }
            console.log(this.direction);
            this.counter++;
            this.y++;
            this.initialComet();
            if(this.counter == 800) this.clearInterval();
        }

        setInterval = () => {
            this.randomTrajectory();
            this.interval = setInterval(this.setCometTrajectory, 10);
        }
        clearInterval = () => {
            this.counter = 0;
            clearInterval(this.interval);
            this.x = Math.floor(Math.random()*1000 + 100);
            this.y = Math.floor(Math.random()*500 + 100);
            this.initialComet();
            this.setInterval();
        }



    }

    const comet = new Comet(document.querySelector('.comet'), 200, 100);
    comet.initialComet();
    comet.setInterval();

const addComet = () => {
    Comet.x = Math.floor(Math.random()*99);
    let cometY = Math.floor(Math.random()*99);
   // let cometInterval = setInterval(setCometTrajectory, 10)
    xRand++;
    yRand++;
    comet.style.top = `${xRand}px`;
    comet.style.left = `${yRand}px`;
}

//addComet();
/*
for(let i = 0; i < 2; i++){
    const mgla = document.createElement('div');
    mgla.classList = 'mgla';
    document.body.appendChild(mgla);
    const xRand = Math.floor(Math.random()*80);
    const yRand = Math.floor(Math.random()*80);

    const br1 = Math.floor(Math.random()* 50);
    const br2 = Math.floor(Math.random()* 50);

    const rotate = Math.floor(Math.random()* 180);

    const bs1 = Math.floor(Math.random()* 0);
    const bs2 = Math.floor(Math.random()* 0);
    const bs3 = Math.floor(Math.random()* 100 + 100);
    const bs4 = Math.floor(Math.random()* 50 + 200);
    const bsr = Math.floor(Math.random()* 100 + 155);
    const bsg = Math.floor(Math.random()* 0);
    const bsb = Math.floor(Math.random()* 100 + 155);
    const opac = (Math.floor(Math.random()* 1 + 20))/100;

    const bs1_1 = Math.floor(Math.random()* 0);
    const bs2_1 = Math.floor(Math.random()* 200);
    const bs3_1 = Math.floor(Math.random()* 100 + 100);
    const bs4_1 = Math.floor(Math.random()* 100 + 150);
    const bsr_1 = Math.floor(Math.random()* 100 + 155);
    const bsg_1 = Math.floor(Math.random()* 100 + 155);
    const bsb_1 = Math.floor(Math.random()* 100 + 155);
    const opac_1 = (Math.floor(Math.random()* 1 + 30))/100;

    const bs1_2 = Math.floor(Math.random()* 200);
    const bs2_2 = Math.floor(Math.random()* 0);
    const bs3_2 = Math.floor(Math.random()* 100 + 100);
    const bs4_2 = Math.floor(Math.random()* 100 + 100);
    const bsr_2 = Math.floor(Math.random()* 200 + 55);
    const bsg_2 = Math.floor(Math.random()* 200 + 55);
    const bsb_2 = Math.floor(Math.random()* 200 + 55);
    const opac_2 = (Math.floor(Math.random()* 1 + 30))/100;


    mgla.style.top = `${xRand}vh`;
    mgla.style.left = `${yRand}vw`;
    mgla.style.borderRadius = `${br1}% ${br2}%`;
    mgla.style.transform = `rotate(${rotate}deg)`;
    
    mgla.style.boxShadow = `${bs1}px ${bs2}px ${bs3}px ${bs4}px rgba(${bsr} ${bsg} ${bsb}), 
    ${bs1_1}px ${bs2_1}px ${bs3_1}px ${bs4_1}px rgba(${bsr_1} ${bsg_1} ${bsb_1}),
    ${bs1_2}px ${bs2_2}px ${bs3_2}px ${bs4_2}px rgba(${bsr_2} ${bsg_2} ${bsb_2}) `;
    mgla.style.opacity = opac;
}

*/