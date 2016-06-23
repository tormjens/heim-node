/**
 * Heim – Devices implementation
 * @author Tor Morten Jensen <tormorten@tormorten.no>
 */
import Device from './models/device'
import _ from 'lodash'

export default class Devices {
	constructor(heim) {
		this.heim = heim;
		this.devices = [];
	}
	register(info) {
		var device = new Device(info, this.heim);
		this.devices.push(device);
	}
	find(id, provider) {
		return _.find(this.devices, function(o) {
			return o.device.id === id && o.device.provider == provider;
		});
	}
	updateOrRegister(device) {
		var deviceFound = this.find(device.id, device.provider);
		if(deviceFound) {
			_.each(device, function(value, key) {
				deviceFound[key] = value;
			});
		} else {
			this.register(device);
		}
	}
	publish() {
		var publish = [];
		_.each(this.devices, function(device) {
			publish.push({
				id: device.device.id,
				name: device.device.name,
				provider: device.device.provider,
				supports: device.device.supports
			});
		});
		return publish;
	}
}

