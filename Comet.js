class Comet extends SpaceObject{
    constructor(reference){
        super(reference)
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
            this.x-=8;
            this.rotate = 45;
            break;

            case "center-left":
            this.x-=4;
            this.rotate = 30;
            break;

            case "center-right":
            this.x +=4;
            this.rotate = -30;
            break;

            case "right":
            this.x+=8;
            this.rotate = -45;
            break;
        }
        this.counter++;
        this.y+=8;
        this.initialComet();
        if(this.counter == 400) this.clearInterval();
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