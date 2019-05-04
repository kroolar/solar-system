class Stars extends SpaceObject{
    constructor(reference, quantity, size){
        super(reference);
        this.x = [];
        this.y = [];
        this.quantity = quantity;
        this.blur = [];
        this.spread = [];
        this.size = size;
    }

    randomPosition = () => {
        for(let i = 0; i < this.quantity; i++){
            this.x[i] = Math.floor(Math.random()*290);
            this.y[i] = Math.floor(Math.random()*290);
        }
    }

    randomBoxShadow = () => {
        for(let i = 0; i < this.quantity; i++){
            if(this.size === "small"){
                this.blur[i] = Math.floor(Math.random()*5+2);
                this.spread[i] = Math.floor(Math.random()*2);
            }
            else if(this.size === "medium"){
                this.blur[i] = Math.floor(Math.random()*10+5);
                this.spread[i] = Math.floor(Math.random()*3);
            }
            else if(this.size === "big"){
                this.blur[i] = Math.floor(Math.random()*15+10);
                this.spread[i] = Math.floor(Math.random()*4);
            }

        }
    }

    createNewStar = () => {
        this.randomPosition();
        this.randomBoxShadow();
        for(let i = 0; i < this.quantity; i++){
            const star = document.createElement('div');
            star.classList = 'star';
            if(this.size === "small") star.style.opacity = 0.2;
            else if(this.size === "medium") star.style.opacity = 0.5;
            else if(this.size === "big") star.style.opacity = 0.7;
            this.reference.appendChild(star);
            star.style.top = `${this.x[i]}vh`;
            star.style.left = `${this.y[i]}vh`;
            star.style.boxShadow = `0px 0px ${this.blur[i]}px ${this.spread[i]}px white`
        }
    }
}