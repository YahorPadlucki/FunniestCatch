var Camera = (function () {

    function Camera() {
        this.positionX = 0;
        this.positionY = 0;

        this.canvasHeight = GameModel.getInstance().ctx.canvas.height;
    }

    Camera.prototype.update = function (deltaTime) {
        if (this.objectToFollow) {
            this.positionY = this.objectToFollow.positionY - this.canvasHeight / 2;

            if (this.positionY < 0) {
                this.positionY = 0;
            }
        }
    };

    Camera.prototype.setObjectToFollow = function (objectToFollow) {
        this.objectToFollow = objectToFollow;
    };

    return Camera;

}());