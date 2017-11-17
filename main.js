var icons = [
	'<i class="fa fa-wheelchair-alt" aria-hidden="true"></i>',
	'<i class="fa fa-tty" aria-hidden="true"></i>',
	'<i class="fa fa-sign-language" aria-hidden="true"></i>',
	'<i class="fa fa-volume-control-phone" aria-hidden="true"></i>',
	'<i class="fa fa-tint" aria-hidden="true"></i>',
	'<i class="fa fa-star-half-o" aria-hidden="true"></i>',
	'<i class="fa fa-rss-square" aria-hidden="true"></i>',
	'<i class="fa fa-plane" aria-hidden="true"></i>',
	'<i class="fa fa-quora" aria-hidden="true"></i>',
	'<i class="fa fa-assistive-listening-systems" aria-hidden="true"></i>',
	'<i class="fa fa-calendar-plus-o" aria-hidden="true"></i>',
	'<i class="fa fa-bullseye" aria-hidden="true"></i>',
	'<i class="fa fa-calendar-o" aria-hidden="true"></i>',
	'<i class="fa fa-circle" aria-hidden="true"></i>',
	'<i class="fa fa-file-pdf-o" aria-hidden="true"></i>',
	'<i class="fa fa-hand-pointer-o" aria-hidden="true"></i>',
	'<i class="fa fa-history" aria-hidden="true"></i>',
	'<i class="fa fa-plug" aria-hidden="true"></i>',
	'<i class="fa fa-wheelchair-alt" aria-hidden="true"></i>',
	'<i class="fa fa-tty" aria-hidden="true"></i>',
	'<i class="fa fa-sign-language" aria-hidden="true"></i>',
	'<i class="fa fa-volume-control-phone" aria-hidden="true"></i>',
	'<i class="fa fa-tint" aria-hidden="true"></i>',
	'<i class="fa fa-star-half-o" aria-hidden="true"></i>',
	'<i class="fa fa-rss-square" aria-hidden="true"></i>',
	'<i class="fa fa-plane" aria-hidden="true"></i>',
	'<i class="fa fa-quora" aria-hidden="true"></i>',
	'<i class="fa fa-assistive-listening-systems" aria-hidden="true"></i>',
	'<i class="fa fa-calendar-plus-o" aria-hidden="true"></i>',
	'<i class="fa fa-bullseye" aria-hidden="true"></i>',
	'<i class="fa fa-calendar-o" aria-hidden="true"></i>',
	'<i class="fa fa-circle" aria-hidden="true"></i>',
	'<i class="fa fa-file-pdf-o" aria-hidden="true"></i>',
	'<i class="fa fa-hand-pointer-o" aria-hidden="true"></i>',
	'<i class="fa fa-history" aria-hidden="true"></i>',
	'<i class="fa fa-plug" aria-hidden="true"></i>'
];
var level = 1;
var gameOver = 0;
var clicks = 0;
var twoBox = [];
var container = document.querySelector('.container');
createTable();

var boxes = document.querySelectorAll('.box');

for (var i = 0; i < boxes.length; i++) {
	boxes[i].addEventListener('click', flip);
}


function flip() {
	clicks++;
	this.removeEventListener('click', flip)
	twoBox.push(this);
	var back = this.children[0];
	var front = this.children[1];
	back.style.transform = "perspective(900px) rotateY(0)";
	front.style.transform = "perspective(900px) rotateY(180deg)";

	if (clicks == 2) {
		// ?????? remove all events
		checkFlip();
	}
}

function checkFlip() {
	var front1 = twoBox[0].children[1];
	var back1 = twoBox[0].children[0];
	var front2 = twoBox[1].children[1];
	var back2 = twoBox[1].children[0];

	if (back1.innerHTML == back2.innerHTML) {
		gameOver++;
		if (gameOver == 18) {
			alert("Next Level") // mesto za novi level
		}
		clicks = 0;
		twoBox.length = 0;
		// vratiti klikove
	} else {
		setTimeout(function() {
			front1.style.transform = "perspective(900px) rotateY(0)";
			back1.style.transform = "perspective(900px) rotateY(180deg)";
			front2.style.transform = "perspective(900px) rotateY(0)";
			back2.style.transform = "perspective(900px) rotateY(180deg)";
			clicks = 0;
			twoBox[0].addEventListener('click', flip);
			twoBox[1].addEventListener('click', flip);
			twoBox.length = 0;
			// vratiti klikove

		}, 700)

	}
}



function createTable() {
	var text = '';
	for (var i = 0; i < 36; i++) {
		var rand = Math.floor(Math.random() * icons.length);
		text += '<div class="box"><div class="back">' + icons[rand] + '</div><div class="front"></div></div>';
		icons.splice(rand, 1);
	}
	container.innerHTML = text;
}