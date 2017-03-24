var maleNames = ["wojtek", "pawel", "andrzej", "michal"];
var femaleNames = ["anna", "kornelia", "basia", "hanna"];

var allNames = maleNames.concat(femaleNames);

console.log(allNames);

var newName = "Asia";
if (allNames.indexOf(newName) === -1) {
	allNames.push(newName);
};
console.log(allNames);