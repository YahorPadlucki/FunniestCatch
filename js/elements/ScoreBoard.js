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
        ctx.beginPath();
        ctx.fillStyle = "#000000";
        ctx.fillText("Score: "+score.toString(), 10, 50);
        ctx.closePath();
    };

    return ScoreBoard;

})();