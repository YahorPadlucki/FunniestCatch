var Popup = (function () {
    function Popup() {
        this.ctx = GameModel.getInstance().ctx;
        this.width = 100;
        this.height = 100;
        this.x = this.ctx.canvas.width / 2;
        this.y = this.ctx.canvas.height / 2;

        this.closeBtn = new Button(this.x, this.y + 40);

    }

    Popup.prototype.show = function () {
        this.isVisisble = true;
    };


    Popup.prototype.draw = function () {
        this.ctx.fillStyle = "0x000000";
        this.ctx.fillRect(this.x - this.width / 2, this.y - this.height / 2, this.width, this.height);
        this.closeBtn.draw();
    };
    return Popup;
}());