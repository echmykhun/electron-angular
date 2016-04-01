'use strict';
module.exports = app => {

    app.service('config', [function () {
        return require('config');
    }]);

    app.service('moment', [function () {
        return require('moment');
    }]);

    app.service('vk', ['config', require(`${__scripts}/service/vk`)]);

    return app;

};