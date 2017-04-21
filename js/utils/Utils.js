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
    }

    return Utils;

})();