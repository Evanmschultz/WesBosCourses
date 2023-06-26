const endpoint =
	'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json'

const cities = []

// make a fetch request from the endpoint
const promise = fetch(endpoint)
	// convert what is returned to JSON, blob is an arbitrary name for the unorganized object returned
	.then((blob) => blob.json())
	/* 	push data to the cities array. using the spread operator `...` pushes only the current index instead 
		of the whole array each time */
	.then((data) => cities.push(...data))

function findMatches(wordToMatch, cities) {
	return cities.filter((place) => {
		// find if city or state matches search
		const regex = new RegExp(wordToMatch, 'gi') // g: global, i: case insensitive
		return place.city.match(regex) || place.state.match(regex)
	})
}

function numberWithCommas(num) {
	return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
}

function displayMatches() {
	const matchArray = findMatches(this.value, cities)

	const html = matchArray
		.map((place) => {
			/*
				regex means 'regular expression in JS and is used for searching for a 'pattern' match
				the `new` statement is just creating a new instance of a regex. it creates a new object and 
				calls the constructor function `RegExp` to initialize it.
			*/
			const regex = new RegExp(this.value, 'gi')

			// cityName and stateName add the highlighting CSS class to the keyword input into the search bar
			const cityName = place.city.replace(
				regex,
				`<span class="hl">${this.value}</span>`
			)
			const stateName = place.state.replace(
				regex,
				`<span class="hl">${this.value}</span>`
			)

			// returns html with new styling to be displayed in the results
			return `
				<li>
					<span class="name">${cityName}, ${stateName}</span>
					<span class="name">${numberWithCommas(place.population)}</span>
				</li>
					`
		})
		.join('')

	suggestions.innerHTML = html
}

// suggestions can be down here because the functions using them aren't called until below
const searchInput = document.querySelector('.search')
const suggestions = document.querySelector('.suggestions')

// event listeners to run filter when strings are input in the search field
searchInput.addEventListener('change', displayMatches)
searchInput.addEventListener('keyup', displayMatches)
