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

    //TODO: object to draw (fishes ,boat etc);
    //TODO: object to update (collision, camera)
    Engine.prototype.update = function (deltaTime) {
        for (var i = 0; i < this.elementsToUpdate.length; i++) {
            //
            var element = this.elementsToUpdate[i];
            if(element.y>=this.camera.y){ //y vs localY
                element.update(deltaTime,this.camera.localY);
            }

        }

        this.camera.update(deltaTime);
        GameModel.getInstance().ctx.beginPath();
        GameModel.getInstance().ctx.fillRect(0,this.camera.y,5,5);

    };

    return Engine;

}(this));