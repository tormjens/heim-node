module.exports = function(Heim, options) {

	Heim.Devices.register({
		id: 'db-0',
		name: 'Database Switch 1',
		provider: 'database',
		supports: ['on', 'off'],
		on: function() {
		},
		off: function() {
		}
	});

};
