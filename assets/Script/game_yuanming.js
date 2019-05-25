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
        },
        light7: {
            default: null,
            type: cc.Sprite
        },
        light8: {
            default: null,
            type: cc.Sprite
        }
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        this.nodePos = this.node.getPosition();
        //触摸监听(this.node.parent是屏幕)
        //想达到按住节点，节点才能移动的效果，将监听函数注册到 this.node 上，去掉  .parent 即可
        this.node.parent.on(cc.Node.EventType.TOUCH_MOVE, this.onTouchMove, this);
        this.node.parent.on(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this);
        this.node.parent.on(cc.Node.EventType.TOUCH_CANCEL, this.onTouchCancel, this);
        
        this.cards = this.node._children

        // 灯笼触摸事件
        this.light1.node.on(cc.Node.EventType.TOUCH_START, function(e) {
            this.node.runAction(cc.sequence(cc.fadeOut(1.0),cc.callFunc(
                function(){
                    cc.director.loadScene("detail_scene")
                })))
        },this)
        this.light2.node.on(cc.Node.EventType.TOUCH_START, function(e) {
            this.node.runAction(cc.sequence(cc.fadeOut(1.0),cc.callFunc(
                function(){
                    cc.director.loadScene("detail_scene")
                })))
        },this)
        this.light3.node.on(cc.Node.EventType.TOUCH_START, function(e) {
            this.node.runAction(cc.sequence(cc.fadeOut(1.0),cc.callFunc(
                function(){
                    cc.director.loadScene("detail_scene")
                })))
        },this)
        this.light4.node.on(cc.Node.EventType.TOUCH_START, function(e) {
            this.node.runAction(cc.sequence(cc.fadeOut(1.0),cc.callFunc(
                function(){
                    cc.director.loadScene("detail_scene")
                })))
        },this)
        this.light5.node.on(cc.Node.EventType.TOUCH_START, function(e) {
            this.node.runAction(cc.sequence(cc.fadeOut(1.0),cc.callFunc(
                function(){
                    cc.director.loadScene("detail_scene")
                })))
        },this)
        this.light6.node.on(cc.Node.EventType.TOUCH_START, function(e) {
            this.node.runAction(cc.sequence(cc.fadeOut(1.0),cc.callFunc(
                function(){
                    cc.director.loadScene("detail_scene")
                })))
        },this)
        this.light7.node.on(cc.Node.EventType.TOUCH_START, function(e) {
            this.node.runAction(cc.sequence(cc.fadeOut(1.0),cc.callFunc(
                function(){
                    cc.director.loadScene("detail_scene")
                })))
        },this)
        this.light8.node.on(cc.Node.EventType.TOUCH_START, function(e) {
            this.node.runAction(cc.sequence(cc.fadeOut(1.0),cc.callFunc(
                function(){
                    cc.director.loadScene("detail_scene")
                })))
        },this)


        for(this.i = 1;this.i<=9;this.i++){
            // console.log(this.i)
            // console.log(this.cards[1])
            // this.cards[this.i].on(cc.Node.EventType.TOUCH_START, function (event) {
            //     // console.log("1")
            // });
        }
        // console.log(this.node)
        // while(this.x+this.i*80<340) {
        //     var node = new cc.Node('Sprite');
        //     var sp = node.addComponent(cc.Sprite);
        
        //     sp.spriteFrame = this.sprite;
            
        //     node.parent = this.node;
        //     // var self = this.btn;
        //     // console.log(this.node.children);
        //     node.x = this.x+this.i*80;
        //     node.y = this.y;
        //     node.width = this.width
        //     node.height = this.height
        //     cc.loader.loadRes("test assets/light1", cc.SpriteFrame, function (err, spriteFrame) {
        //         node.getComponent(cc.Sprite).spriteFrame = spriteFrame;
        //         console.log(node.getComponent(cc.Sprite).node)
        //     });
        //     // console.log(node)
        //     this.i++;
        // }
    },
    onTouchMove (event) {
        var self = this;
        var touches = event.getTouches();
        //触摸刚开始的位置
        var oldPos = self.node.parent.convertToNodeSpaceAR(touches[0].getStartLocation());
        //触摸时不断变更的位置
        var newPos = self.node.parent.convertToNodeSpaceAR(touches[0].getLocation());
        
        //var subPos = cc.pSub(oldPos,newPos); 1.X版本是cc.pSub
 
        var subPos = oldPos.sub(newPos); // 2.X版本是 p1.sub(p2);
 
        self.node.x = self.nodePos.x - subPos.x;
        self.node.y = self.nodePos.y - subPos.y;
        
        // 控制节点移不出屏幕; 
        var minX = -360; //最小X坐标；
        var maxX = Math.abs(minX);
        var minY = 0; //最小Y坐标；
        var maxY = Math.abs(minY);
        var nPos = self.node.getPosition(); //节点实时坐标；
 
        if (nPos.x < minX) {
            nPos.x = minX;
        };
        if (nPos.x > maxX) {
            nPos.x = maxX;
        };
        if (nPos.y < minY) {
            nPos.y = minY;
        };
        if (nPos.y > maxY) {
            nPos.y = maxY;
        };
        self.node.setPosition(nPos);
    },
    onTouchEnd () {
        this.nodePos = this.node.getPosition(); //获取触摸结束之后的node坐标；
    },
    onTouchCancel: function () {
        this.nodePos = this.node.getPosition(); //获取触摸结束之后的node坐标；
    },

    start () {
    },
    return_back () {
        cc.director.loadScene("game_start")
    }

    // update (dt) {},
});
