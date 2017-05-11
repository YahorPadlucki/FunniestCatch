var DeepMeter = (function () {
    function DeepMeter() {

    }
    DeepMeter.prototype.update = function () {
        var ctx = GameModel.getInstance().ctx;
        ctx.beginPath();
        ctx.fillStyle = "#000000";
        ctx.fillText(GameModel.getInstance().deep.toString(), 10, 50);
        ctx.closePath();
    };

    return DeepMeter;

})();