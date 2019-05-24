cc.Class({
    extends: cc.Component,

    properties: {
        label: {
            default: null,
            type: cc.Label
        },
        // defaults, set visually when attaching this script to the Canvas
        text: 'Hello, World!'
    },

    // use this for initialization
    onLoad: function () {
    },

    // called every frame
    update: function (dt) {

    },

    toStart: function () {
        cc.director.loadScene("game_start")
    },
    toPic: function () {
        cc.director.loadScene("pic_scene")
    },

});
