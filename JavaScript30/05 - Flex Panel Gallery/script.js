const panels = document.querySelectorAll('.panel')

function toggleOpen() {
	this.classList.toggle('open')
}

function toggleOpenActive(event) {
	if (event.propertyName.includes('flex')) {
		console.log(event.propertyName)
		this.classList.toggle('open-active')
	}
}

panels.forEach((panel) => panel.addEventListener('click', toggleOpen))
panels.forEach((panel) =>
	panel.addEventListener('transitionend', toggleOpenActive)
)
