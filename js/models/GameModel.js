var GameModel = (function () {
    var instance;

    function init() {
        return {
            ctx:"",
            doc:"",
            seaPositionY:150,
            engine:"",
            deep:"",
            score:0
        };

    };

    return {
        getInstance: function () {
            if (!instance) {
                instance = init();
            }
            return instance;
        }
    };

}());