AccelerationMove = (function () {

    AccelerationMove.prototype = Object.create(DefaultMove.prototype);

    function AccelerationMove(x, y) {
        DefaultMove.apply(this, arguments);

        this.initAcc = 1.03;
        this.acc = this.initAcc;

    }

    AccelerationMove.prototype.move = function (deltaTime) {
        if (this.x < 0 || this.x > this.canvasWidth) {

            this.speed = Utils.randomRangeInt(45, 80);
            this.moveDirection *= -1;
            this.acc = this.initAcc;

            this.setPositionInBounds();
        }
        this.acc += 0.01;
        this.x += this.speed * deltaTime * this.moveDirection * this.acc;

       
    };

    return AccelerationMove

}());