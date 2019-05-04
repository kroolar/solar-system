class Nebula{
    constructor(quantity){
        this.left;
        this.top;
        this.x = [];
        this.y = [];
        this.blur = [];
        this.spread = 10;
        this.red = [];
        this.green = [];
        this.blue = [];
        this.string = "";
        this.quantity = quantity;
        this.object;
    }
    random = (min, max) => Math.floor(Math.random()*(max-min) + min);
    setLeft = () => this.left = this.random(90, 0);
    setTop = () => this. top = this.random(90, 0);
    setX = () => this.x.push(this.random(250, 50));
    setY = () => this.y.push(this.random(250, 50));
    setBlur = () => this.blur.push(this.random(90, 70));
    setRed = () => this.red.push(this.random(255, 100));
    setGreen = () => this.green.push(this.random(255, 100));
    setBlue = () => this.blue.push(this.random(255, 100));
    setString = () => {
        for(let i = 0; i < this.quantity; i++){
            this.string += `${this.x[i]}px ${this.y[i]}px ${this.blur[i]}px ${this.spread}px rgb(${this.red[i]}, ${this.green[i]}, ${this.blue[i]})`
            if(i<this.quantity-1) this.string +=",";
        }
    }
    createNebula = () => {
        this.setLeft();
        this.setTop();
        this.object = document.createElement('div');
        this.object.classList = "nebula";
        document.body.appendChild(this.object);
        this.object.style.left = `${this.left}vw`;
        this.object.style.top = `${this.top}vh`;
    }
    setBoxShadow = () => {
        for(let i = 0; i < this.quantity; i++){
            this.setX();
            this.setY();
            this.setBlur();
            this.setRed();
            this.setGreen();
            this.setBlue();
        }
        this.setString();
        this.object.style.boxShadow = this.string;
    }

}