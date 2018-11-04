const axios = require('axios');
const request = require('request');
const http = require('http');
const express = require("express");
const path = require("path");
const url = require("url");
const bodyParser = require('body-parser');

const port = process.env.PORT || 2000;
const app = express();

//app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/',function(req, res) {
	console.log("execnbjh")
	var query = url.parse(req.url, true).query;
	console.log(query);
    console.log({
        body: {
			headers: {
			  Accept: "application/json",
			  Origin: "http://static-hw.xvideos.com/v3/img/skins/default/favicon.ico?time=1541259508"
		   },
			method: 'GET'
		  },
        params: req.params,
        query: req.query
    });


    getPostData(url)
    .then(body => {
		console.log(body);
		var options = {
			uri: query.url,
			headers: {
				Origin: "http://static-hw.xvideos.com/v3/img/skins/default/favicon.ico?time=1541259508"
			 },
			method: 'GET'
		};

		var proxyCallback = (proxyErr, proxyRes, proxyBody) => {
			if (proxyErr) {
				console.log(proxyErr);
				res.statusCode = 500;
				res.write(proxyErr);
			} else {
				console.log(proxyRes.statusCode);
				res.writeHead(proxyRes.statusCode, proxyRes.headers);
				res.write(proxyBody);
			}
			res.end();
		};
		request(options, proxyCallback);
	})
    .catch(err => {
        console.log('we caught the error: ', { message: err.message, err });
    });
}).listen(port, () => console.log(`App started at: ${port}`) );

function getPostData(request) {
    console.log('Here, we can use this url to evalute it:  ', { url });
    return new Promise((resolve, reject) => {
		var post = '';
				//post = JSON.parse(body);
					resolve(post);
				
			})
	}