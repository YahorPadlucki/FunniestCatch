var Engine = (function (global) {

    var window = global.window;
    var document = window.document;
    var canvas = document.createElement('canvas');
    var ctx = canvas.getContext('2d');

    function Engine() {
        ctx.width = 800;
        ctx.height = 600;

        document.body.appendChild(canvas);

        global.ctx = ctx; // TODO: seems to be not the best way
    }


    Engine.prototype.init = function (gameElements) {
        this.elements = gameElements;
        this.enterFrame();
    };

    Engine.prototype.enterFrame = function () {
        for (var i = 0; i < this.elements.length; i++) {
            this.elements[i].render();
        }
        window.requestAnimationFrame(this.enterFrame.bind(this)); //todo :binding
    };

    return Engine;

}(this));