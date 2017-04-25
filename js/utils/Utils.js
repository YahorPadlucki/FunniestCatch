var Utils = (function () {
    function Utils() {
    }

    Utils.randomRange = function (min, max) {
        return Math.random() * (max - min) + min;
    };


    Utils.randomRangeInt = function (min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    };

    Utils.distance = function(point1,point2){
        var a = point1.x - point2.x;
        var b = point1.y - point2.y;

        var c = Math.sqrt( a*a + b*b );
        return c;
    };
    
    Utils.getRandomColor =function () {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++ ) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    };


    Utils.collideCircleWithRotatedRectangle =function( circle, rect ) {

        var rectCenterX = rect.x;
        var rectCenterY = rect.y;

        var rectX = rectCenterX - rect.width / 2;
        var rectY = rectCenterY - rect.height / 2;

        var rectReferenceX = rectX;
        var rectReferenceY = rectY;

        var unrotatedCircleX = Math.cos( rect.rotation ) * ( circle.x - rectCenterX ) - Math.sin( rect.rotation ) * ( circle.y - rectCenterY ) + rectCenterX;
        var unrotatedCircleY = Math.sin( rect.rotation ) * ( circle.x - rectCenterX ) + Math.cos( rect.rotation ) * ( circle.y - rectCenterY ) + rectCenterY;

        var closestX, closestY;

        if ( unrotatedCircleX < rectReferenceX ) {
            closestX = rectReferenceX;
        } else if ( unrotatedCircleX > rectReferenceX + rect.width ) {
            closestX = rectReferenceX + rect.width;
        } else {
            closestX = unrotatedCircleX;
        }

        if ( unrotatedCircleY < rectReferenceY ) {
            closestY = rectReferenceY;
        } else if ( unrotatedCircleY > rectReferenceY + rect.height ) {
            closestY = rectReferenceY + rect.height;
        } else {
            closestY = unrotatedCircleY;
        }

        var collision = false;
        var distance = getDistance( unrotatedCircleX, unrotatedCircleY, closestX, closestY );

        if ( distance < circle.radius ) {
            collision = true;
        }
        else {
            collision = false;
        }

        return collision;
    }

    function getDistance( fromX, fromY, toX, toY ) {
        var dX = Math.abs( fromX - toX );
        var dY = Math.abs( fromY - toY );

        return Math.sqrt( ( dX * dX ) + ( dY * dY ) );
    }

    return Utils;

})();