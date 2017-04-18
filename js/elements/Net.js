var Net = (function () {

    function Net(positionX, positionY) {

        this.topPositionY = positionY;
        this.positionX = positionX;
        this.positionY = positionY;

        this.width = 30;
        this.heigth = 30;

        this.netSpeedX = 5;
        this.netSpeedY = 50;

        GameModel.getInstance().doc.addEventListener("mousedown", ()=> {
            this.isMouseDown = true
        }, false);
        GameModel.getInstance().doc.addEventListener("mouseup", ()=> {
            this.isMouseDown = false
        }, false);
    }

    Net.prototype.draw = function (cameraX, cameraY) {

        var ctx = GameModel.getInstance().ctx;

        ctx.beginPath();
        ctx.rect(this.positionX - this.width / 2, this.positionY - this.heigth - cameraY, this.width, this.heigth);
        ctx.fillStyle = "#ff0000";
        ctx.fill();
        ctx.closePath();

    };
    Net.prototype.update = function (deltaTime, boatPositionX) {
        var isNetInSea = (this.positionY - this.heigth / 2) > GameModel.getInstance().seaPositionY;

        if (isNetInSea) {
            this.positionX += (boatPositionX - this.positionX) * (this.netSpeedX * deltaTime);
        }
        else {
            this.positionX = boatPositionX;
        }

        if (this.isMouseDown) {
            this.positionY += this.netSpeedY * deltaTime;
        } else {
            if (this.positionY > this.topPositionY) {
                this.positionY -= this.netSpeedY * deltaTime;
            }
            else {
                this.positionY = this.topPositionY;
            }
        }
    };
    return Net;
}());