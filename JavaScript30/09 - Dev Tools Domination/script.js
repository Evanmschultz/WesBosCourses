const dogs = [
	{ name: 'Snickers', age: 2 },
	{ name: 'hugo', age: 8 }
]

function makeGreen() {
	const p = document.querySelector('p')
	p.style.color = '#BADA55'
	p.style.fontSize = '50px'
}

// Regular
console.log('hello')

// Interpolated
console.log('Hello I am a %s string', '💩') // outdated with template literal

// Styled
console.log(
	'%c I am some great text',
	'background-color: blue; font-size: 30px'
) // use packages like 'chalk' or 'color' to add styling in terminal

// warning!
console.warn('WARNING!')

// Error :|
console.error('ERROR')

// Info
console.info('The sky is blue')

// Testing
const p = document.querySelector('p')
console.assert(p.classList.contains('ouch'), 'that is wrong')

// clearing
console.clear()

// Viewing DOM Elements
console.dir(p)

console.clear()

// Grouping together
dogs.forEach((dog) => {
	console.groupCollapsed(`${dog.name}`)
	console.log(`this is ${dog.name}`)
	console.log(`${dog.name} is ${dog.age} years old`)
	console.groupEnd(`${dog.name}`)
})

// counting
console.count('Evan')
console.count('Evan')
console.count('Evan')
console.count('Sjöfn')

// timing
console.time('fetching data')
fetch('https://api.github.com/users/evanmschultz')
	.then((data) => data.json())
	.then((data) => {
		console.timeEnd('fetching data')
		console.log(data.hasOwnProperty('login'))
	})
