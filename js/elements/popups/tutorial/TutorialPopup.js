var TutorialPopup = (function () {
    function TutorialPopup() {
        Popup.apply(this, arguments);
        this.height =150;
        this.width =400;
        this.y = this.ctx.canvas.height -this.height/2;
        this.closeBtn.y = this.ctx.canvas.height - this.closeBtn.height;
    }

    TutorialPopup.prototype = Object.create(Popup.prototype);
    return TutorialPopup;
})();