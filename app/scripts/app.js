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

})();