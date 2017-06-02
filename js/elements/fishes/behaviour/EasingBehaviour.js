EasingBehaviour = (function () {

    function EasingBehaviour(x, y) {
        DefaultMove.apply(this, arguments);

        this.initX = x;
        this.iteration = 0;
        this.angle = 180 * Math.PI / 180;

        this.goalX = this.canvasWidth - this.initX;
        this.totalIterations = 300 * this.goalX / this.canvasWidth + 1;


    }

    EasingBehaviour.prototype.move = function (deltaTime) {

        this.x = Utils.easeInQuad(this.iteration, this.initX, this.goalX, this.totalIterations);

        this.iteration += deltaTime * 100;
        if (this.x < 0 || this.x > this.canvasWidth) {
            this.setPositionInBounds();
        }

    };

    EasingBehaviour.prototype.setPositionInBounds = function () {
        this.iteration = 0;
        this.totalIterations = 500;

        if (this.x < 0) {
            this.x = 0;
            this.initX = 0;
            this.goalX = this.canvasWidth;
            this.angle = 180 * Math.PI / 180;

        }
        if (this.x > this.canvasWidth) {
            this.angle = 0;

            this.x = this.canvasWidth;
            this.initX = this.canvasWidth;
            this.goalX = -this.canvasWidth;

        }
    };


    return EasingBehaviour;

}());
