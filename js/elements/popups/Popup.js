var Popup = (function () {
    function Popup() {
        this.ctx = GameModel.getInstance().ctx;
        this.width = 500;
        this.height = 500;
        this.x = this.ctx.canvas.width / 2;
        this.y = this.ctx.canvas.height / 2;

        this.closeBtn = new Button(this.x, this.y + this.height / 2);

        this.title = "";

        addEventListener(GameEvent.CLOSE_POPUP, ()=>this.isVisible = false);
    }

    Popup.prototype.show = function (title) {
        this.isVisible = true;
        this.title = title;
    };


    Popup.prototype.draw = function () {
        if (!this.isVisible) return;
        this.drawPopup();
    };

    Popup.prototype.drawPopup = function () {
        this.ctx.beginPath();

        this.ctx.fillStyle = "#000000";
        this.ctx.fillRect(this.x - this.width / 2, this.y - this.height / 2, this.width, this.height);
        this.closeBtn.draw();

        this.ctx.fillStyle = "#ffffff";
        this.ctx.textBaseline = 'top';
        this.ctx.textAlign = 'center';
        this.ctx.font = '30px "Indie Flower"';
        this.ctx.fillText(this.title, this.x, this.y - this.height / 2);
        this.ctx.closePath();
    };
    return Popup;
}());