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

        this.camera = new Camera();
        this.elementsToUpdate.push(this.camera);

        document.body.appendChild(canvas);

    }

    Engine.prototype.init = function () {
        this.prevTime = Date.now();
        this.enterFrame();
    };

    Engine.prototype.removeFromUpdate = function (element){
        removeFromArray(this.elementsToUpdate,element);

    };

    function removeFromArray(arr, element) {
        var index = arr.indexOf(element);
        if (index != -1) {
            arr.splice(index, 1);
        }
    };

    Engine.prototype.enterFrame = function () {

        GameModel.getInstance().ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);

        var now = Date.now();
        var deltaTime = (now - this.prevTime) / 1000.0;

        this.update(deltaTime);

        this.prevTime = now;

        window.requestAnimationFrame(this.enterFrame.bind(this));
    };

    Engine.prototype.update = function (deltaTime) {
        for (var i = 0; i < this.elementsToUpdate.length; i++) {
            this.elementsToUpdate[i].update(deltaTime,this.camera.localY);
        }
    };

    return Engine;

}(this));