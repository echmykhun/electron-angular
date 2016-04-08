(function () {
    'use strict';

    const path = require('path');
    global.__base = __dirname;
    global.__scripts = `${__base}/scripts`;
    global.__templates = `${__base}/templates`;

    const angular = require('angular');
    //const ngRoute = require('angular-route');
    const ngAnimate = require('angular-animate');
    //const ngAria = require('angular-aria');
    const ngMaterial = require('angular-material');
    const ngUiRouter = require('angular-ui-router');
    const ngUiRouterHelper = require('angular-ui-router.statehelper');

    const angularSoundManager = require(`${__scripts}/lib/angular-soundmanager2.js`);
    const serviceRegister = require(`${__scripts}/serviceRegister`);

    let app = angular.module('app', [
        //'ngRoute',
        'ngMaterial',
        'ngAnimate',
        'ui.router',
        'ui.router.stateHelper',
        'angularSoundManager'
    ]);

    app = require(`${__scripts}/appConfig`)(app);
    app = require(`${__scripts}/serviceRegister`)(app);
    app = require(`${__scripts}/controllerRegister`)(app);

})();