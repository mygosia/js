var text = ("Papugi koszą trawę, unosząc się nad ziemią 15 centymetrów, na czerwonych dywanach.");

var animal = "Zielone słonie";
var animalUpperCased = animal.toUpperCase();

var textNew = text.replace ("Papugi", animalUpperCased);

var textNewHalf = textNew.length / 2;

console.log(textNew.slice(0, textNewHalf));