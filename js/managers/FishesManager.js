var FishesManager = (function () {

    function FishesManager() {
        this.fishes = [];
    }

    FishesManager.prototype.checkCollision = function () {
    };

    FishesManager.prototype.createFishes = function () {

        var engine = GameModel.getInstance().engine;
        var canvasWidth = GameModel.getInstance().ctx.canvas.width;
        for (var i = 0; i < 10; i++) {


            var rndX = Utils.randomRange(0, canvasWidth);
            var randomVerticalGap = Utils.randomRange(50,150) * (i + 1);
            
            var fish = new Fish(canvasWidth, GameModel.getInstance().seaPositionY + randomVerticalGap);
            engine.elementsToDraw.push(fish);
            engine.elementsToUpdate.push(fish);
            this.fishes.push(fish);
        }

    };

    return FishesManager;
}());
