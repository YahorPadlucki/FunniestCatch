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
                this.engine.removeFromDraw(fish);
                this.fishes.splice(i, 1);
            }
        }
    };

    FishesManager.prototype.createFishes = function () {

        var canvasWidth = GameModel.getInstance().ctx.canvas.width;
        for (var i = 0; i < 20; i++) {

            var fishX = Utils.randomRange(0, canvasWidth);
            var randomVerticalGap = Utils.randomRange(50, 150) * (i + 1);
            var fishY = GameModel.getInstance().seaPositionY + randomVerticalGap;

            var behaviour = getFishBehaviour(fishX, fishY);


            var widthMaxMultiplier = 1;
            var heightMaxMultiplier = 1;
            var tailMaxMultiplier = 1;
            if (fishY > 500) {
                tailMaxMultiplier = 3;
            }
            if (fishY > 800) {
                widthMaxMultiplier = 3;
            }
            if (fishY > 1000) {
                heightMaxMultiplier = 2;
            }

            var sizeMultipliers = {
                widht: Utils.randomRangeInt(1, widthMaxMultiplier),
                height: Utils.randomRangeInt(1, heightMaxMultiplier),
                tail: Utils.randomRangeInt(1, tailMaxMultiplier)
            };

            var fish = new Fish(fishX, fishY, behaviour, sizeMultipliers);
            this.engine.elementsToUpdate.push(fish);
            this.engine.elementsToDraw.push(fish);
            this.fishes.push(fish);

            GameModel.getInstance().maxDepth = fishY+500;
        }

    };

    function getFishBehaviour(fishX, fishY) {
        var behaviour = new DefaultMove(fishX, fishY);
        if (fishY > 400)
            behaviour = new EasingBehaviour(fishX, fishY);
        if (fishY > 800)
            behaviour = new AccelerationMove(fishX, fishY);
        if (fishY > 1000)
            behaviour = new SineMove(fishX, fishY);

        return behaviour;
    }

    return FishesManager;
}());
