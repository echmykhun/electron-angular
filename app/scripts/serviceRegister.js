'use strict';
const angular = require('angular');
const ngRoute = require('angular-route');
const ngAnimate = require('angular-animate');
const ngAria = require('angular-aria');
const ngMaterial = require('angular-material');

const loginService = require(`${__scripts}/login/loginService`);
const loginController = require(`${__scripts}/login/loginController`);

module.exports = {
    angular,
    ngRoute,
    ngAnimate,
    ngAria,
    ngMaterial,
    loginService,
    loginController
};
