var Hook = (function () {

    function Hook(positionX, positionY) {

        this.topPositionY = positionY;
        this.positionX = positionX;
        this.positionY = positionY;

        this.width = 10;
        this.heigth = 20;

        this.hookSpeedX = 5;
        this.hookSpeedY = 50;

        this.fishes = [];

        GameModel.getInstance().doc.addEventListener("mousedown", ()=> {
            this.isMouseDown = true
        }, false);
        GameModel.getInstance().doc.addEventListener("mouseup", ()=> {
            this.isMouseDown = false
        }, false);

    }

    Hook.prototype.draw = function (cameraX, cameraY) {

        var ctx = GameModel.getInstance().ctx;

        ctx.beginPath();
        ctx.rect(this.positionX - this.width / 2, this.positionY - this.heigth - cameraY, this.width, this.heigth);
        ctx.fillStyle = "#ff0000";
        ctx.fill();
        ctx.closePath();

        this.drawFishes(ctx, cameraY);

    };

    Hook.prototype.addFish = function () {
        this.fishes.push({
            width: 20,
            height: 40,
            color: "#346503"
        })
    };

    Hook.prototype.drawFishes = function (ctx, cameraY) {
        if (!this.fishes.length)return;
        var fish = this.fishes[this.fishes.length - 1];

        ctx.beginPath();
        ctx.rect((this.positionX - fish.width / 2), this.positionY - cameraY, fish.width, fish.height);
        ctx.fillStyle = fish.color;
        ctx.fill();
        ctx.closePath();
    };

    Hook.prototype.update = function (deltaTime, boatPositionX) {
        var isHookInSea = (this.positionY - this.heigth / 2) > GameModel.getInstance().seaPositionY;

        if (isHookInSea) {
            this.positionX += (boatPositionX - this.positionX) * (this.hookSpeedX * deltaTime);
        }
        else {
            this.positionX = boatPositionX;
        }

        if (this.isMouseDown) {
            this.positionY += this.hookSpeedY * deltaTime;
        } else {
            if (this.positionY > this.topPositionY) {
                this.positionY -= this.hookSpeedY * deltaTime;
            }
            else {
                this.positionY = this.topPositionY;
            }
        }
    };
    return Hook;
}());