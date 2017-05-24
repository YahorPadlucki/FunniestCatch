var Popup = (function () {
    function Popup(hasCloseButton = false) {
        this.ctx = GameModel.getInstance().ctx;
        this.width = 500;
        this.height = 500;
        this.x = this.ctx.canvas.width / 2;
        this.y = this.ctx.canvas.height / 2;

        if (hasCloseButton) {
            this.closeBtn = new Button(this.x, this.y + this.height / 2);
        }

        this.text = "";

        addEventListener(GameEvent.CLOSE_POPUP, ()=> this.isVisible = false);
    }

    Popup.prototype.show = function (text) {
        this.isVisible = true;
        this.text = text;
    };


    Popup.prototype.draw = function () {
        if (!this.isVisible) return;
        this.drawPopup();
    };

    Popup.prototype.drawPopup = function () {
        this.ctx.beginPath();

        this.ctx.fillStyle = "#000000";
        this.ctx.fillRect(this.x - this.width / 2, this.y - this.height / 2, this.width, this.height);
        if (this.closeBtn) {
            this.closeBtn.draw();
        }
        this.fillTexts();

        this.ctx.closePath();
    };

    Popup.prototype.fillTexts = function () {
        this.ctx.fillStyle = "#ffffff";
        this.ctx.textBaseline = 'middle';
        this.ctx.textAlign = 'center';
        this.ctx.font = '30px "Indie Flower"';
        this.ctx.fillText(this.text, this.x, this.y);
    };
    return Popup;
}());