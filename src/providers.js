
export default class Providers {
	constructor(config) {
		this.config = config;
		this.providers = [];
	}
	register(provider) {
		this.providers.push(provider);
	}
}

