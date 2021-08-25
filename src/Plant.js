class Plant {
	constructor() {
		this.water = 0;
		this.soil = 0;
		this.light = 0;
	}

	feed() {
		this.soil++
	}

	giveLight() {
		this.light++
	}
}

const hydrate = (plant) => {
	return {
		...plant,
		water: (plant.water || 0) + 1
	}
}

const feed = (plant) => {
	return {
		...plant,
		soil: (plant.soil || 0) + 1
	}
}

const giveLight = (plant) => {
	return {
		...plant,
		light: (plant.light || 0) + 1
	}
}