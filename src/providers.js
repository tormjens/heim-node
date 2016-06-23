/**
 * Heim – Providers (plugins) implementation
 * @author Tor Morten Jensen <tormorten@tormorten.no>
 */

import _ from 'lodash'

export default class Providers {
	constructor(heim) {
		this.heim = heim;
		this.localProviders = ['database'];
		this.addProviders();
	}
	addProviders() {
		var that = this;
		// Get all providers from the config
		var providers = this.heim.Config.providers;

		_.each(providers, function(options, provider) {
			// Check if the provider is a local one
			var localProvider = _.find(that.localProviders, function(o) {
				return o === provider;
			});
			// Require paths
			if(localProvider) {
				that.local(provider, options);
			} else {
				that.plugin(provider, options);
			}
		});
	}
	local(provider, options) {
		require('./providers/'+provider+'/provider')(this.heim, options);
	}
	plugin(provider, options) {
		try {
			require('heim-plugin-'+provider)(this.heim, options);
		} catch(e) {
			this.heim.Log('error', 'The plugin "'+provider+'" is not installed.')
		}
	}
}

