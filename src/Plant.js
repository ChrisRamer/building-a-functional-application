class Plant {
	constructor() {
		this.water = 0;
		this.soil = 0;
		this.light = 0;
	}
}

const changeState = (prop) => {
	return (value) => {
		return (state) => ({
			...state,
			[prop]: (state[prop] || 0) + value
		})
	}
}

// Usage example 1
const feed = changeState("soil");
const hydrate = changeState("water");
const giveLight = changeState("light");

feed(5)(plant)

// Usage example 2
const blueFood = changeState("soil")(5)
const greenFood = changeState("soil")(10)
const yuckyFood = changeState("soil")(-5)

blueFood(plant)