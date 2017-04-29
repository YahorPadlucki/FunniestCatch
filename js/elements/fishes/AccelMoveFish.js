var AccMoveFish = (function () {
    function AccMoveFish(x, y) {
        Fish.apply(this, arguments);
        this.initAcc = 1.03;
        this.acc = this.initAcc;
    }

    AccMoveFish.prototype = Object.create(Fish.prototype);


    AccMoveFish.prototype.update = function (deltaTime, cameraY) {

        if (this.localX < 0 || this.localX > this.canvasWidth) {

            this.speed = Utils.randomRangeInt(45, 80);
            this.modeDirection *= -1;
            this.acc = this.initAcc;

            this.setPositionInBounds();
        }
        this.acc += 0.01;
        this.localX += this.speed * deltaTime * this.modeDirection * this.acc;

        this.x = this.localX;
        this.y = this.localY - cameraY;
        this.draw();
    };

    AccMoveFish.prototype.getX=function (k) {

        return k * k * k;

    };

    return AccMoveFish
}());