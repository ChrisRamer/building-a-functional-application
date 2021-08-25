class Plant {
	constructor() {
		this.water = 0;
		this.soil = 0;
		this.light = 0;
	}
}

const changeState = (state, prop, value) => ({
	...state,
	[prop]: (state[prop] || 0) + value
})