// ## Array Cardio Day 2

const people = [
	{ name: 'Wes', year: 1988 },
	{ name: 'Kait', year: 1986 },
	{ name: 'Irv', year: 1970 },
	{ name: 'Lux', year: 2015 }
]

const comments = [
	{ text: 'Love this!', id: 523423 },
	{ text: 'Super good', id: 823423 },
	{ text: 'You are the best', id: 2039842 },
	{ text: 'Ramen is my fav food ever', id: 123523 },
	{ text: 'Nice Nice Nice!', id: 542328 }
]

// Some and Every Checks
// Array.prototype.some() // is at least one person 19 or older?
const isAdult = people.some(function (person) {
	const currentYear = new Date().getFullYear()

	if (currentYear - person.year >= 19) {
		return true
	}
})
console.log({ isAdult }) // wrap curly brackets it shows the name of the variable and the value

const isAdultSimple = people.some((person) => {
	const currentYear = new Date().getFullYear()

	return currentYear - person.year >= 19
})
console.log(isAdultSimple)

// Array.prototype.every() // is everyone 19 or older?
const areAllAdults = people.every((person) => {
	const currentYear = new Date().getFullYear()

	return currentYear - person.year >= 19
})
console.log(areAllAdults)

// Array.prototype.find()
// Find is like filter, but instead returns just the one you are looking for
// find the comment with the ID of 823423
/* 
    find is like filter, but only returns the first item that satisfies the criteria instead of an array of all of them 
    */
const comment = comments.find((comment) => {
	if (comment.id === 823423) return true
})
console.log(comment)

const commentSimple = comments.find((comment) => comment.id === 823423)
console.log(commentSimple)

// Array.prototype.findIndex()
// Find the comment with this ID
// delete the comment with the ID of 823423
const index = comments.findIndex((comment) => comment.id === 823423)
console.log(index)

// console.log(comments.splice(index, 1))
// console.log(comments)
const newComments = [...comments.slice(0, index), ...comments.slice(index + 1)]
console.table(newComments)
