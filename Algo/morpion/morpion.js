
/*
var morpion = [
	['A', 'B', 'C'],
	['D', 'E', 'F'],
	['G', 'H', 'I']
];

_____________
|   |   |   |
| A | B | C |
|___|___|___|
|   |   |   |
| D | E | F |
|___|___|___|
|   |   |   |
| G | H | I |
|___|___|___|

console.log(morpion[0][0]);
// => A
console.log(morpion[1][2]);
// => F
console.log(morpion[2][2]);
// => I

// A
document.getElementById('morpion').children[0].children[0].innerHTML = 'A';
// F
document.getElementById('morpion').children[1].children[2].innerHTML = 'F';
// I
document.getElementById('morpion').children[2].children[2].innerHTML = 'I';
*/
var morpion = [[],[],[]];
var turn = 'X';
var win = false;
// Ne rien modifier au dessus de ce commentaire

// Fonction qui permet de jouer
// Ne pas modifier cette fonction
function play(x, y) {
	if (!morpion[y][x] && win === false) {
		morpion[y][x] = turn;
		document.getElementById('morpion').children[y].children[x].innerHTML = turn;
		if (turn == 'X') {
			turn = 'O';
			document.getElementById('infos').children[0].innerHTML = 'Au tour de O';
		}
		else {
			turn = 'X';
			document.getElementById('infos').children[0].innerHTML = 'Au tour de X';
		}
		is_win(x, y);
	}
}

// Fonction qui permet de recommencer
function restart() {
	morpion = [[],[],[]];
	turn = 'X';
	win = false;
	// Ne rien modifier au dessus de ce commentaire

	// Ne rien modifier au dessous de ce commentaire
	for (var y = 0; y <= 2; y++) {
		for (var x = 0; x <= 2; x++) {
			document.getElementById('morpion').children[y].children[x].innerHTML = '';
		}
	}
	document.getElementById('infos').children[0].innerHTML = 'Au tour de X';
}

// Fonction de vérification de victoire
function is_win(x, y) {
	// Ne rien modifier au dessus de ce commentaire
  	console.log('x', x);
  	console.log('y', y);
  	console.log('morpion', morpion[y][x]);
  	console.log('morpion', morpion[0][0]);
  	console.log('morpion', morpion[0][1]);
  	console.log('morpion', morpion[0][2]);
  	if (morpion [0][0] != undefined && morpion[0][0]== morpion[0][1] && morpion[0][0]== morpion[0][2]){ 
  		win = morpion[0][0];
  	}else if (morpion [1][0] != undefined && morpion[1][0]== morpion[1][1] && morpion[1][0]== morpion[1][2]){
  		win = morpion[1][0];
  	}else if (morpion [2][0] != undefined && morpion[2][0]== morpion[2][1] && morpion[2][0]== morpion[2][2]){
  		win = morpion[2][0];
  	}else if (morpion [0][0] != undefined && morpion[0][0]== morpion[1][1] && morpion[0][0]== morpion[2][2]){
  		win = morpion[0][0];
  	}else if (morpion [2][0] != undefined && morpion[2][0]== morpion[1][1] && morpion[2][0]== morpion[0][2]){
  		win = morpion[2][0];
  	}else if (morpion [0][0] != undefined && morpion[0][0]== morpion[1][0] && morpion[0][0]== morpion[2][0]){
  		win = morpion[0][0];
  	}else if (morpion [0][1] != undefined && morpion[0][1]== morpion[1][1] && morpion[0][1]== morpion[2][1]){
  		win = morpion[0][1];
  	}else if (morpion [0][2] != undefined && morpion[0][2]== morpion[1][2] && morpion[0][2]== morpion[2][2]){
  		win = morpion[0][2];
  	}else if (morpion[0][0]!= undefined && 
  		      morpion[0][1]!= undefined &&
  		      morpion[0][2]!= undefined &&
  		      morpion[1][0]!= undefined &&
  		      morpion[1][1]!= undefined &&
  		      morpion[1][2]!= undefined &&
  		      morpion[2][0]!= undefined &&
  		      morpion[2][1]!= undefined &&
  		      morpion[2][2]!= undefined){
  		win = 'null';
  	}

	// Ne rien modifier au dessous de ce commentaire
	if (win == 'null') {
		document.getElementById('infos').children[0].innerHTML = 'Match nul';
	}
	else if (win !== false) {
		document.getElementById('infos').children[0].innerHTML = win + ' à gagné';
	}
}

