document.onkeydown = BackspaceKeyListener;

function BackspaceKeyListener(e) {
	if (e.keyCode == 8 && !(e.altKey || e.ctrlKey || e.metaKey)) {

		var elem = e.target;

		if (elem.tagName == 'INPUT' ||
				elem.tagName == 'TEXTAREA' ||
				elem.isContentEditable) {
			return true;
		} 

		e.preventDefault();
		e.stopImmediatePropagation();

		if (!e.shiftKey)
			window.history.back();
		else
			window.history.forward();
	}

	return true;
}
