// Learn cc.Class:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/class.html
//  - [English] http://docs.cocos2d-x.org/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://docs.cocos2d-x.org/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] https://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html
import THREE from './three'
cc.Class({
    extends: cc.Component,

    properties: {
        lautum1: {
            default: null,
            type: cc.MeshRenderer
        },
        lautum2: {
            default: null,
            type: cc.Button
        },
        textureRender: {
            default: null,
            type: cc.Texture2D
        },
        scene: {
            default: null
        },
        camera: {
            default: null
        },
        renderer: {
            default: null
        },
        cube: {
            default: null
        }
        // foo: {
        //     // ATTRIBUTES:
        //     default: null,        // The default value will be used only when the component attaching
        //                           // to a node for the first time
        //     type: cc.SpriteFrame, // optional, default is typeof default
        //     serializable: true,   // optional, default is true
        // },
        // bar: {
        //     get () {
        //         return this._bar;
        //     },
        //     set (value) {
        //         this._bar = value;
        //     }
        // },
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        this.createScene()
    },

    createScene() {
        this.scene = THREE.scene()
        this.camera = THREE
    },
    start () {

    },

    // update (dt) {},
});
