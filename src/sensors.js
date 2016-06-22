
export default class Sensors {
	constructor(heim) {
		this.heim = heim;
		this.sensors = [];
	}
	register(sensor) {
		this.sensors.push(sensor);
	}
	readValue(sensor) {

	}
	pollValue(sensor) {

	}
}

