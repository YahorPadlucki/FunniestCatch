var Utils = (function () {
    function Utils() {
    }

    Utils.randomRange = function (min, max) {
        return Math.random() * (max - min) + min;
    };


    Utils.randomRangeInt = function (min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    };

    Utils.distance = function (point1, point2) {
        var a = point1.x - point2.x;
        var b = point1.y - point2.y;

        return Math.sqrt(a * a + b * b);
    };

    Utils.getRandomColor = function () {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    };


    Utils.collidePointWithRotatedRectangle = function (point, rect) {

        var rectCenterX = rect.x;
        var rectCenterY = rect.y;

        var rectX = rectCenterX - rect.width / 2;
        var rectY = rectCenterY - rect.height / 2;

       /* var ctx = GameModel.getInstance().ctx;
        ctx.fillStyle="#ffffff";
        ctx.fillRect(point.x,point.y,5,5);*/


        var rotatedPoint = Utils.rotatePoint(rect,point,rect.angle);

    /*    ctx.fillStyle="#ff23ff";
        ctx.fillRect(rotatedPoint.x,rotatedPoint.y,5,5);*/

        var closestX, closestY;

        if (rotatedPoint.x < rectX) {
            closestX = rectX;
        } else if (rotatedPoint.x > rectX + rect.width) {
            closestX = rectX + rect.width;
        } else {
            closestX = rotatedPoint.x;
        }


        if (rotatedPoint.y < rectY) {
            closestY = rectY;
        } else if (rotatedPoint.y > rectY + rect.height) {
            closestY = rectY + rect.height;
        } else {
            closestY = rotatedPoint.y;
        }
       /* ctx.fillStyle="#ff13f";
        ctx.fillRect(closestX,closestY,5,5)*/

        var distance = getDistance(rotatedPoint.x, rotatedPoint.y, closestX, closestY);

        return distance < 1;
    };

    Utils.rgbToHex = function(r, g, b) {
        if (r > 255 || g > 255 || b > 255)
            throw "Invalid color component";
        return ((r << 16) | (g << 8) | b).toString(16);
    };

    function getDistance(fromX, fromY, toX, toY) {
        var dX = Math.abs(fromX - toX);
        var dY = Math.abs(fromY - toY);

        return Math.sqrt(( dX * dX ) + ( dY * dY ));
    }

    Utils.rotatePoint =function(pivot, point, angle) {
        var x = Math.round((Math.cos(angle) * (point.x - pivot.x)) -
                (Math.sin(angle) * (point.y - pivot.y)) +
                pivot.x),
            y = Math.round((Math.sin(angle) * (point.x - pivot.x)) +
                (Math.cos(angle) * (point.y - pivot.y)) +
                pivot.y);
        return {x:x, y:y};
    };

    //https://github.com/danro/jquery-easing/blob/master/jquery.easing.js
    Utils.easeOutCubic = function(currentIteration, startValue, changeInValue, totalIterations) {
        return changeInValue * (Math.pow(currentIteration / totalIterations - 1, 3) + 1) + startValue;
        // return c*(t/=d)*t + b;
        // return changeInValue*(currentIteration/=totalIterations)*currentIteration + startValue;
    };

    Utils.easeInSine = function(currentIteration, startValue, changeInValue, totalIterations) {
        return -changeInValue * Math.cos(currentIteration / totalIterations * (Math.PI / 2)) + changeInValue + startValue;
    };

    Utils.easeInQuad = function(currentIteration, startValue, changeInValue, totalIterations) {
        return changeInValue * (currentIteration /= totalIterations) * currentIteration + startValue;
    };

    Utils.easeInQuad = function(currentIteration, startValue, changeInValue, totalIterations) {
        if ((currentIteration /= totalIterations / 2) < 1) return changeInValue / 2 * currentIteration * currentIteration * currentIteration + startValue;
        return changeInValue / 2 * ((currentIteration -= 2) * currentIteration * currentIteration + 2) + startValue;
    };

    return Utils;

})();