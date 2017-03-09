window.addEventListener ('keydown', function (e) {
	// const audio = document.querySelector('audio[data-key="${e.keyCode}"]'); //Czemu ES6 nie robi roboty?
	const audio = document.querySelector('audio[data-key="'+ e.keyCode + '"]');
	const key = document.querySelector('div[data-key="'+ e.keyCode + '"]');
	if (!audio) {
		return; //stops
	}
	audio.currentTime = 0;
	audio.play();

	key.classList.add('playing');
})