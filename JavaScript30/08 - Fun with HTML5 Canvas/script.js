// set canvas size to match window and is 2d
const canvas = document.getElementById('draw')
const context = canvas.getContext('2d')
canvas.width = window.innerWidth
canvas.height = window.innerHeight

// set stroke styling, join and cap make it a smooth continuous line
context.strokeStyle = '#BADA55'
context.lineJoin = 'round'
context.lineCap = 'round'
context.lineWidth = 1
context.globalCompositeOperation = 'overlay'

// set variables drawing variables
let isDrawing = false
let lastX = 0
let lastY = 0
let hue = 0
let lineGrow = true

function draw(event) {
	if (!isDrawing) {
		return
	}

	context.strokeStyle = `hsl(${hue}, 100%, 65%)` // update stroke color
	context.beginPath()
	// start from
	context.moveTo(lastX, lastY)
	// go to
	context.lineTo(event.offsetX, event.offsetY)
	context.stroke()
	// update last coordinates
	console.log(event.offsetX, event.offsetY)
	lastX = event.offsetX
	lastY = event.offsetY

	// increase hue value
	hue++
	hue = hue % 360
	console.log(`hue: ${hue}`)

	// logic to change lineWidth growth
	if (context.lineWidth >= 100 || context.lineWidth <= 1) {
		lineGrow = !lineGrow // flip lineGrow boolean
	}
	if (lineGrow) {
		context.lineWidth += 3
	} else {
		context.lineWidth -= 3
	}
}

// update isDrawing and last coordinates on mouse down
canvas.addEventListener('mousedown', (event) => {
	isDrawing = true
	lineGrow = true
	// update last coordinates
	lastX = event.offsetX
	lastY = event.offsetY
	context.lineWidth = 1
})
// run draw function when on mousemove
canvas.addEventListener('mousemove', draw)
// turn off drawing ability on mouseup or mouseout
canvas.addEventListener('mouseup', () => (isDrawing = false))
canvas.addEventListener('mouseout', () => (isDrawing = false))
