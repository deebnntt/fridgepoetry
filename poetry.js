function makeMagnets(wordArray) {
	for (let i = 0; i < wordArray.length; i++) {
		let word = document.createElement('span');
		word.className = 'word';
		word.innerText = wordArray[i];
		word.draggable = true;
		word.onmousedown = function() {
			_drag_init(this);
			return false;
		};
		document.querySelector('#fridge').append(word);
	}
}

let selected = null, // Object of the element to be moved
	x_pos = 0,
	y_pos = 0, // Stores x & y coordinates of the mouse pointer
	x_elem = 0,
	y_elem = 0;

function _drag_init(elem) {
	// Store the object of the element which needs to be moved
	selected = elem;
	x_elem = x_pos - selected.offsetLeft;
	y_elem = y_pos - selected.offsetTop;
}

// Will be called when user dragging an element
function _move_elem(e) {
	x_pos = document.all ? window.event.clientX : e.pageX;
	y_pos = document.all ? window.event.clientY : e.pageY;
	if (selected !== null) {
		selected.style.position = 'absolute';
		selected.style.left = x_pos - x_elem + 'px';
		selected.style.top = y_pos - y_elem + 'px';
	}
}

// Destroy the object when we are done
function _destroy() {
	selected = null;
}

document.onmousemove = _move_elem;
document.onmouseup = _destroy;
