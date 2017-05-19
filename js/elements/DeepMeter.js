var DeepMeter = (function () {
    function DeepMeter() {

    }
    DeepMeter.prototype.update = function () {
        var ctx = GameModel.getInstance().ctx;
        ctx.beginPath();
        ctx.fillStyle = "#000000";
        ctx.textBaseline = 'top';
        ctx.textAlign  = 'left';
        ctx.font= '30px "Indie Flower"';
        ctx.fillText("Depth: "+GameModel.getInstance().deep.toString(), 10, 0);
        ctx.closePath();
    };

    return DeepMeter;

})();