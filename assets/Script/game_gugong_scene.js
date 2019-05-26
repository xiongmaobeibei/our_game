var com = require('./Global')
cc.Class({
    extends: cc.Component,

    properties: {
        light1: {
            default: null,
            type: cc.Sprite
        },
        light2: {
            default: null,
            type: cc.Sprite
        },
        light3: {
            default: null,
            type: cc.Sprite
        },
        light4: {
            default: null,
            type: cc.Sprite
        },
        light5: {
            default: null,
            type: cc.Sprite
        },
        light6: {
            default: null,
            type: cc.Sprite
        }
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        this.light1.node.on(cc.Node.EventType.TOUCH_START, function(e) {
            com.choice1 = 1
            this.node.runAction(cc.sequence(cc.fadeOut(1.0),cc.callFunc(
                function(){
                    cc.director.loadScene("detail_scene")
                })))
        },this)
        this.light2.node.on(cc.Node.EventType.TOUCH_START, function(e) {
            com.choice1 = 2
            this.node.runAction(cc.sequence(cc.fadeOut(1.0),cc.callFunc(
                function(){
                    cc.director.loadScene("detail_scene")
                })))
        },this)
        this.light3.node.on(cc.Node.EventType.TOUCH_START, function(e) {
            com.choice1 = 3
            this.node.runAction(cc.sequence(cc.fadeOut(1.0),cc.callFunc(
                function(){
                    cc.director.loadScene("detail_scene")
                })))
        },this)
        this.light4.node.on(cc.Node.EventType.TOUCH_START, function(e) {
            com.choice1 = 4
            this.node.runAction(cc.sequence(cc.fadeOut(1.0),cc.callFunc(
                function(){
                    cc.director.loadScene("detail_scene")
                })))
        },this)
        this.light5.node.on(cc.Node.EventType.TOUCH_START, function(e) {
            com.choice1 = 5
            this.node.runAction(cc.sequence(cc.fadeOut(1.0),cc.callFunc(
                function(){
                    cc.director.loadScene("detail_scene")
                })))
        },this)
        this.light6.node.on(cc.Node.EventType.TOUCH_START, function(e) {
            com.choice1 = 6
            this.node.runAction(cc.sequence(cc.fadeOut(1.0),cc.callFunc(
                function(){
                    cc.director.loadScene("detail_scene")
                })))
        },this)
    },
    start () {

    },
    return_back () {
        cc.director.loadScene("game_start")
    }
    // update (dt) {},
});
