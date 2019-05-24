// Learn cc.Class:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/class.html
//  - [English] http://docs.cocos2d-x.org/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://docs.cocos2d-x.org/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] https://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html
// var {AStar, Grid, Node} = require("AStar")
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
        // this.node.on('mousedown', function(e) {
        //     var mynode = e.target
        //     // var choode = mynode.getComponent(cc.Sprite)
        //     if(mynode === this.light1.node) {
        //         com.choice = 1
        //         this.node.runAction(cc.sequence(cc.fadeOut(1.0),cc.callFunc(
        //             function(){
        //                 cc.director.loadScene("detail_scene")
        //             })))
        //     }
        // },this)
        this.light1.node.on(cc.Node.EventType.TOUCH_START, function(e) {
            com.choice = 1
            this.node.runAction(cc.sequence(cc.fadeOut(1.0),cc.callFunc(
                function(){
                    cc.director.loadScene("detail_scene")
                })))
        },this)
        this.light2.node.on(cc.Node.EventType.TOUCH_START, function(e) {
            com.choice = 2
            this.node.runAction(cc.sequence(cc.fadeOut(1.0),cc.callFunc(
                function(){
                    cc.director.loadScene("detail_scene")
                })))
        },this)
        this.light3.node.on(cc.Node.EventType.TOUCH_START, function(e) {
            com.choice = 3
            this.node.runAction(cc.sequence(cc.fadeOut(1.0),cc.callFunc(
                function(){
                    cc.director.loadScene("detail_scene")
                })))
        },this)
        this.light4.node.on(cc.Node.EventType.TOUCH_START, function(e) {
            com.choice = 4
            this.node.runAction(cc.sequence(cc.fadeOut(1.0),cc.callFunc(
                function(){
                    cc.director.loadScene("detail_scene")
                })))
        },this)
        this.light5.node.on(cc.Node.EventType.TOUCH_START, function(e) {
            com.choice = 5
            this.node.runAction(cc.sequence(cc.fadeOut(1.0),cc.callFunc(
                function(){
                    cc.director.loadScene("detail_scene")
                })))
        },this)
        this.light6.node.on(cc.Node.EventType.TOUCH_START, function(e) {
            com.choice = 6
            this.node.runAction(cc.sequence(cc.fadeOut(1.0),cc.callFunc(
                function(){
                    cc.director.loadScene("detail_scene")
                })))
        },this)
    },

    onTouchEnd: function(e) {
        // let x = e.touch._point.x
        // let y = e.touch._point.y
        // if(this.light1){
        //     cc.director.loadScene("detail_scene")
        // }
    },
    start () {

    },

    // update (dt) {},
});
