'use strict';

const loader = require('./loader');

loader.getArticles()
    .then(function (articles) {
        console.log(JSON.stringify(articles, null, 4));
    })
    .catch(function () {
        console.error('Error. Please try again later.');
    });
