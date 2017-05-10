var Engine = (function (global) {

    var window = global.window;
    var document = window.document;
    var canvas = document.createElement('canvas');
    var ctx = canvas.getContext('2d');

    function Engine() {
        canvas.width = 600;
        canvas.height = 600;
        GameModel.getInstance().ctx = ctx;
        GameModel.getInstance().doc = document;

        this.elementsToUpdate = [];
        this.elementsToDraw = [];

        this.camera = new Camera();
        document.body.appendChild(canvas);

    }

    Engine.prototype.init = function () {
        this.prevTime = Date.now();
        this.enterFrame();
    };

    Engine.prototype.removeFromUpdate = function (element) {
        Utils.removeFromArray(this.elementsToUpdate, element);

    };

    Engine.prototype.removeFromDraw = function (element) {
        Utils.removeFromArray(this.elementsToDraw, element);

    };



    Engine.prototype.enterFrame = function () {

        GameModel.getInstance().ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);

        var now = Date.now();
        var deltaTime = (now - this.prevTime) / 1000.0;

        this.draw(deltaTime);
        this.update(deltaTime);

        this.prevTime = now;

        window.requestAnimationFrame(this.enterFrame.bind(this));
    };

    Engine.prototype.update = function (deltaTime) {
        for (var i = 0; i < this.elementsToUpdate.length; i++) {
            this.elementsToUpdate[i].update(deltaTime, this.camera.localY);
        }

        this.camera.update(deltaTime);

    };

    Engine.prototype.draw = function (deltaTime) {
        for (var i = 0; i < this.elementsToDraw.length; i++) {
            //
            var element = this.elementsToDraw[i];
            if (element.y+element.height >= this.camera.y) { //y vs localY
                element.draw(deltaTime, this.camera.localY);
            }

        }

        GameModel.getInstance().ctx.beginPath();
        GameModel.getInstance().ctx.fillRect(0,this.camera.y,5,5);
    }

    return Engine;

}(this));