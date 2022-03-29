const wifi = require('node-wifi');
class WifiModel {
	async scanList() {
		let promise = new Promise(async function(resolve, reject) {
			wifi.init({
				iface: null
			});
			wifi.scan((error, networks) => {
				if(error) {
					console.log(error);
				} else {
					resolve(networks);
				}
			});
		});
		return promise;
	}
	async currentWifiData() {
		let promise = new Promise(async function(resolve, reject) {
			wifi.init({
				iface: null
			});
			wifi.getCurrentConnections((error, currentConnections) => {
				if(error) {
					console.log(error);
				} else {
					resolve(currentConnections);
				}
			});
		});
		return promise;
	}
}
let wifiModel = new WifiModel();
module.exports = wifiModel;