// select your elements first - what is the user going to interact with?
// these are the targets => these are what the "user" uses
// this is a 1 to 1 conection to an element in the DOM
// let navButtons = document.querySelectorAll('#buttonHolder img');

// this is a 1 to many connection to elements in the DOM
let navButtons = document.querySelectorAll("#buttonHolder img",)
	theHeadline = document.querySelector('#headLine h1'),
	puzzleBoard = document.querySelectorAll('.puzzle-board');

// functions go in the middle
// these are the "actions" that should happen
function changeBGImage() {
	let newBGPath = "images/backGround" + this.id + ".jpg";
	// debugger;
	// object.property = "new value"
	// theHeadline.textcontent = "Drag and Drop is Fun!";
	// theHeadline.classlist.add('orange-headline');

	// change background image in the drop zone 
	// the `${}` is called a javascript trmpkate string - whatever is inside the curly brace is evaluated at
	// runtime and interpolated (replaces the bracket notation)
	puzzleBoard.style.backgroundImage = `url(images/backGround${this.id}.jpg)`;
}

// event handling at the bottom => how things react when you
// how is the user going to interact with the elements / controls you provide?
// procces a collection of elements and add an event handler to each
navButtons.forEach(button => button.addEventListener ('click', changeBGImage));