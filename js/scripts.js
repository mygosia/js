

var height = prompt("Podaj wysokość choinki");

function rysujChoinke() {
	for (var i = 0;  i < height ; i++) {
		 var star = "*";
			for (var j = 0; j < i; j++) {
				var star = star + "*";
			}
		console.log(star);
	}
};
rysujChoinke();