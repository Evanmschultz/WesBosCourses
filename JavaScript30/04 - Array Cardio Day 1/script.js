// Get your shorts on - this is an array workout!
// ## Array Cardio Day 1

// Some data we can work with

const inventors = [
	{ first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
	{ first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
	{ first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
	{ first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
	{ first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
	{ first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
	{ first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
	{ first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
	{ first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
	{ first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
	{ first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
	{ first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
]

const people = [
	'Bernhard, Sandra',
	'Bethea, Erin',
	'Becker, Carl',
	'Bentsen, Lloyd',
	'Beckett, Samuel',
	'Blake, William',
	'Berger, Ric',
	'Beddoes, Mick',
	'Beethoven, Ludwig',
	'Belloc, Hilaire',
	'Begin, Menachem',
	'Bellow, Saul',
	'Benchley, Robert',
	'Blair, Robert',
	'Benenson, Peter',
	'Benjamin, Walter',
	'Berlin, Irving',
	'Benn, Tony',
	'Benson, Leana',
	'Bent, Silas',
	'Berle, Milton',
	'Berry, Halle',
	'Biko, Steve',
	'Beck, Walter',
	'Bergman, Ingmar',
	'Black, Elk',
	'Berio, Luciano',
	'Berne, Eric',
	'Berra, Yogi',
	'Berry, Wendell',
	'Bevan, Aneurin',
	'Ben-Gurion, David',
	'Bevel, Ken',
	'Biden, Joseph',
	'Bennington, Chester',
	'Bierce, Ambrose',
	'Billings, Josh',
	'Birrell, Augustine',
	'Blair, Tony',
	'Beecher, Henry',
	'Biondo, Frank'
]

// Array.prototype.filter()
// 1. Filter the list of inventors for those who were born in the 1500's
const fifteenHundreds = inventors.filter(function (inventor) {
	// if (inventor.year >= 1500 && inventor.year < 1600) {
	// 	return true // return true keeps it according to the filter method
	// }

	// written to return truthiness
	return inventor.year >= 1500 && inventor.year < 1600
})
const arrowFifteenHundreds = inventors.filter(
	// uses arrow function and in line
	(inventor) => inventor.year >= 1500 && inventor.year < 1600
)
console.table(fifteenHundreds)
console.table(arrowFifteenHundreds)

// Array.prototype.map()
// 2. Give us an array of the inventors first and last names
const fullNames = inventors.map(function (inventor) {
	return [inventor.first, inventor.last]
})
const arrowFullNames = inventors.map(
	(inventor) => `${inventor.first} ${inventor.last}`
)
console.table(fullNames)
console.log(arrowFullNames)

// Array.prototype.sort()
// 3. Sort the inventors by birthdate, oldest to youngest
const byBirthdate = inventors.sort(function (firstPerson, secondPerson) {
	// can only compare two items at a time, return 1 or -1 for function to work
	if (firstPerson.year > secondPerson.year) {
		return 1
	} else {
		return -1
	}
})
const ternaryByBirthdate = inventors.sort((inventor1, inventor2) =>
	// use a ternary operator
	inventor1.year > inventor2.year ? 1 : -1
)
console.table(byBirthdate)
console.table(ternaryByBirthdate)

// Array.prototype.reduce()
// 4. How many years did all the inventors live all together?
const totalYears = inventors.reduce((total, inventor) => {
	console.log(
		`temp total: ${total} years, inventor lived: ${
			inventor.passed - inventor.year
		} years`
	)
	return total + (inventor.passed - inventor.year)
}, 0) // set initial value to 0
console.log(`\nthe combined lived years of all the inventors: ${totalYears}\n`)

// 5. Sort the inventors by years lived
const byOldest = inventors.sort(function (inventor1, inventor2) {
	const firstInventor = inventor1.passed - inventor1.year
	const secondInventor = inventor2.passed - inventor2.year

	return secondInventor > firstInventor ? 1 : -1 // ternary: if s > f return 1 else return -1
})
console.table(byOldest)

// 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
// https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris
// const category = document.querySelector('.mw-category')

// // because it is a node list, the prototype doesn't include map(), convert to array with a spread operator
// const links = [...category.querySelectorAll('a')]

// const withDe = links
// 	.map((link) => link.textContent)
// 	.filter((streetName) => streetName.includes(' de ')) // add white space to exclude 'des' or '-de-'

// 7. sort Exercise
// Sort the people alphabetically by last name
const peopleByLastName = people.sort(function (firstPerson, secondPerson) {
	// can just use aLast and bLast without array, kept to remind myself you can set variables with array like this
	const [aLast, aFirst] = firstPerson.split(', ')
	const [bLast, bFirst] = secondPerson.split(', ')

	return aLast > bLast ? 1 : -1
})
console.table(peopleByLastName)

// 8. Reduce Exercise
// Sum up the instances of each of these
const data = [
	'car',
	'car',
	'truck',
	'truck',
	'bike',
	'walk',
	'car',
	'van',
	'bike',
	'walk',
	'car',
	'van',
	'car',
	'truck'
]

const transportation = data.reduce((object, item) => {
	if (!object[item]) {
		object[item] = 0
	}
	object[item]++
	return object
}, {})
console.table(transportation)
