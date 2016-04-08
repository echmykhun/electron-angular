'use strict';
module.exports = ['vk', '$location', '$scope', '$q', 'moment', '$state', function (vk, $location, $scope, $q, moment, $state) {

    if (!vk.settings.token) {
        $state.go('not-authorised');
        return;
    }

    const self = this;
    self.isProcessingMessages = true;
    vk.api.messages.getDialogs({count: 100})
        .then(dialogs => {
            let dialogsGetUser = [];
            dialogs.items.forEach(dialog => {
                dialogsGetUser.push(
                    vk.api.users.get({user_ids: [dialog.message.user_id], fields: 'photo_50,photo_100'})
                        .then(users => {
                            dialog.user = users[0];
                            return dialog;
                        })
                );
            });


            return $q.all(dialogsGetUser);
        })
        .then(dialogs => {
            self.isProcessingMessages = false;
            self.dialogs = dialogs;
            $scope.$apply();
        })
        .catch(err=> console.log(err));

    return this;


}];