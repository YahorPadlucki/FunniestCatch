var FishesManager = (function () {

    function FishesManager() {
        this.fishes = [];
        this.engine = GameModel.getInstance().engine;
    }

    FishesManager.prototype.checkCollisionWithHook = function (hook) {
        if (!this.fishes.length) return;


        for (var i = this.fishes.length - 1; i >= 0; i--) {
            var fish = this.fishes[i];


            if(Utils.collideCircleWithRotatedRectangle({x:hook.positionX,y:hook.positionY,radius:5},
                {x:fish.positionX,
                 y:fish.positionY,
                width:fish.width,
                height:fish.height, rotation:fish.angel})){
                hook.addFish(fish);
                this.engine.removeFromUpdate(fish);
                this.fishes.splice(i, 1);
            }


            /*if (hook.positionY > fish.positionY - fish.height / 2 && hook.positionY < fish.positionY + fish.height / 2) {
                if (hook.positionX > fish.positionX - fish.width / 2 && hook.positionX < fish.positionX + fish.width / 2) {
                    hook.addFish(fish);
                    this.engine.removeFromUpdate(fish);
                    this.fishes.splice(i, 1);
                }
            }*/
        }
    };

    FishesManager.prototype.createFishes = function () {

        var canvasWidth = GameModel.getInstance().ctx.canvas.width;
        for (var i = 0; i < 2; i++) {

            var rndX = Utils.randomRange(0, canvasWidth);
            var randomVerticalGap = Utils.randomRange(50, 150) * (i + 1);

            var fish = new SineMoveFish(rndX, GameModel.getInstance().seaPositionY + randomVerticalGap);
            this.engine.elementsToDraw.push(fish);
            this.engine.elementsToUpdate.push(fish);
            this.fishes.push(fish);
        }

    };

    return FishesManager;
}());
