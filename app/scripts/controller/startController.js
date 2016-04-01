'use strict';
module.exports = ['vk', '$location', '$scope', '$q', '$state', function (vk, $location, $scope, $q, $state) {

    const self = this;
    self.isLoggingIn = false;

    self.login = function () {

        self.isLoggingIn = true;

        vk.setting({
            email: self.email,
            pass: self.password
        });

        vk.auth()
            .then(() => {
                return vk.api.users.get({fields: 'photo_50,photo_100'});
            })
            .then(currentUser => {
                vk.currentUser = currentUser[0];
                console.log(currentUser[0]);
                $state.go('messages');
            })
            .catch(err=> console.log(err));
    };

    return this;


}];