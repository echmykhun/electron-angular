(function () {
    'use strict';

    const path = require('path');
    global.__base = path.resolve('.');
    global.__scripts = path.resolve(`${__base}/scripts`);
    const serviceRegister = require(`${__scripts}/serviceRegister`);


    angular.module('app', [
            'ngRoute',
            'ngMaterial',
            'ngAnimate'
        ])
        .config(['$routeProvider', function ($routeProvider) {
            $routeProvider.when('/', {
                templateUrl: __scripts + '/login/login.html',
                controller: 'loginController',
                controllerAs: '_ctrl'
            });
            $routeProvider.otherwise({redirectTo: '/'});
        }
        ]);

    angular.module('app').service('config', [function () {
        return require('config');
    }]);
    angular.module('app').service('vk', ['config', function (config) {
        const vk = new (require('vk-io'))(config);
        vk.setting(config.get('vk'));
        return vk;
    }]);
    angular.module('app').service('loginService', ['vk', loginService]);
    function loginService(vk) {
    }
    angular.module('app').controller('loginController', ['loginService', loginController]);
    function loginController(loginService) {
    }


})();