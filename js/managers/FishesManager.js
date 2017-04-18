var FishesManager = (function () {

    function FishesManager() {
        this.fishes = [];
    }

    FishesManager.prototype.checkCollision = function () {
    };

    FishesManager.prototype.createFish = function () {

        var engine = GameModel.getInstance().engine;
        var fish = new Fish(50, GameModel.getInstance().seaPositionY + 100);
        engine.elementsToDraw.push(fish);
        engine.elementsToUpdate.push(fish);
        this.fishes.push(fish);
    };

    return FishesManager;
}());
