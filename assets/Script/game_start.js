var com = require('./Global')
cc.Class({
    extends: cc.Component,

    properties: {
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start () {

    },
    toYuanming: function () {
        com.chooseIndex = 2
        cc.director.loadScene("game_yuanming")
    },
    toGugong: function () {
        com.chooseIndex = 1
        cc.director.loadScene("game_gugong")
    },
    toChangan: function () {
        com.chooseIndex = 3
        cc.director.loadScene("game_changan")
    }

    // update (dt) {},
});
