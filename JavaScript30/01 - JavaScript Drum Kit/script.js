function playSound(event) {
	const audio = document.querySelector(`audio[data-key='${event.key}']`)
	const keyElement = this.document.querySelector(
		`.key[data-key='${event.key}']`
	)
	if (!audio) {
		return
	}

	audio.currentTime = 0 // resets audio to the beginning so it can play when the key is pressed multiple times
	audio.play()

	keyElement.classList.add('playing')
}

function removeTransition(event) {
	if (event.propertyName !== 'transform') {
		// skip if it is not transform
		return
	}

	this.classList.remove('playing')
}

const keys = document.querySelectorAll('.key')
keys.forEach((key) => key.addEventListener('transitionend', removeTransition))

window.addEventListener('keydown', playSound)
