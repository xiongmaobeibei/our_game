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
        },
        inputMes: {
            default: null,
            type: cc.EditBox
        }
        // commit_btn: {
        //     default: null,
        //     type: cc.Button
        // },
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        // 移动背景图位置
         var bg_imgmoveTo = cc.moveTo(2,cc.p(408.074,390.131))
         this.bg_image.node.runAction(bg_imgmoveTo)
        // 移动灯谜位置透明度
        var dengmimoveTo = cc.moveTo(2,cc.p(582.822,270.178))
        this.bg_dengmi.node.opacity = 0
        var fadedeng = cc.fadeTo(0.2,200)
        this.bg_dengmi.node.runAction(dengmimoveTo)
        this.bg_dengmi.node.runAction(fadedeng)

        // 文字透明度展示
        this.text.node.opacity = 0
        var fadeTo = cc.fadeTo(0.2,200)
        var delayTime = cc.delayTime(1.8)
        var seq1 = cc.sequence([delayTime,fadeTo])
        this.text.node.runAction(seq1)

        // 输入框展示
        this.inputMes.node.opacity = 0
        var infadeTo = cc.fadeTo(0.2,200)
        var indelayTime = cc.delayTime(1.8)
        var seq2 = cc.sequence([indelayTime,infadeTo])
        this.inputMes.node.runAction(seq2)

        // 关卡判断
        switch (com.chooseIndex) {
            case 1: 
                this.dengmilits = [
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
                        'question':'谜面：昔日紫禁城 <br/>（打一《三国演义》人名）',
                        'answer': '陈宫'
                    },
                    {
                        'question':'谜面：紫薇徘徊皇宫外 （打一成语）',
                        'answer': '格格不入'
                    },
                    {
                        'question':'谜面：汉家宫殿入云端 （打一现代人名）',
                        'answer': '高君宇'
                    }
                ]
                break
            case 2:
                this.dengmilits = [
                    {
                        'question':'谜面：十五的月亮悬庭前（打一北京地名)',
                        'answer': '圆明园'
                    },
                    {
                        'question':'黄河解冻（打一省区名）',
                        'answer': '江苏',
                        'tip': '“江苏”名称是在清康熙时组建江苏省时，取区域南部两个府即江宁府（今南京市）之“江”字和苏州府之“苏”字合成省名，江苏是《尚书·禹贡》所载九州中的徐州、扬州中的一部分'
                    },
                    {
                        'question':'谜面：野渡无人舟自横（安徽名胜）',
                        'answer': '逍遥津',
                        'tip': '逍遥津是三国时期古战场，在1700多年的历史长河中，历经沧桑。宋代乾道年间，合肥城扩大，逍遥津圈入城内。明代官僚窦子偁将逍遥津占为私有，改名 “窦家池”。清代康熙年间，逍遥津被王姓翰林所据，易名“斗鸭池”。光绪年间，易主为龚照瑗、龚心钊私家花园。'
                    },
                    {
                        'question':'谜面：苦谏乾隆下江南（打一成语）',
                        'answer': '力争上游',
                        'tip': '谜底中的“上”，别指“皇上”'
                    },
                    {
                        'question':'谜面：电影配音（打一河北名胜）',
                        'answer': '一片云',
                        'tip': '为“乾隆三十六景”第十八景'
                    },
                    {
                        'question':'谜面：若得教诲当尽孝<br/>（打一《雍正王朝》人物）',
                        'answer': '诺敏'
                    },
                    {
                        'question':'谜面：颐和园毁一半（打一字）',
                        'answer': '顽',
                        'tip': '“颐”和“园”字各毁一半，余下“页元”，合为“顽”字'
                    },
                    {
                        'question':'谜面：翻山越岭觅牛仔 （打一成语）',
                        'answer': '跳梁小丑',
                        'tip': '“跳梁”原指跳跃之意，这里别解为上上下下；“丑”在中国十二生肖中代表牛，“牛仔”即小丑'
                    }
                ]
                break
            case 3:
                this.dengmilits = [
                    {
                        'question':'谜面：家住长安（打一成语）',
                        'answer': '在所难免',
                        'tip': '“所”别解为“住所”，“难”别解为“灾难”'
                    },
                    {
                        'question':'谜面：长安一片月 （打一重庆名胜）',
                        'answer': '白帝城'
                    },
                    {
                        'question':'谜面：春城无处不飞花 （打一俗语，四字）',
                        'answer': '谢天谢地',
                        'tip': '谜面出自唐诗《寒食》，原文为“春城无处不飞花，寒食东风御柳斜。日暮汉宫传蜡烛，轻烟散入五侯家。”前两句写的是白昼风光，描写了整个长安柳絮飞舞，落红无数的迷人春景和皇宫园林中的风光；后两句则是写夜晚景象，生动地画出了一幅夜晚走马传烛图，使人如见蜡烛之光'
                    },
                    {
                        'question':'谜面：夕贬潮阳路八千（打西厢记一句）',
                        'answer': '日近长安远'
                    },
                    {
                        'question':'谜面：长安美女 （打一词牌名）',
                        'answer': '忆秦娥',
                        'tip': '长安的所在地陕西简称“秦”，“娥”义为美女，看到此谜面让人想起“秦娥”                                                                                                                                                                                                                                                                        '
                    },
                    {
                        'question':'谜面：总是抱着旧观念（唐诗目）',
                        'answer': '长安古意'
                    },
                    {
                        'question':'谜面：千里共婵娟 （打唐诗五言）',
                        'answer': '长安一片月'
                    },
                    {
                        'question':'谜面：郭子仪平叛（打一海南地名）',
                        'answer': '定安',
                        'tip': '郭子仪平定了“安史之乱”，收复了长安'
                    },
                    {
                        'question':'谜面：一心中国梦（打五言唐诗一句）',
                        'answer': '总是玉关情',
                        'tip': '长安一片月，万户捣衣声。秋风吹不尽，总是玉关情。何日平胡虏，良人罢远征。--李白《子夜吴歌·秋歌》'                                                                                                                         
                    },
                    {
                        'question':'谜面：永保太平吾心愿 （打一古代著作）',
                        'answer': '长安志'
                    }
                ]
                break
        }
        this.mychoice = com.choice1
        this.text.string = '<color=#000000> ' + this.dengmilits[this.mychoice].question + ' </c>'
        // this.commit_btn.node.on(cc.Node.EventType.TOUCH_START, function(e) {
        //     if(this.inputMes.string === dengmilits[mychoice].answer){
        //         cc.director.loadScene("game_gugong_scene")
        //     }
        // })
    },

    start () {

    },
    clickCommit () {
        if(this.inputMes.string === this.dengmilits[this.mychoice].answer){
            cc.director.loadScene("game_gugong")
        }
    },
    return_back () {
        switch (com.chooseIndex) {
            case 1: 
                cc.director.loadScene("game_gugong") 
                break
            case 2:
                cc.director.loadScene("game_yuanming")
                break
            case 3:
                cc.director.loadScene("game_changan")
        }
        
    }

    // update (dt) {},
});
