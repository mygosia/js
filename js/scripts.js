
var buttonElem = document.getElementById('addElem');
var list = document.getElementById('list');


buttonElem.addEventListener('click', function() {
	var newListItem = document.createElement('li');
	var getListItem = document.getElementsByTagName('li');
	var numberListItem = getListItem.length;
	newListItem.innerHTML += 'item ' + [numberListItem];
	list.appendChild(newListItem);
});
