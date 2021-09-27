const user = {
	name: 'Bob',
	age: 34,
	id: 1,
	address: {
		city: 'Odessa',
		country: 'Ukraine'
	},
	books: [
		{
			name: 'red one',
			id: 35,
			author: {
				name: 'Some Author',
				id: 277
			},
			tags: ['history', 'roman']
		}
	]
};
console.log(user);

function recursion(obj) {
	let nextObj = {};
	for (let key in obj) {
		if ((typeof obj[key] !== "object")) {
			nextObj[key] = obj[key]
		} else {
			if (Array.isArray(obj[key])) {
				nextObj[key] = [recursion(obj[key], nextObj)]
			} else {
				nextObj[key] = recursion(obj[key], nextObj)
			};

		};

	};
	return nextObj
};

let copy = recursion(user);
console.log(copy)

copy.books.name = "dssv"
console.log(user)