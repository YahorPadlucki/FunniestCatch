(function () {
    var engine = new Engine();
    engine.init();

    var context =GameModel.getInstance().ctx;

    var seaPositionY = 150;
    var boatPositionX = context.canvas.width/2;

    var sea = new Sea(seaPositionY);
    engine.elementsToDraw.push(sea);

    var boat = new Boat(boatPositionX,seaPositionY);
    engine.elementsToDraw.push(boat);
    engine.elementsToUpdate.push(boat);
    
    var fish = new Fish(50,seaPositionY+100);
    engine.elementsToDraw.push(fish);
    engine.elementsToUpdate.push(fish);

    engine.camera.setObjectToFollow(boat.net);

}());

