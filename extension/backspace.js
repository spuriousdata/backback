document.onkeydown = BackspaceKeyListener;

function BackspaceKeyListener(event) {
	var isCtrl = event.ctrlKey;
	var isAlt = event.altKey;
	var isShift = event.shiftKey;
	
	if (!isCtrl && !isAlt) {
		var target = event.target;
		if (event.which == 8 && target) {
			// If on text fields or messagequeue
			// was already triggered disable usage
			if (target.type == 'text' ||
					target.type == 'textarea' ||
					target.type == 'password' || target.contentEditable == "true") {
				return true;
			
			} else {
				// Mark as already triggered
				window.setTimeout(function () {
						UseBackspaceShortcut(isShift);
				}, 0);
				return false;
			}
		}
	}
	
	return true;
}

function UseBackspaceShortcut(isShift) {
	if (!isShift)
		window.history.back();
	else
		window.history.forward();
}

