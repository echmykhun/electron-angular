'use strict';
module.exports = app => {
    const controllers = require('require-dir')(`${__scripts}/controller`);

    for (let controllerName in controllers) {
        app.controller(controllerName, controllers[controllerName]);
    }

    return app;
};