const checkboxes = document.querySelectorAll('.inbox input[type="checkbox')
let lastChecked

function handleCheck(event) {
	let inBetween = false

	if (event.shiftKey) {
		checkboxes.forEach((checkbox) => {
			if (checkbox === this || checkbox === lastChecked) {
				inBetween = !inBetween
			}

			if (inBetween) {
				if (this.checked) {
					checkbox.checked = true
				} else {
					checkbox.checked = false
					lastChecked.checked = false
				}
			}
		})
	}
	lastChecked = this
}

checkboxes.forEach((checkbox) =>
	checkbox.addEventListener('click', handleCheck)
)
