const checkboxes = document.querySelectorAll('.inbox input[type="checkbox"]')

let lastChecked

function handleCheck(event) {
	// check if the shift key was down AND check that they are not unchecking it
	let inBetween = false
	if (event.shiftKey) {
		// loop every checkbox
		checkboxes.forEach((checkbox) => {
			console.log(checkbox)

			if (checkbox === this || checkbox === lastChecked) {
				/* makes inBetween true at the first checked checkbox from top to bottom and returns to
                    false when it comes to the last checked checkbox from top to bottom on the page */
				inBetween = !inBetween
			}

			if (inBetween) {
				// adds logic to check or uncheck all the boxes in-between depending on last state
				if (this.checked) {
					checkbox.checked = true
				} else {
					checkbox.checked = false
					lastChecked.checked = false // adds the lastChecked to the uncheck operation
				}
			}
		})
	}
	lastChecked = this
}

checkboxes.forEach((checkbox) =>
	checkbox.addEventListener('click', handleCheck)
)
