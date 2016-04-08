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

            return vk.longpoll()
                .then(() => {
                    // При запуске longpoll продолжаете делать что то
                    vk.on('longpoll.message',(msg) => {
                        // self.messages.items.push(msg);
                        vk.api.messages.getById({message_ids: [msg.id]}).then(messages => {
                            self.messages.items.unshift(messages.items[0]);
                            console.log(messages.items[0]);
                            $scope.$apply();
                        });
                    });
                });

        })
        .catch(err => console.log(err));


    self.sendMessage = (msg, targetUser) => {
        vk.api.messages.send({message: msg, user_id: targetUser.id});
    };



    return this;


}];