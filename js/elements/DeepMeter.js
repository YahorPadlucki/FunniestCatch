var DeepMeter = (function () {
    function DeepMeter() {

    }
    DeepMeter.prototype.update = function () {
        var ctx = GameModel.getInstance().ctx;
        ctx.fillText(GameModel.getInstance().deep.toString(), 10, 50);
        
    };

    return DeepMeter;

})();