'use strict';
module.exports = ['vk', '$location', '$scope', '$q', '$stateParams', function (vk, $location, $scope, $q, $stateParams) {

    const self = this;

    self.isProcessingMessages = true;

    self.oponentUser = $stateParams.user;
    self.currentUser = vk.currentUser;

    console.log(vk.currentUser);


    vk.api.messages.getHistory({count: 20, user_id: self.oponentUser.id})
        .then(history => {
            self.messages = history;
            console.log(history);
            self.isProcessingMessages = false;
            $scope.$apply();
        })
        .catch(err => console.log(err));

    return this;


}];