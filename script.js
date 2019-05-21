


if (window.outerWidth > 800){
const mercury = new Planet(document.querySelector('.mercury'), 0, 0.3, 60);
const venus = new Planet(document.querySelector('.venus'), 30, 0.23, 90);
const mars = new Planet(document.querySelector('.mars'),  20, 0.2,  110);
const earth = new Planet(document.querySelector('.earth'), 0, 0.1, 140);
const jupiter = new Planet(document.querySelector('.jupiter'), 50, 0.1, 150);
const moon = new Planet(document.querySelector('.moon'), 0, 1, 15);

const planetsMove = () => {
    mercury.move();
    venus.move();
    mars.move();
    earth.move();
    jupiter.move();
    moon.moonMove(earth);

}

setInterval(planetsMove, 10)

}


    const comet = new Comet(document.querySelector('.comet'), 200, 100);
    comet.initialComet();
    comet.setInterval();






for(let i = 0; i < 10; i++){
const nebula = new Nebula(10);
nebula.createNebula();
nebula.setBoxShadow(); 
}

const bigDipper = document.querySelector(".big-dipper");
bigDipper.style.marginLeft = `${Math.floor(Math.random()*70 + 20)}%`;
bigDipper.style.marginTop = `${Math.floor(Math.random()*70 + 20)}vh`;



const starSm = new Stars(document.querySelector('.constellation-sm'), 200, "small");
const starMd = new Stars(document.querySelector('.constellation-md'), 200, "medium");
const starBg = new Stars(document.querySelector('.constellation-bg'), 200, "big");

starSm.createNewStar();
starMd.createNewStar();
starBg.createNewStar();