var text = "Papugi koszą trawę, unosząc się nad ziemią 15 centymetrów, na czerwonych dywanach.";

function changeFirstWord(newAnimal) {
	var anArray = text.split(" ");
	anArray.shift();
	anArray.unshift(newAnimal);
	var newText = anArray.join(" ");
	console.log(newText.charAt(0).toUpperCase()); //+ newText.slice(1);
	console.log(newText);
};
changeFirstWord("ropuchy");

// var animal = "Zielone słonie";
//var animalUpperCased = animal.toUpperCase();

//var textNew = text.replace ("Papugi", animalUpperCased);

//var textNewHalf = textNew.length / 2;

//console.log(textNew.slice(0, textNewHalf)); */