// Fonction pour afficher les chiffres de 0 à 9.
function chiffre_09() {
	var sequence = '';
	// Ne rien modifier au dessus de ce commentaire
    for (var i = 0; i < 10; i++){
    	sequence += i;
    }
	// Ne rien modifier au dessous de ce commentaire
	return sequence;
}

// Fonction pour afficher l'alphabet en minuscule
function alphabet_az() {
	var sequence = '';
	// Ne rien modifier au dessus de ce commentaire
	for (var i = 97; i < 123; i++){
    	var chaine = String.fromCharCode(i);
    	sequence += chaine;
    }
	// Ne rien modifier au dessous de ce commentaire
	return sequence;
}

// Fonction pour afficher l'alphabet en minuscule en commençant par z
function alphabet_za() {
	var sequence = '';
	// Ne rien modifier au dessus de ce commentaire
    for (var i = 122; i >= 97; i--){
    	var chaine = String.fromCharCode(i);
    	sequence += chaine;
    }
	// Ne rien modifier au dessous de ce commentaire
	return sequence;
}

// Fonction pour afficher l'alphabet en majuscule
function alphabet_AZ() {
	var sequence = '';
	// Ne rien modifier au dessus de ce commentaire
    for (var i = 97; i < 123; i++){
    	var chaine = String.fromCharCode(i);
    	sequence += chaine.toUpperCase();
    }
	// Ne rien modifier au dessous de ce commentaire
	return sequence;
}

// Fonction pour afficher l'alphabet une lettre sur deux en minuscule
function alphabet_aZ() {
	var sequence = '';
	// Ne rien modifier au dessus de ce commentaire
	for (var i = 97; i < 123; i++){
    	var chaine = String.fromCharCode(i);
    	if(i % 2 == 0){
    		sequence += chaine.toUpperCase();
    }else{
    	    sequence += chaine;
    }
    }
	// Ne rien modifier au dessous de ce commentaire
	return sequence;
}

// Fonction pour afficher la suite alphabétique de letter
function suite_az(letter) {
	var sequence = '';
	// Ne rien modifier au dessus de ce commentaire
    var bambou = letter.charCodeAt();
    for (var i = bambou; i < 123; i++){
    	var chaine = String.fromCharCode(i);
    	sequence += chaine;
    }
	// Ne rien modifier au dessous de ce commentaire
	return sequence;
}

// Fonction pour transformer en minuscules
function transform_az(sentence) {
	var sequence = '';
	// Ne rien modifier au dessus de ce commentaire
    var chaine = sentence;
    sequence = chaine.toLowerCase();
	// Ne rien modifier au dessous de ce commentaire
	return sequence;
}

// Fonction pour transformer en majuscules
function transform_AZ(sentence) {
	var sequence = '';
	// Ne rien modifier au dessus de ce commentaire
    var chaine = sentence;
    sequence = chaine.toUpperCase();
	// Ne rien modifier au dessous de ce commentaire
	return sequence;
}

// Fonction pour retourner la position de search
function position_az(sentence, search) {
	var index = 0;
	// Ne rien modifier au dessus de ce commentaire
	var chaine = sentence;
	for(var chaine_element of chaine){
		
	}
	//index = chaine.search(search);
	// Ne rien modifier au dessous de ce commentaire
	return index;
}

// Fonction pour remplacer search par rien
function replace_az(sentence, search) {
	var sequence = '';
	// Ne rien modifier au dessus de ce commentaire
   	var chaine = sentence;
	// Ne rien modifier au dessous de ce commentaire
	return sequence;
}

// Fonction pour inverser minuscule et majuscule
function inverse_azAZ(sentence) {
	var sequence = '';
	// Ne rien modifier au dessus de ce commentaire

	// Ne rien modifier au dessous de ce commentaire
	return sequence;
}

// Fonction pour afficher les caractères ligne par ligne
function decompose_string(sentence) {
	var sequences = '';
	// Ne rien modifier au dessus de ce commentaire
var chaine = sentence;
for (var element_chaine of chaine){
	sequences += element_chaine + "\n" ;
}
 
	// Ne rien modifier au dessous de ce commentaire
	return sequences;
}

// Fonction pour afficher une pyramide de hauteur height
function pyramide_easy(height) {
	var sequences = '';
	// Ne rien modifier au dessus de ce commentaire
<<<<<<< Updated upstream
var nbTraits
var nbEtoiles
var nombreLu
nombreLu = parseInt(height);
// Parcourir chaque ligne 
for (var noLigne=1; noLigne<=nombreLu; noLigne++){
	// Calculer le nb de chiffres et de zéros à écrire sur la ligne courante
	nbEtoiles = nombreLu - noLigne + 1;
	nbTraits = nombreLu - nbEtoiles;
	// Écrire les traits de la ligne courante
	for (var i=1; i<=nbTraits; i++){
		sequences += "/";
	}
	// Écrire les etoiles de la ligne courante
	for (var noEtoiles = nbEtoiles; noEtoiles>=1; noEtoiles--){
		sequences += "*";
	}
	sequences += "\n";
}
=======
var total
>>>>>>> Stashed changes
	// Ne rien modifier au dessous de ce commentaire
	return sequences;
}