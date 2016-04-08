'use strict';
module.exports = ['vk', '$location', '$scope', '$q', 'moment', '$state', function (vk, $location, $scope, $q, moment, $state) {

    if (!vk.settings.token) {
        $state.go('not-authorised');
        return;
    }

    const self = this;

    vk.api.audio.get().then(songs => {
        self.songs = songs.items;
        $scope.$apply();
    });

    self.searchMusic = query => {
        vk.api.audio.search({q: query}).then(songs => {
            self.songs = songs.items;
            $scope.$apply();
        });
    };


}];