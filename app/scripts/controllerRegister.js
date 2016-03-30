'use strict';
module.exports = app => {

    //app.controller('loginController', ['vk', loginController]);
    //function loginController(vk) {
    //}


    app.controller('startController', ['vk', '$location', '$scope', '$q', require(`${__scripts}/start/startController`)]);


    return app;
};