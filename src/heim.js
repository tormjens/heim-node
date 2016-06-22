// Import all modules
import Config from './config'
import Providers from './providers'
import Devices from './devices'
import Sensors from './sensors'
import Log from './log'
import sockets from './sockets'
import server from './server'

// Welcome message!
Log('Welcome Heim!');

// Let the console know we're working
Log('Initializing all modules...');

// Namespaced
var Heim = {};

// Instances
Heim.Config = new Config(Heim);
Heim.Log = Log;
Heim.Devices = new Devices(Heim);
Heim.Sensors = new Sensors(Heim);
Heim.Providers = new Providers(Heim);

// Create server and sockets
var server = server(Heim);
var sockets = sockets(server, Heim);

module.exports = Heim;

