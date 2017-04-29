var Fish = (function () {

    var colors = ["#A52A2A", "#FF7F50", "#00008B", "#006400", "#FF1493", "#C71585", "#FF4500"];

    function Fish(x, y) {
        this.localX = x;
        this.localY = y;

        this.canvasWidth = GameModel.getInstance().ctx.canvas.width;

        this.width = 40;
        this.height = 20;

        this.angle = 0;

        this.modeDirection = 1;
        this.speed = Utils.randomRangeInt(45, 80);

        this.color = colors[Math.floor(Math.random() * colors.length)];
    }

    Fish.prototype.draw = function () {
        var ctx = GameModel.getInstance().ctx;
        ctx.beginPath();
        ctx.rect(this.x - this.width / 2, this.y - this.height / 2, this.width, this.height);
        ctx.closePath();
        ctx.fillStyle = this.color;
        ctx.fill();


        this.drawVertices();

    };

    Fish.prototype.drawVertices = function () {
        var ctx = GameModel.getInstance().ctx;

        var topLeft = {x: this.x - this.width / 2, y: this.y - this.height / 2};
        var topRight = {x: this.x + this.width / 2, y: this.y - this.height / 2};
        var bottomLeft = {x: this.x - this.width / 2, y: this.y + this.height / 2};
        var bottomRight = {x: this.x + this.width / 2, y: this.y + this.height / 2};

        var pivot = {x: this.x, y: this.y};

        topLeft = Utils.rotatePoint(pivot, topLeft, this.angle);
        topRight = Utils.rotatePoint(pivot, topRight, this.angle);
        bottomLeft = Utils.rotatePoint(pivot, bottomLeft, this.angle);
        bottomRight = Utils.rotatePoint(pivot, bottomRight, this.angle);

        ctx.beginPath();
        ctx.rect(topLeft.x, topLeft.y, 5, 5);
        ctx.rect(topRight.x, topRight.y, 5, 5);
        ctx.rect(bottomLeft.x, bottomLeft.y, 5, 5);
        ctx.rect(bottomRight.x, bottomRight.y, 5, 5);
        ctx.closePath();
        ctx.fillStyle = "#ffffff";
        ctx.fill();
    };

    Fish.prototype.update = function (deltaTime, cameraY) {
        this.localX += this.speed * deltaTime * this.modeDirection;

        if (this.localX < 0 || this.localX >= this.canvasWidth) {

            this.speed = Utils.randomRangeInt(45, 80);
            this.modeDirection *= -1;

            this.setPositionInBounds();
        }

        this.x = this.localX;
        this.y = this.localY - cameraY;
        this.draw();

    };

    Fish.prototype.setPositionInBounds = function () {
        if (this.localX < 0) {
            this.localX = 0;
        }
        if (this.localX > this.canvasWidth) {
            this.localX = this.canvasWidth;
        }
    }
    return Fish;
})();