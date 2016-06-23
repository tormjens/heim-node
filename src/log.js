/**
 * Heim – Log implementation
 * @author Tor Morten Jensen <tormorten@tormorten.no>
 */
var colors = require('colors');
var moment = require('moment');
module.exports = function(type, message) {
	// if second argument omitted, assume the first is the message
	if(!message) {
		var message = type;
		var type = 'info';
	}

	// Default console text color is white, with a bold style
	var color = colors.white.bold;

	if(type === 'error') { // Errors are red
		var color = colors.red.bold;
	} else if(type === 'notice') { // Notices are cyan
		var color = colors.cyan.bold;
	} else if(type === 'warning') { // Warnings are yellow
		var color = colors.yellow.bold;
	}

	// Prefix all logs with the current string
	var log = color('Heim ('+ moment().format('DD.MM.YYYY HH:mm:ss') +'): ');

	// add the message (it will be white)
	log += colors.white(message);

	// Log it
	console.log(log);
};
