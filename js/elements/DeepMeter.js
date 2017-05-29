var DeepMeter = (function () {
    function DeepMeter() {
        this.previousDepth = 0;
        this.ctx = GameModel.getInstance().ctx;

    }

    var arrowX = 5;
    var arrowY = 10;
    var arrowWidth = 5;
    var arrowBodyHeight = 15;
    var arrowHeight = 10;

    DeepMeter.prototype.update = function () {

        var currentDepth = GameModel.getInstance().deep;

        if (this.previousDepth > 0) {
            if (this.previousDepth >= currentDepth) {
                this.drawArrowUp();
            } else {
                this.drawArrowDown();
            }
        }

        this.ctx.beginPath();
        this.ctx.fillStyle = "#000000";
        this.ctx.textBaseline = 'top';
        this.ctx.textAlign = 'left';
        this.ctx.font = '30px "Indie Flower"';
        this.ctx.fillText("Depth: " + currentDepth.toString(), 15, 0);
        this.previousDepth = currentDepth;
        this.ctx.closePath();
    };

    DeepMeter.prototype.drawArrowDown = function () {

        this.ctx.beginPath();
        this.ctx.fillStyle = "#ff0000";
        this.ctx.fillRect(arrowX, arrowY, arrowWidth, arrowBodyHeight);
        this.ctx.moveTo(0, arrowBodyHeight + arrowY);
        this.ctx.lineTo(arrowWidth * 3, arrowBodyHeight + arrowY);
        this.ctx.lineTo(arrowWidth * 3 / 2, arrowBodyHeight + arrowHeight + arrowY);
        this.ctx.lineTo(0, arrowBodyHeight + arrowY);
        this.ctx.fill();
        this.ctx.closePath();

    };

    DeepMeter.prototype.drawArrowUp = function () {

        this.ctx.beginPath();
        this.ctx.fillStyle = "#ff0000";
        this.ctx.fillRect(arrowX, arrowY + arrowHeight, arrowWidth, arrowBodyHeight);
        this.ctx.moveTo(0, arrowY + arrowHeight);
        this.ctx.lineTo(arrowWidth * 3, arrowY + arrowHeight);
        this.ctx.lineTo(arrowWidth * 3 / 2, arrowHeight);
        this.ctx.lineTo(0, arrowY + arrowHeight);
        this.ctx.fill();
        this.ctx.closePath();
    };

    return DeepMeter;

})();