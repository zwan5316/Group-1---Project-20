var pbiurl = require("../models/powerbi")

module.exports.start = function(req, res) {
    console.log('Dashboard page')
	res.render('../views/start.ejs', {url: pbiurl})
}









