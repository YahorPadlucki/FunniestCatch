var ScoreBoard = (function () {

    var score = 0;

    function ScoreBoard() {
        addEventListener(GameEvent.FISH_CAUGHT, this.onFishCaught.bind(this));
    }

    ScoreBoard.prototype.onFishCaught = function () {
        score++
    };

    ScoreBoard.prototype.update = function () {
        var ctx = GameModel.getInstance().ctx;
        ctx.beginPath();
        ctx.fillStyle = "#000000";
        ctx.textAlign  = 'left';

        ctx.fillText("Score: "+score.toString(), 10, 50);
        ctx.closePath();
    };

    return ScoreBoard;

})();