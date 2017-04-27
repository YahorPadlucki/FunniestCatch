var Camera = (function () {

    function Camera() {
        this.localX = 0;
        this.localY = 0;

        this.canvasHeight = GameModel.getInstance().ctx.canvas.height;
    }

    Camera.prototype.update = function (deltaTime) {
        if (this.objectToFollow) {
            this.localY = this.objectToFollow.localY - this.canvasHeight / 2;

            if (this.localY < 0) {
                this.localY = 0;
            }
        }
    };

    Camera.prototype.setObjectToFollow = function (objectToFollow) {
        this.objectToFollow = objectToFollow;
    };

    return Camera;

}());