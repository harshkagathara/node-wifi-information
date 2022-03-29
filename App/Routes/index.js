const express = require('express');
const router = express.Router();
const wifiModel = require('../model');
router.get('/', async function(req, res, next) {
	const scanList = await wifiModel.scanList();
	const currentWifiData = await wifiModel.currentWifiData();
	console.log("done");
	let date_ob = new Date();
	let date = ("0" + date_ob.getDate()).slice(-2);
	let month = ("0" + (date_ob.getMonth() + 1)).slice(-2);
	let year = date_ob.getFullYear();
	let hours = date_ob.getHours();
	let minutes = date_ob.getMinutes();
	let seconds = date_ob.getSeconds();
	console.log(year + "-" + month + "-" + date + " " + hours + ":" + minutes + ":" + seconds);
	res.render('index', {
		scanList: scanList,
		currentWifiData: currentWifiData,
		year: year,
		month: month,
		date: date,
		hours: hours,
		minutes: minutes,
		seconds: seconds,
	});
});
module.exports = router;