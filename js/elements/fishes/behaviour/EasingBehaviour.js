EasingBehaviour = (function () {

    function EasingBehaviour(x, y) {
        this.canvasWidth = GameModel.getInstance().ctx.canvas.width;

        this.x = x;
        this.y = y;

        this.initX = x;
        this.goalX =  this.canvasWidth-this.initX;

        this.modeDirection = 1;
        this.speed = Utils.randomRangeInt(45, 80);
        this.angle = 0;
        this.totalIterations = 500;
        this.iteration = 0;

    }

    EasingBehaviour.prototype.move = function (deltaTime) {
        // this.x += this.speed * deltaTime * this.modeDirection;

        // this.x += easeOutCubic(this.x/this.canvasWidth);

        this.x = easeOutCubic(this.iteration, this.initX, this.goalX, this.totalIterations);

        this.iteration++;
// console.log(easingValue)
        if (this.x < 0 || this.x >= this.canvasWidth) {

            this.speed = Utils.randomRangeInt(45, 80);
            this.modeDirection *= -1;

            this.setPositionInBounds();
        }


    };

    function easeOutCubic(currentIteration, startValue, changeInValue, totalIterations) {
        return changeInValue * (Math.pow(currentIteration / totalIterations - 1, 3) + 1) + startValue;
    }

    EasingBehaviour.prototype.setPositionInBounds = function () {
        this.iteration=0;

        if (this.x < 0) {
            this.x = 0;

            this.initX = 0;
            this.goalX =  this.canvasWidth;
        }
        if (this.x > this.canvasWidth) {
            this.x = this.canvasWidth;
            this.initX = this.canvasWidth;
            this.goalX = 0;

        }
    };

    return EasingBehaviour;

}());