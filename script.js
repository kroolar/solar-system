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

/*
let x;
let y;
let xMars;
let yMars;

function planet(reference, x, y, radius, angle, speed) {
    this.reference = reference;
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.angle = angle;
    this.speed = speed;
}

/*const earth = {
    reference : document.querySelector('.earth'),
    x : 0,
    y : 0,
    radius : 40,
    angle : 0,
    speed : 1
}

const mars = {
    reference : document.querySelector('.mars'),
    x : 0,
    y : 0,
    radius : 50,
    angle : 50,
    speed : 1.2
}

const mercury = {
    reference : document.querySelector('.mercury'),
    x : 0,
    y : 0,
    radius : 20,
    angle : 20,
    speed : 0.8,
}


const abc = (planet) => {
    planet.x = Math.cos(planet.angle * Math.PI/180) * planet.radius;
    planet.y = Math.sin(planet.angle * Math.PI/180) * planet.radius;
    planet.reference.style.top = planet.y + "vw";
    planet.reference.style.left = planet.x + "vw";
    planet.angle += planet.speed;
}

const mercury = new planet(document.querySelector('.mercury'), 0, 0, 18, -20, 0.47);
const venus = new planet(document.querySelector('.venus'), 0, 0, 30, 0, 0.35);
const earth = new planet(document.querySelector('.earth'), 0, 0, 45, 20, 0.30);
const mars = new planet(document.querySelector('.mars'), 0, 0, 66, 10, 0.24);
const jupiter = new planet(document.querySelector('.jupiter'), 0, 0, 90, 30, 0.13);

const ruch = () => {
    abc(mercury);
    abc(venus);
    abc(earth);
    abc(mars);
    abc(jupiter);
}
setInterval(ruch, 20);
*/
for(let i = 0; i < 200; i++){
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