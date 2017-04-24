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

    return Utils;

})();