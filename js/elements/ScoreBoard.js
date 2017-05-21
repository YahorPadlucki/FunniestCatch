var ScoreBoard = (function () {

    function ScoreBoard() {
    }

    ScoreBoard.prototype.update = function () {
        var ctx = GameModel.getInstance().ctx;
        ctx.beginPath();
        ctx.fillStyle = "#000000";
        ctx.textAlign = 'left';

        ctx.fillText("Score: " + GameModel.getInstance().score.toString(), 10, 50);
        ctx.closePath();
    };

    return ScoreBoard;

})();