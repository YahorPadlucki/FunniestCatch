var ScoreBoard = (function () {

    var score = 0;

    function ScoreBoard() {
        document.addEventListener(GameEvent.FISH_CAUGHT, this.onFishCaught, false);
    }

    ScoreBoard.prototype.onFishCaught = function () {
        score++
    };

    ScoreBoard.prototype.update = function () {
        var ctx = GameModel.getInstance().ctx;
        ctx.fillText(score.toString(), 10, 100);

    };

    return ScoreBoard;

})();