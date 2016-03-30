(function () {
    'use strict';

    const path = require('path');
    global.__base = path.resolve('.');
    global.__scripts = path.resolve(`${__base}/scripts`);
    global.__templates = path.resolve(`${__base}/templates`);

    const angular = require('angular');
    const ngRoute = require('angular-route');
    const ngAnimate = require('angular-animate');
    //const ngAria = require('angular-aria');
    const ngMaterial = require('angular-material');
    const ngUiRouter = require('angular-ui-router');

    const serviceRegister = require(`${__scripts}/serviceRegister`);

    let app = angular.module('app', [
        'ngRoute',
        'ngMaterial',
        'ngAnimate'
        //'ui.router'
    ]);

    app = require(`${__scripts}/appConfig`)(app);
    app = require(`${__scripts}/serviceRegister`)(app);
    app = require(`${__scripts}/controllerRegister`)(app);

})();