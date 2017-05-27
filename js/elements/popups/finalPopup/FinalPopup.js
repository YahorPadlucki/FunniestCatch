var FinalPopup = (function () {
    function FinalPopup() {
        Popup.apply(this, arguments);
        this.height =150;
        this.width =400;
        this.y = this.ctx.canvas.height/2;
        // this.closeBtn.y = this.ctx.canvas.height - this.closeBtn.height;
    }

    FinalPopup.prototype = Object.create(Popup.prototype);

    FinalPopup.prototype.fillTexts = function () {
        this.ctx.fillStyle = "#ffffff";
        this.ctx.textBaseline = 'middle';
        this.ctx.textAlign = 'center';
        this.ctx.font = '30px "Indie Flower"';
        this.ctx.fillText("Your Score", this.x, this.y -30);
        this.ctx.fillText(GameModel.getInstance().score, this.x, this.y+10);
    };
    
    return FinalPopup;
})();