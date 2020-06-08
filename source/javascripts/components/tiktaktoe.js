export default class Game {
	constructor(el) {

		this.choices         = Array.from(document.querySelectorAll('.js-choice'));
		this.choicesBox      = document.querySelector('.js-choices');
		this.vsBox           = document.querySelector('.js-vs');
		this.playerChoice    = document.querySelector('.js-player');
		this.homeChoice      = document.querySelector('.js-house');
		this.shadow          = document.querySelector('.js-shadow');
		this.result          = document.querySelector('.js-result');
		this.playerChoices   = Array.from(document.querySelectorAll('.js-player-choice'));
		this.computerChoices = Array.from(document.querySelectorAll('.js-computer-choice'));
		this.btnAgain        = document.querySelector('.js-again');
		this.score           = document.querySelector('.target-score');
		this.winner          = document.querySelector('.target-winner');

		this.computer = [];
		this.player = [];
		this.whoWin = "";
		this.points = 0;
		this.score.innerHTML = this.points
	}
	init(){
		this.myChoice()
		this.reset()
	}
	myChoice(){
		this.choices.forEach((el,i)=>{
			el.addEventListener('click',()=>{
			//aggiungi e togli blocchi con classe hide
			this.choicesBox.classList.add('hide')
			this.vsBox.classList.remove('hide')
			this.playerChoices[i].classList.remove('hide')
			this.homeChoice.classList.toggle('hide')
			this.shadow.classList.remove('hide')
			//scelta e passaggio degli attributi
			this.vs(i)
			})
		})
	}
	vs(i) {
	    setTimeout(()=>{ 
	    	this.shadow.classList.add('hide')
		//random cpu choice
		var scelta = this.computerChoices[Math.floor(Math.random() * this.computerChoices.length)];
		scelta.classList.remove('hide')
		//push the choice Attribute in the array
		var playerAttribute = this.playerChoices[i].getAttribute("data-value")
			this.player.push(playerAttribute)
		var computerAttribute = scelta.getAttribute("data-value")
			this.computer.push(computerAttribute)
		//check if i won or lost
		this.game()
		this.theWinnerIs()
	    }, 1000);
	}
	theWinnerIs(){
		setTimeout(()=>{
				//add points
			this.result.classList.toggle('hide')
			this.score.innerHTML = this.points
			this.winner.innerHTML = this.whoWin

			this.playerChoices.forEach((el)=>{
				if(this.whoWin === "you win"){
				el.classList.add('won')
				}
			})
			this.computerChoices.forEach((el)=>{
				if(this.whoWin == "you lose"){
					el.classList.add('won')
				}
			})

			},1000);
		}
	reset(){
	this.btnAgain.addEventListener('click',()=>{

		//inizializzo le classi come all'inizio
		this.homeChoice.classList.add('hide')
		this.shadow.classList.remove('hide')
		this.result.classList.add('hide')
		this.choicesBox.classList.remove('hide')
		this.vsBox.classList.add('hide')
		this.playerChoices.forEach((el)=>{
			if(!el.classList.contains('hide'))
				el.classList.add('hide')
		})
		this.computerChoices.forEach((el)=>{
			if(!el.classList.contains('hide'))
				el.classList.add('hide')
		})
		//reset gray circles
		this.playerChoices.forEach((el)=>{
				if(this.whoWin === "you win"){
				el.classList.remove('won')
				}
		})
		this.computerChoices.forEach((el)=>{
				if(this.whoWin == "you lose"){
					el.classList.remove('won')
				}
		})
		this.computer=[]
		this.player=[]
		this.whoWin=""
	})

}
	game(){
		//logica del gioco per vincere punti
		if(this.player == 0 && this.computer == 2){
			this.points++
			this.whoWin = "you win"
		}
		if(this.player == 2 && this.computer == 1){
			this.points++
			this.whoWin = "you win"
		}
		if(this.player == 1 && this.computer == 0){
			this.points++
			this.whoWin = "you win"
		}
		if(this.computer == 0 && this.player == 2){
			this.points--
			this.whoWin = "you lose"
		}
		if(this.computer == 2 && this.player == 1){
			this.points--
			this.whoWin = "you lose"
		}
		if(this.computer == 1 && this.player == 0){
			this.points--
			this.whoWin = "you lose"
		}
		if(this.computer == 0 && this.player == 0){
			this.whoWin = "tie"
		}
		if(this.computer == 1 && this.player == 1){
			this.whoWin = "tie"
		}
		if(this.computer == 2 && this.player == 2){
			this.whoWin = "tie"
		}
	}
}


