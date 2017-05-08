var FishesManager = (function () {

    function FishesManager() {
        this.fishes = [];
        this.engine = GameModel.getInstance().engine;
    }

    FishesManager.prototype.checkCollisionWithHook = function (hook) {
        if (!this.fishes.length) return;

        for (var i = this.fishes.length - 1; i >= 0; i--) {
            var fish = this.fishes[i];

            if (Utils.collidePointWithRotatedRectangle(hook, fish)) {
                hook.addFish(fish);
                this.engine.removeFromUpdate(fish);
                this.fishes.splice(i, 1);
            }
        }
    };

    FishesManager.prototype.createFishes = function () {

        var canvasWidth = GameModel.getInstance().ctx.canvas.width;
        for (var i = 0; i < 10; i++) {

            var rndX = Utils.randomRange(0, canvasWidth);
            var randomVerticalGap = Utils.randomRange(50, 150) * (i + 1);

            var fish = new Fish(rndX, GameModel.getInstance().seaPositionY + randomVerticalGap);
            this.engine.elementsToUpdate.push(fish);
            this.fishes.push(fish);
        }

    };

    return FishesManager;
}());
