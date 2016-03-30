'use strict';
module.exports = function (vk, $location, $scope, $q) {

    const self = this;

    self.login = function(){
        //
        //alert(`email: ${ self.email}`);
        //alert(`password: ${self.password}`)

        vk.setting({
            email: self.email,
            pass: self.password
        });

        vk.auth()
            .then((token) => {
                console.log(token);
                $location.path('/messages');
                $scope.$apply();
            })


    }


};