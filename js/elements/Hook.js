var Hook = (function () {

    function Hook(x, y) {

        this.topPositionY = y;
        this.localX = x;
        this.localY = y;

        this.width = 10;
        this.height = 15;

        this.hookSpeedX = 5;
        this.hookSpeedY = 50;


        this.fishes = [];

        GameModel.getInstance().doc.addEventListener("mousedown", ()=> {
            if (this.isMouseDown !== false) {
                this.isMouseDown = true
            }
        }, false);
        GameModel.getInstance().doc.addEventListener("mouseup", ()=> {
            this.isMouseDown = false
        }, false);

    }

    Hook.prototype.draw = function () {

        var ctx = GameModel.getInstance().ctx;

        ctx.beginPath();
        ctx.rect(this.x - this.width / 2, this.y - this.height, this.width, this.height);
        ctx.fillStyle = "#ff0000";
        ctx.fill();
        ctx.closePath();

        this.drawFishes();

    };

    Hook.prototype.addFish = function (fish) {
        fish.angle = 1.5708;
        this.fishes.push(fish)
        this.isMouseDown = false
        var event = document.createEvent('Event');
        event.initEvent(GameEvent.FISH_CAUGHT, true, true);
        document.dispatchEvent(event);
    };

    Hook.prototype.drawFishes = function () {

        if (!this.fishes.length)return;
        var fish = this.fishes[this.fishes.length - 1];
        fish.x = this.x;
        fish.y = this.y;
        DrawUtils.drawFish(fish);

    };

    Hook.prototype.update = function (deltaTime, boatPositionX, cameraY) {
        var isHookInSea = (this.localY - this.height / 2) > GameModel.getInstance().seaPositionY;

        if (isHookInSea) {
            this.localX += (boatPositionX - this.localX) * (this.hookSpeedX * deltaTime);
        }
        else {
            this.localX = boatPositionX;
        }

        if (this.isMouseDown) {
            this.localY += this.hookSpeedY * deltaTime;
        } else {
            if (this.localY > this.topPositionY) {
                this.localY -= this.hookSpeedY * deltaTime;
            }
            else {
                this.localY = this.topPositionY;
                this.fishes = [];
                this.isMouseDown = null;
            }
        }

        this.x = this.localX;
        this.y = this.localY - cameraY;

        GameModel.getInstance().deep = (this.y + cameraY - GameModel.getInstance().seaPositionY).toFixed();
    };
    return Hook;
}());