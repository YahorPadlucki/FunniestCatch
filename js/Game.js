var Game = (function () {

    function Game() {

        var engine = new Engine();
        engine.init();

        GameModel.getInstance().engine = engine;
        var context = GameModel.getInstance().ctx;

        var seaPositionY = GameModel.getInstance().seaPositionY;
        var boatPositionX = context.canvas.width / 2;

        var sea = new Sea(seaPositionY);
        engine.elementsToDraw.push(sea);

        var boat = new Boat(boatPositionX, seaPositionY);
        engine.elementsToDraw.push(boat);
        engine.elementsToUpdate.push(boat);

        var fishesManager = new FishesManager();
        fishesManager.createFishes();

        engine.camera.setObjectToFollow(boat.net);

        engine.elementsToUpdate.push(this);


    }

    Game.prototype.update = function (deltaTime) {

    };

    return Game;

}());

new Game();

