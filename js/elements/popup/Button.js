var Button = (function () {
    function Button(x, y) {
        GameModel.getInstance().doc.addEventListener('click', this.onMouseClicked.bind(this), false);
        this.ctx = GameModel.getInstance().ctx;
        this.width = 10;
        this.height = 10;
        this.x = x;
        this.y = y;
    }

    Button.prototype.onMouseClicked = function (evt) {
        var mousePos = Utils.getMousePos(this.ctx.canvas, evt);
        if (Utils.isInside(mousePos, this)) {
            console.log('clicked inside rect');
        } else {
            console.log('clicked outside rect');
        }
    };

    Button.prototype.draw = function () {
        this.ctx.fillStyle = "red";
        this.ctx.fillRect(this.x, this.y, this.width, this.height);

    };

    return Button;
}());