cc.Class({
    extends: cc.Component,

    properties: {
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start () {

    },
    toYuanming: function () {
        cc.director.loadScene("game_yuanming")
    },
    toGugong: function () {
        cc.director.loadScene("game_gugong")
    },
    toChangan: function () {
        cc.director.loadScene("game_changan")
    }

    // update (dt) {},
});
