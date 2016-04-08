'use strict';
module.exports = app => {

    app.config(['$locationProvider', 'stateHelperProvider', '$urlRouterProvider', function ($locationProvider, stateHelperProvider, $urlRouterProvider) {

        $locationProvider.html5Mode({
            enabled: true,
            requireBase: false
        }).hashPrefix('!');
        stateHelperProvider
            .state({
                url: '/',
                name: 'start',
                templateUrl: __templates + '/start.html',
                controller: 'startController as _ctrl'
            })
            .state({
                url: '/messages',
                name: 'messages',
                templateUrl: __templates + '/messages.html',
                controller: 'messagesController',
                controllerAs: '_ctrl'
            })
            .state({
                url: '/dialog',
                name: 'dialog',
                templateUrl: __templates + '/dialog.html',
                controller: 'dialogController',
                controllerAs: '_ctrl',
                params: {
                    user: null
                }
            })
            .state({
                url: '/music',
                name: 'music',
                templateUrl: __templates + '/music.html',
                controller: 'musicController',
                controllerAs: '_ctrl',
                params: {
                    user: null
                }
            })
            .state({
                url: '/not-authorised',
                name: 'not-authorised',
                template: '<h1>You should login first</h1>'
            });

        $urlRouterProvider.otherwise('/');

    }]);


    return app;
};