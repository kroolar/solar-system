// Mgławica
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
    random = (min, max) => Math.floor(Math.random()*(max-min) + min);   // Losowanie liczb
    setLeft = () => this.left = this.random(90, 0);                     // Ustawianie losowej pozycji na osi X
    setTop = () => this. top = this.random(90, 0);                      // Ustawianie losowej pozycji na osi Y
    setX = () => this.x.push(this.random(250, 50));                     // Przesunięcie w osi X
    setY = () => this.y.push(this.random(250, 50));                     // Przesunięcie w osi Y
    setBlur = () => this.blur.push(this.random(90, 70));                // Wielkość rozmazania
    setRed = () => this.red.push(this.random(255, 100));                // Kolor czerwony
    setGreen = () => this.green.push(this.random(255, 100));            // Kolor zielony
    setBlue = () => this.blue.push(this.random(255, 100));              // Kolor niebieski
    
    // Ustawienie wszystkich losowych wartości
    setString = () => {
        for(let i = 0; i < this.quantity; i++){
            this.string += `${this.x[i]}px ${this.y[i]}px ${this.blur[i]}px ${this.spread}px rgb(${this.red[i]}, ${this.green[i]}, ${this.blue[i]})`
            if(i<this.quantity-1) this.string +=",";
        }
    }

    // Utworzenie mgławicy
    createNebula = () => {
        this.setLeft();
        this.setTop();
        this.object = document.createElement('div');
        this.object.classList = "nebula";
        document.body.appendChild(this.object);
        this.object.style.left = `${this.left}vw`;
        this.object.style.top = `${this.top}vh`;
    }

    // Ustawienie wylosowanych wartości
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