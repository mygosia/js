var a = prompt('Podaj liczbę pierwszą');
var b = prompt('Podaj liczbę drugą');
var value = ((a * a) + (2 * a * b) - (b - b));

console.log(value);


if (value < 0) {
    alert("wynik ujemny")
  } else if (value === 0) {
  	alert("ZERO")
} else {
    alert("wynik dodatni")
  }

/*
value > 0 ? console.log("wynik dodatni") : console.log("wynik ujemny")

if (value === 0) {
  console.log("ZERO")
}
*/
