var Engine = (function (global) {

    var window = global.window;
    var document = window.document;
    var canvas = document.createElement('canvas');
    var ctx = canvas.getContext('2d');

    function Engine() {
        ctx.width = 800;
        ctx.height = 600;

        document.body.appendChild(canvas);

        GameModel.getInstance().ctx = ctx;
        GameModel.getInstance().doc = document;
    }


    Engine.prototype.init = function () {
        this.enterFrame();
    };

    Engine.prototype.enterFrame = function () {
        var elements = GameModel.getInstance().elements;
        
        for (var i = 0; i < elements.length; i++) {
            elements[i].render();
        }
        window.requestAnimationFrame(this.enterFrame.bind(this)); //todo :binding
    };

    return Engine;

}(this));