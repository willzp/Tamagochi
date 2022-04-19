const img = document.querySelector('img');
const picture2 = new URL('../img/monster2.jpeg', import.meta.url);
const picture = new URL('../img/monster3.jpg', import.meta.url);

export class Tamagochigame{
    #hunger = 0;
    #happiness = 0;
    #running = false;
    #intervalID;
    #tamagochiname;
    #tamagochitype;

    constructor() {

    }

    feed() {
        if (this.#hunger > 0) {
            this.#hunger--;
        }
        document.getElementById('nr1').innerText = this.#hunger;
    }

    play() {
        if (this.#happiness < 10) {
            this.#happiness++;
        }
        document.getElementById('nr2').innerText = this.#happiness;
    }

    isRunning() {
        return this.#running;
    }

    start() {
        this.#hunger = 5;
        this.#happiness = 5;
        document.getElementById('nr1').innerText = this.#hunger;
        document.getElementById('nr2').innerText = this.#happiness;
        this.#intervalID = setInterval(this.#update.bind(this), 2000);
        this.#running = true;
        img.src = picture;
        this.#tamagochiname = document.getElementById('tname').value;
        this.#tamagochitype = document.getElementById('ttype').value;
    }
    
    stop() {
        clearInterval(this.#intervalID);
        this.#running = false;
    }

    #update() {
        this.#hunger++;
        this.#happiness--;
        document.getElementById('nr1').innerText = this.#hunger;
        document.getElementById('nr2').innerText = this.#happiness;
        if (this.#hunger == 10 || this.#happiness == 0) {
            this.stop()
            document.getElementById('hej').innerHTML = this.#tamagochiname + " who was a " + this.#tamagochitype + " just passed away ):";
            document.querySelector('button').innerText = 'Start';
            img.src = picture2;
        }
    }
}
