var GameModel = (function () {
    var instance;

    function init() {
        return {
            ctx:"",
            doc:"",
            seaPositionY:150,
            engine:"",
            deep:""
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