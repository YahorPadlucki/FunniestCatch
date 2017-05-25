var TutorialPopup = (function () {
    this.text1 = "";
    this.text2 = "";
    function TutorialPopup() {
        Popup.apply(this, arguments);
        this.height = 100;
        this.width = 400;
        this.y = this.ctx.canvas.height - this.height / 2;
    }

    TutorialPopup.prototype = Object.create(Popup.prototype);

    Popup.prototype.show = function (text1, text2="") {
        this.isVisible = true;
        this.text1 = text1;
        this.text2 = text2;
    };


    Popup.prototype.fillTexts = function () {
        this.ctx.fillStyle = "#ffffff";
        this.ctx.textBaseline = 'middle';
        this.ctx.textAlign = 'center';
        this.ctx.font = '25px "Indie Flower"';
        var linesGap = 0;
        if (this.text2.length) {
            linesGap = 20;
        }
        this.ctx.fillText(this.text1, this.x, this.y - linesGap);
        this.ctx.fillText(this.text2, this.x, this.y + linesGap);
    };

    return TutorialPopup;
})();