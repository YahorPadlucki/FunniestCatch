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

        var c = Math.sqrt(a * a + b * b);
        return c;
    };

    Utils.getRandomColor = function () {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    };


    Utils.collideCircleWithRotatedRectangle = function (point, rect) {

        var rectCenterX = rect.localX;
        var rectCenterY = rect.localY;

        var rectX = rectCenterX - rect.width / 2;
        var rectY = rectCenterY - rect.height / 2;

        var ctx = GameModel.getInstance().ctx;
        ctx.fillStyle = "#f056ff"
        ctx.fillRect(rectCenterX,rectCenterY,5,5);


        var unrotatedCircleX = Math.cos(rect.angle) * ( point.localX - rectCenterX ) - Math.sin(rect.angle) * ( point.localY - rectCenterY ) + rectCenterX;
        var unrotatedCircleY = Math.sin(rect.angle) * ( point.localX - rectCenterX ) + Math.cos(rect.angle) * ( point.localY - rectCenterY ) + rectCenterY;

        ctx.fillStyle = "#ff00ff"
        ctx.fillRect(unrotatedCircleX,unrotatedCircleY,5,5);
        var closestX, closestY;


        if (unrotatedCircleX < rectX) {
            closestX = rectX;
        } else if (unrotatedCircleX > rectX + rect.width) {
            closestX = rectX + rect.width;
        } else {
            closestX = unrotatedCircleX;
        }


        if (unrotatedCircleY < rectY) {
            closestY = rectY;
        } else if (unrotatedCircleY > rectY + rect.height) {
            closestY = rectY + rect.height;
        } else {
            closestY = unrotatedCircleY;
        }

        ctx.fillStyle = "#ff56ff"
        ctx.fillRect(closestX,closestY,5,5);


        var distance = getDistance(unrotatedCircleX, unrotatedCircleY, closestX, closestY);

        return distance < 1;
    };

    Utils.rgbToHex = function(r, g, b) {
        if (r > 255 || g > 255 || b > 255)
            throw "Invalid color component";
        return ((r << 16) | (g << 8) | b).toString(16);
    }

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
        return [x, y];
    };

    return Utils;

})();