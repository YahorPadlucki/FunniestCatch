var Hook = (function () {

    function Hook(x, y) {

        this.topPositionY = y;
        this.localX = x;
        this.localY = y;
        this.boatX = this.localX;

        this.width = 5;
        this.height = 15;

        this.hookSpeedX = 5;
        this.hookSpeedY = 50;

        this.cameraY=0;


        this.fishes = [];

        this.device =  GameModel.getInstance().device;

        GameModel.getInstance().doc.addEventListener(this.device.event.down, ()=> {
            if (this.goDown !== false) {
                this.goDown = true
                var event = new Event(GameEvent.CLOSE_POPUP);
                dispatchEvent(event);
            }
        }, false);

    }

    Hook.prototype.draw = function () {

        var ctx = GameModel.getInstance().ctx;
        var diameter = 5;
        var lineWidth =1;

        ctx.beginPath();
        ctx.rect(this.x , this.y - this.height, this.width/2, this.height);
        ctx.fillStyle = "#ff0000";
        ctx.fill();
        ctx.closePath();
        ctx.beginPath();
        ctx.arc(this.x  ,this.y-diameter,diameter,0.5*Math.PI,0,true);
        ctx.fill();
        ctx.closePath();

        ctx.beginPath();
        ctx.moveTo(this.boatX,  this.topPositionY-this.cameraY- this.height);
        ctx.lineTo(this.x+lineWidth, this.y-this.height);
        ctx.lineWidth = lineWidth;
        ctx.stroke();
        ctx.closePath();

        this.drawFishes();

    };

    Hook.prototype.addFish = function (fish) {
        fish.angle = 1.5708;
        this.fishes.push(fish);
        this.goDown = false;

        GameModel.getInstance().score++;
        var event = new Event(GameEvent.FISH_CAUGHT);
        dispatchEvent(event);
    };

    Hook.prototype.drawFishes = function () {

        if (!this.fishes.length)return;
        var fish = this.fishes[this.fishes.length - 1];
        fish.x = this.x;
        fish.y = this.y;
        DrawUtils.drawFish(fish);

    };

    Hook.prototype.update = function (deltaTime, boatPositionX, cameraY) {
        this.boatX = boatPositionX;
        var isHookInSea = (this.localY - this.height / 2) > GameModel.getInstance().seaPositionY;

        if (isHookInSea) {
            this.localX += (boatPositionX - this.localX) * (this.hookSpeedX * deltaTime);
        }
        else {
            this.localX = boatPositionX;
        }

        if (this.goDown) {
            this.localY += this.hookSpeedY * deltaTime;
        } else {
            if (this.localY > this.topPositionY) {
                this.localY -= this.hookSpeedY * deltaTime;
            }
            else {

                if(this.goDown==false){
                    var event = new Event(GameEvent.HOOK_ON_TOP);
                    dispatchEvent(event);
                }
                this.localY = this.topPositionY;
                this.fishes = [];
                this.goDown = null;

            }
        }

        this.x = this.localX;
        this.y = this.localY - cameraY;

        this.cameraY = cameraY;

        GameModel.getInstance().deep = (this.y + cameraY - GameModel.getInstance().seaPositionY).toFixed();
    };
    return Hook;
}());