// We'll use lodash here
import _ from 'lodash'

// Load the main config file
var config = require('../heim.json');

export default class Config {
	constructor(heim) {
		this.heim = heim;
		var that = this;

		// merge the config with our default values
		config = _.merge(config, {
			'providers': {}
		});

		// add the databaseprovider
		config.providers['database'] = {};

		// add each config key as a class property
		_.each(config, function(value, key) {
			that[key] = value;
		});

	}
}

