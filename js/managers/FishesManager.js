var FishesManager = (function () {

    function FishesManager() {
        this.fishes = [];
    }

    FishesManager.prototype.checkCollisionWithHook = function (hook) {
        if(!this.fishes.length) return;

        for(var i=0,length=this.fishes.length;i<length;i++){
            var fish = this.fishes[i];
            if(hook.positionY>fish.positionY-fish.height/2&&hook.positionY<fish.positionY+fish.height/2)
            {
                if(hook.positionX>fish.positionX-fish.width/2&&hook.positionX<fish.positionX+fish.width/2)
                {
                    fish.positionY+=50;
                }
            }
        }
    };

    FishesManager.prototype.createFishes = function () {

        var engine = GameModel.getInstance().engine;
        var canvasWidth = GameModel.getInstance().ctx.canvas.width;
        for (var i = 0; i < 10; i++) {

            var rndX = Utils.randomRange(0, canvasWidth);
            var randomVerticalGap = Utils.randomRange(50,150) * (i + 1);
            
            var fish = new Fish(rndX, GameModel.getInstance().seaPositionY + randomVerticalGap);
            engine.elementsToDraw.push(fish);
            engine.elementsToUpdate.push(fish);
            this.fishes.push(fish);
        }

    };

    return FishesManager;
}());
