// Learn cc.Class:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/class.html
//  - [English] http://docs.cocos2d-x.org/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://docs.cocos2d-x.org/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] https://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html
var com = require('./Global')
cc.Class({
    extends: cc.Component,

    properties: {
        bg_image: {
            default: null,
            type: cc.Sprite
        },
        text: {
            default: null,
            type: cc.RichText
        },
        bg_dengmi: {
            default: null,
            type: cc.Sprite
        }
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        // 移动灯谜位置
        var dengmimoveTo = cc.moveTo(2,cc.p(582.822,270.178))
        // 移动背景图位置
        var bg_imgmoveTo = cc.moveTo(2,cc.p(408.074,390.131))
        // this.bg_dengmi.node.opacity = 0
        this.bg_dengmi.node.runAction(dengmimoveTo)
        this.bg_image.node.runAction(bg_imgmoveTo)

        // 文字透明度展示
        this.text.node.opacity = 0
        var fadeTo = cc.fadeTo(0.2,200)
        // this.text.node.runAction(fadeTo)
        var delayTime = cc.delayTime(1.8)
        var seq1 = cc.sequence([delayTime,fadeTo])
        this.text.node.runAction(seq1)
        var dengmilits = [
            {
                'question':'谜面：一声归去（打一北京地名）',
                'answer': '故宫'
            },
            {
                'question':'谜面：故宫（打一现代作家名）',
                'answer': '老舍'
            },
            {
                'question':'谜面：故宫复弄弦 (猜一成语)',
                'answer': '老调重弹'
            },
            {
                'question':'谜面：昔日紫禁城 （打一《三国演义》人名）',
                'answer': '陈宫'
            },
            {
                'question':'紫薇徘徊皇宫外 （打一成语）',
                'answer': '格格不入'
            },
        ]
        var mychoice = com.choice - 1
        this.text.string = '<color=#000000> ' + dengmilits[mychoice].question + ' </c>'
    },

    start () {

    },

    // update (dt) {},
});
