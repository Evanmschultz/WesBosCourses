/* get elements */
const player = document.querySelector('.player')
const video = player.querySelector('.viewer')
const progress = player.querySelector('.progress')
const progressBar = player.querySelector('.progress__filled')
const toggle = player.querySelector('.toggle')
const skipButtons = player.querySelectorAll('[data-skip')
const ranges = player.querySelectorAll('.player__slider')
// console.log(Object.getPrototypeOf(video))

/* build functions */
function togglePlay() {
	// if (video.paused) {
	// 	video.play()
	// } else {
	// 	video.pause()
	// } // or do
	const method = video.paused ? 'play' : 'pause' // ternary example with the method as a variable
	video[method]() // bracket notation method call to allow for variable, no period is used with the bracket method
}

function updatePlayButton() {
	// toggles video play / pause button styling
	// this is passed in by the event listener on the video element assigned above

	const icon = this.paused ? '►' : '❚ ❚' // if this is paused display play icon, otherwise display the pause icon

	toggle.textContent = icon // update the toggle element with the icon above
}

function skip() {
	// this.dataset.skip is a string, and time is a float, best to use a float
	video.currentTime += parseFloat(this.dataset.skip)
}

function handleRangeUpdate() {
	// changes volume or playBackRate
	video[this.name] = this.value
}

function handleProgress() {
	const percentage = (video.currentTime / video.duration) * 100

	progressBar.style.flexBasis = `${percentage}%`
}

function scrub(event) {
	// get fractional value (percentage) of video progress at click point and multiply it by the duration
	const scrubTime = (event.offsetX / progress.offsetWidth) * video.duration

	video.currentTime = scrubTime // update video time to be scrubTime
	console.log(event)
}

/* hook up the event listeners */
video.addEventListener('click', togglePlay) // toggles video when video is clicked
video.addEventListener('play', updatePlayButton) // listens for if the video is playing and calls update button
video.addEventListener('pause', updatePlayButton)
video.addEventListener('timeupdate', handleProgress) // update progress bar when the video time is updated automatically

toggle.addEventListener('click', togglePlay) // toggles video when play / pause button pressed
skipButtons.forEach((button) => button.addEventListener('click', skip)) // adds all event listeners to all elements w/ [data-skip]

// adds event listeners to the range controls (playBackRate and volume)
ranges.forEach((range) => range.addEventListener('change', handleRangeUpdate))
ranges.forEach((range) =>
	range.addEventListener('mousemove', handleRangeUpdate)
)

let mousedown = false // define flag for scrubbing on drag
progress.addEventListener('click', scrub) // scrubs with click
progress.addEventListener('mousemove', (event) => mousedown && scrub(event)) // if mousedown is true run scrub, else return
progress.addEventListener('mousedown', () => (mousedown = true)) // toggle mousedown boolean on mousedown and mouseup
progress.addEventListener('mouseup', () => (mousedown = false))
