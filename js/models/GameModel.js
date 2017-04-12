var GameModel = (function () {
    var instance;

    function init() {
        return {
            elements: [],
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

})();