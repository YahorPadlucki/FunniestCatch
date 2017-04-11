var GameModel = (function () {
    var instance;

    function init() {
        return {
            elements: [],
            ctx:""
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