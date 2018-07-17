'use strict';
const moment = require('moment');
const http = require('http');
const {responseBuilder} = require('./modules/responsebuilder');
const {httpcaller} = require('./modules/httpcaller');

module.exports.hello = (event, context, callback) => {
    let response = responseBuilder();
    httpcaller().then(res => {
        response.body = res;
        return callback(null, response);
    }).catch(err => callback(null, err));
};
