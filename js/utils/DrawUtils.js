var DrawUtils = (function () {

    function DrawUtils() {

    }

    DrawUtils.drawFish = function (fish) {
        var ctx = GameModel.getInstance().ctx;

        ctx.save();
        ctx.translate(fish.x, fish.y);
        ctx.rotate(fish.angle);

        ctx.beginPath();
        ctx.fillStyle = fish.color;
//draw head
        var headX = -fish.width / 2 + fish.headWidth;
        ctx.arc(headX, 0, fish.headWidth, 1.57, -1.57, false);
        ctx.fill();
//draw body
        ctx.beginPath();
        ctx.fillRect(headX, -fish.bodyHeight / 2, fish.bodyWidth, fish.bodyHeight);
//drawTail
        ctx.beginPath();
        var tailX = headX + fish.bodyWidth;
        ctx.moveTo(tailX, -fish.bodyHeight / 2);
        ctx.lineTo(tailX + fish.tailWidth, fish.bodyHeight / 2);
        ctx.lineTo(tailX + fish.tailWidth, -fish.bodyHeight / 2);
        ctx.lineTo(tailX, fish.bodyHeight / 2);
        ctx.fill();

        ctx.restore();
    }

    return DrawUtils;
})();