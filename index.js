'use strict';

const fetch = require('node-fetch');
const AWS = require('aws-sdk'); // eslint-disable-line import/no-extraneous-dependencies

const s3 = new AWS.S3();

exports.handler = (event, context, callback) => {
    Promise.all(event.photos.map(photo =>
        fetch(photo.url)
            .then((response) => {
                if (response.ok) {
                    return response;
                }
                return Promise.reject(new Error(
                    `Failed to fetch ${response.url}: ${response.status} ${response.statusText}`));
            })
            .then(response => response.buffer())
            .then(buffer => (
                s3.putObject({
                    Bucket: photo.bucket,
                    Key: photo.key,
                    Body: buffer,
                }).promise()
            ))
    )).catch(function (err) {
        console.log('A promise failed to resolve', err);
    }).then(v => callback(null, v), callback);
};
