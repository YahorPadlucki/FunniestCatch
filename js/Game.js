(function () {
    var engine = new Engine();
    engine.init();

    var context =GameModel.getInstance().ctx;

    var boatPositionX = context.canvas.width/2;
    var seaPositionY = 150;


    var sea = {
        draw:function (){

          context.beginPath();
          context.rect(0, seaPositionY, context.canvas.width, context.canvas.height-seaPositionY);
          context.closePath();

          context.fillStyle = "#51DCFF";
          context.fill();
      }
    };
    engine.elementsToDraw.push(sea);


    var boat = new Boat(boatPositionX,seaPositionY);
    engine.elementsToDraw.push(boat);
    engine.elementsToUpdate.push(boat);




}());

