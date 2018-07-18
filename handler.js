'use strict';
const moment = require('moment');
const http = require('http');
const {responseBuilder} = require('./modules/responsebuilder');
const {httpcaller} = require('./modules/httpcaller');
const AWS = require('aws-sdk');
const documentClient = new AWS.DynamoDB.DocumentClient();

module.exports.hello = (event, context, callback) => {
    const params = {
        TableName : 'ForecastTable',
        Item: {
            date: {
                'done': 'done'
            }
        }
    };
    documentClient.put(params, (err, data) => {
        if (err) console.log(err);
        else console.log(data);
    });
    let response = responseBuilder();
    httpcaller().then(res => {
        response.body = res;
        return callback(null, response);
    }).catch(err => callback(null, err));
};
