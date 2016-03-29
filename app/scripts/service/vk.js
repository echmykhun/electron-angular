(function () {
    "use strict";

    angular.module('app').service('vk', ['config', function () {
        const vk = new (require('vk-io'))(config);
        vk.setting(config.get('vk'));
        return vk;
    }]);


});