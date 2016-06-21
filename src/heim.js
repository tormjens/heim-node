var Providers = require('./providers');
var Config = require('./config');
var Devices = require('./devices');
var Sensors = require('./sensors');

// Namespaced
var Heim = {};

// Instances
Heim.Config = new Config();
Heim.Devices = new Devices();
Heim.Sensors = new Sensors();
Heim.Providers = new Providers(Heim);

module.exports = Heim;

