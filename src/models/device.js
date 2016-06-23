/**
 * Heim – Device implementation
 * @author Tor Morten Jensen <tormorten@tormorten.no>
 */
import _ from 'lodash'

export default class Device {
	constructor(device, heim) {
		this.heim = heim;
		this.device = this.setup(device);
	}
	setup(device) {
		this.heim.Log('Added a device with name "'+ device.name +'"');
		var defaults = {
			supports: ['on', 'off'],
			ready: false,
			name: '',
			id: '',
			value: 0,
			vendor: 'Heim',
			type: 'switch'
		};
		return _.merge(defaults, device);
	}
	turnOn() {
		if(this.supports('on')) {
			this.device.on();
			this.heim.Log('Device "'+ this.device.id +'" from '+ this.device.provider +' turned on');
		}
	}
	turnOff() {
		if(this.supports('off')) {
			this.device.on();
			this.heim.Log('Device "'+ this.device.id +'" from '+ this.device.provider +' turned off');
		}
	}
	setLevel(level) {
		if(this.supports('level')) {
			this.device.level(level);
			this.heim.Log('Device "'+ this.device.id +'" from '+ this.device.provider +' set to '+ level +'%');
		}
	}
	supports(func) {
		var supports = _.find(this.device.supports, function(o) {
			return o === func;
		});
		return !!supports;
	}
}
