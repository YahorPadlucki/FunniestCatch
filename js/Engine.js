var Engine = (function (global) {

    var window = global.window;
    var document = window.document;
    var canvas = document.createElement('canvas');
    var ctx = canvas.getContext('2d');

    function Engine() {
        this.elementsToDraw = [];
        this.elementsToUpdate = [];

        canvas.width = 600;
        canvas.height = 600;

        document.body.appendChild(canvas);

        GameModel.getInstance().ctx = ctx;
        GameModel.getInstance().doc = document;
    }


    Engine.prototype.init = function () {
        this.prevTime = Date.now();
        this.enterFrame();
    };

    Engine.prototype.enterFrame = function () {

        var now = Date.now();
        var deltaTime = (now - this.prevTime) / 1000.0;

        this.draw();
        this.update(deltaTime);

        this.prevTime = now;

        window.requestAnimationFrame(this.enterFrame.bind(this)); //todo :binding
    };

    Engine.prototype.draw = function () {
        GameModel.getInstance().ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
        for (var i = 0; i < this.elementsToDraw.length; i++) {
            this.elementsToDraw[i].draw();
        }
    };

    Engine.prototype.update = function (deltaTime) {
        for (var i = 0; i < this.elementsToUpdate.length; i++) {
            this.elementsToUpdate[i].update(deltaTime);
        }
    };

    return Engine;

}(this));