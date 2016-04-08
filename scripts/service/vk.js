'use strict';


module.exports = function (config) {

    const vk = new (require('vk-io'))(config);

    vk.setting(config.get('vk'));


    return vk;
};

