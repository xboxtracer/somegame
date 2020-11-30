import goblin from '../img/goblin.png'

export default class goblinGame {
    constructor() {
        this.clickCondition = true;
        this.fileInner = document.querySelectorAll('.flex-inner');
        this.divContainer = document.querySelector('.flex-container'),
        this.divInnerFlex = document.querySelectorAll('.flex-inner'),
        this.hitContainer = document.querySelector('.hit'),
        this.missContainer = document.querySelector('.miss'),
        this.startBtn = document.querySelector('.btn__start'),
        this.imgPlace = 0,
        this.winCondition = 0,
        this.loseCondition = 0,
        this.startBtnListener(),
        this.fieldListener()
    }
    startBtnListener() {
        this.startBtn.addEventListener('click', ()=>{this.startGame()})
    }
    rndNumber() {
        return Math.floor(Math.random() * this.divInnerFlex.length);
    }
    goblinPlace() {
        if (this.clickCondition === false) {
            this.loseCondition++
            console.log('miss =', this.loseCondition)
            };
            this.clickCondition = false;
    
    
            this.fileInner[this.imgPlace].innerHTML = '';
            let someNumber = this.rndNumber();
            while(this.imgPlace === someNumber) {
            someNumber = this.rndNumber();
            };
            this.imgPlace = someNumber;
            this.fileInner[this.imgPlace].innerHTML = `<img src="${goblin}">`;
    }
    winOrLose() {
        this.hitContainer.textContent = `Hit: ${this.winCondition}`;
        this.missContainer.textContent = `Miss: ${this.loseCondition}`;
        if (this.winCondition >= 5) {
            this.hitContainer.textContent = `U win!`;
            this.missContainer.textContent = ``;
            console.log('Gatcha!');
            this.stopGame();
        }
        if (this.loseCondition >= 5) {
            this.hitContainer.textContent = ``;
            this.missContainer.textContent = `U lose!`;
            console.log('Yo lose!');
            this.stopGame();
        };
    }
    fieldListener() {
        this.divContainer.addEventListener('click', (event)=> {
            try {
                if(event.target.closest('.flex-inner').hasChildNodes() && this.clickCondition === false) {
                    this.clickCondition = true;
                    this.winCondition++;
                    console.log('hit =', this.winCondition);
                };
            } catch(e) {
                console.log(e)
                console.log('sticky keys')
            }
        })
    }
    startGame() {
        this.checkForWinner = setInterval(()=>{this.winOrLose()}, 100);
        this.game = setInterval(()=> {this.goblinPlace()}, 1000);
    }
    stopGame() {
        this.fileInner[this.imgPlace].innerHTML = '';
        this.loseCondition = 0;
        this.winCondition = 0;
        clearInterval(this.game);
        clearInterval(this.checkForWinner);
    }
}