var Game = (function () {

    function Game() {
        GameModel.getInstance().device = new Device();

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

        this.hook = new Hook(boatPositionX, seaPositionY);
        this.boat = new Boat(boatPositionX, seaPositionY, this.hook);

        engine.elementsToUpdate.push(this.boat);

        engine.elementsToDraw.push(this.boat);
        engine.elementsToDraw.push(this.hook);

        new TutorialManager();

        engine.camera.setObjectToFollow(this.boat.hook);

        engine.elementsToUpdate.push(this);

        addEventListener(GameEvent.HOOK_ON_TOP, this.showFinalScore.bind(this));

        this.finalPopup = new FinalPopup();
        engine.elementsToDraw.push(this.finalPopup);
    }

    Game.prototype.showFinalScore = function () {
        this.finalPopup.show();
    };

    Game.prototype.update = function () {
        this.fishesManager.checkCollisionWithHook(this.boat.hook)

    };

    return Game;

}());

new Game();

