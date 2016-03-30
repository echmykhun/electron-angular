'use strict';
module.exports = app => {

    app.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {

        $locationProvider.html5Mode({
            enabled: true,
            requireBase: false
        }).hashPrefix('*');

        $routeProvider.when('/', {
            templateUrl: __templates + '/start/start.html',
            controller: 'startController',
            controllerAs: '_ctrl'
        });
        $routeProvider.when('/messages', {
            template: '<h1>messages comming soon</h1>'
            //templateUrl: __templates + '/messages/messages.html',
            //controller: 'messagesController',
            //controllerAs: '_ctrl'
        });
        $routeProvider.otherwise({redirectTo: '/'});
    }
    ]);


    return app;
};