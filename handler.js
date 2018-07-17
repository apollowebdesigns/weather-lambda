'use strict';
const moment = require('moment');
const http = require('http');
const {responseBuilder} = require('./modules/responsebuilder');

module.exports.hello = (event, context, callback) => {
  http.get('http://datapoint.metoffice.gov.uk/public/data/val/wxfcs/all/json/3844?res=3hourly&key=529a85d0-eefa-4c97-af2c-7efd733d4f56', resp => {
        let data = '';
        
        resp.on('data', (chunk) => {
            data += chunk;
        });
        
        resp.on('end', () => {
            let forecastData = JSON.parse(data).SiteRep.DV.Location.Period;
            moment().format()
            let result = [];
            forecastData.forEach(item => {
                let forecastItem = {}
                forecastItem.date = moment(item.value).format('YYYY-MM-DD');
                let temperatures = [];
                item.Rep.forEach(forecastElement => {
                    temperatures.push(parseInt(forecastElement['T']));
                })
                forecastItem.temperature = temperatures;
                let totalTemp = 0;
                temperatures.forEach(temp => {
                    totalTemp += temp
                });
                let av = totalTemp / temperatures.length;
                forecastItem.averageTemperature = av;
                temperatures.sort((a, b) => b - a);
                forecastItem.highestTemperature = temperatures[0];
                result.push(forecastItem);
            })
            let response = responseBuilder(event);
            response.body = JSON.stringify(result)
            callback(null, response);
        });
        
        }).on("error", (err) => {
            console.log("Error: " + err.message);
        });
};
