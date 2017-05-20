var Button = (function () {
    function Button(x, y) {
        GameModel.getInstance().doc.addEventListener('click', this.onMouseClicked.bind(this), false);
        this.ctx = GameModel.getInstance().ctx;
        this.width = 50;
        this.height = 50;
        this.x = x- this.width/2;
        this.y = y - this.height;
    }

    Button.prototype.onMouseClicked = function (evt) {
        var mousePos = Utils.getMousePos(this.ctx.canvas, evt);
        if (Utils.isInside(mousePos, this)) {
            var event = new Event(GameEvent.CLOSE_POPUP);
            dispatchEvent(event);
            console.log('clicked inside rect');
        } else {
            console.log('clicked outside rect');
        }
    };

    Button.prototype.draw = function () {
        this.ctx.beginPath();
        this.ctx.fillStyle = "red";
        this.ctx.fillRect(this.x, this.y, this.width, this.height);

        this.ctx.fillStyle = "#ffffff";
        this.ctx.textBaseline = 'middle';
        this.ctx.textAlign  = 'center';
        this.ctx.font = '30px "Indie Flower"';
        this.ctx.fillText("OK", this.x+this.width/2, this.y+this.width/2);
        this.ctx.closePath();

    };

    return Button;
}());