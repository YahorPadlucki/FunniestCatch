var GameModel = (function () {
    var instance;

    function init() {
        return {
            ctx:"",
            doc:"",
            seaPositionY:150,
            engine:"",
            deep:"",
            score:0,
            device:"",
            maxDepth:2000,
            maxFishes:20

        };

    }

    return {
        getInstance: function () {
            if (!instance) {
                instance = init();
            }
            return instance;
        }
    };

}());