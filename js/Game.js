var Game = (function () {

    function Game() {

        var engine = new Engine();
        engine.init();

        GameModel.getInstance().engine = engine;
        var context = GameModel.getInstance().ctx;

        var seaPositionY = GameModel.getInstance().seaPositionY;
        var boatPositionX = context.canvas.width / 2;

        var sea = new Sea(seaPositionY);
        engine.elementsToUpdate.push(sea);
        engine.elementsToDraw.push(sea);

        this.deepMeter = new DeepMeter();
        engine.elementsToUpdate.push(this.deepMeter);

        this.scoreBoard = new ScoreBoard();
        engine.elementsToUpdate.push(this.scoreBoard);

        this.fishesManager = new FishesManager();
        this.fishesManager.createFishes();

        this.boat = new Boat(boatPositionX, seaPositionY);
        engine.elementsToUpdate.push(this.boat);
        engine.elementsToDraw.push(this.boat);



        engine.camera.setObjectToFollow(this.boat.hook);

        engine.elementsToUpdate.push(this);



    }

    Game.prototype.update = function () { //TODO: to update
        this.fishesManager.checkCollisionWithHook(this.boat.hook)

    };

    return Game;

}());

new Game();

