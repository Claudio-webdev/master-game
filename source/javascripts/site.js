import Game from './components/tiktaktoe.js';


document.addEventListener("DOMContentLoaded", function(){
	const rules           = document.querySelector('.js-rules');
	const close           = document.querySelector('.js-close');
	const filter          = document.querySelector('.js-filter');
	const rulesModal      = document.querySelector('.js-rulesModal');



		showrules()

		function showrules(){
		rules.addEventListener('click',()=>{
			rulesModal.classList.remove('hide')
			filter.classList.remove('hide')
		})
		close.addEventListener('click',()=>{
			rulesModal.classList.add('hide')
			filter.classList.add('hide')
		})
	}


const el = document.querySelector('.game')
const game = new Game(el)
game.init()





})