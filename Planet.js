class Planet extends SpaceObject{
    constructor(reference, angle, speed, radius){
        super(reference)
        this.reference = reference;
        this.angle = angle;
        this.speed = speed;
        this.radius = radius;
    }

    moonMove = (planet) => {
        this.x = Math.cos(this.angle * Math.PI/180) * this.radius;
        this.y = Math.sin(this.angle * Math.PI/180) * this.radius;
        this.reference.style.left = `${(planet.x-30) + this.x}vh`;
        this.reference.style.top = `${planet.y + this.y}vh`;
        this.angle += this.speed;
    }

    move = ()=> {
        this.x = Math.cos(this.angle * Math.PI/180) * this.radius;
        this.y = Math.sin(this.angle * Math.PI/180) * this.radius;
        this.reference.style.left = `${this.x-30}vh`;
        this.reference.style.top = `${this.y}vh`;
        this.angle += this.speed;
    }

}