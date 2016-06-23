/**
 * Heim – Sockets implementation
 * @author Tor Morten Jensen <tormorten@tormorten.no>
 */

var socketio = require('socket.io');

module.exports = function(server, Heim) {

	var io = socketio(server);

	io.on('connection', function(socket) {
		Heim.Log('Client (address '+ socket.client.conn.remoteAddress +') connected.');
		socket.emit('devices', Heim.Devices.publish());

		socket.on('device.on', function(device) {
			var device = Heim.Devices.find(device.id, device.provider);
			if(device) {
				device.turnOn();
			}
		});
	});

	Heim.Log('Server listening on http://localhost:3000');

	server.listen(3000);
}
