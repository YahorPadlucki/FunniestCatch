var GameModel = (function () {
    var instance;

    function init() {
        return {
            ctx:"",
            doc:""
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