var Boat = (function () {
    function Boat(x,y) {
        this.positionX = x;
        this.positionY = y;
        this.mousePosition=y;
        this.width = 100;
        this.heigth = 50;
        this.boatSpeed = 0.8;

        GameModel.getInstance().doc.addEventListener("mousemove",onMouseMove.bind(this),false);

        function onMouseMove(e) {
            var mouseX = e.clientX ;
            var canvas = GameModel.getInstance().ctx.canvas;
            if(mouseX > 0 && mouseX < canvas.width) {
                this.mousePosition = mouseX;
            }
        }

        this.net = new Net(this.positionX,this.positionY);
    }

    Boat.prototype.draw = function (cameraX,cameraY) {
        var ctx = GameModel.getInstance().ctx;

        ctx.beginPath();
        ctx.rect(this.positionX-this.width/2, this.positionY-this.heigth-cameraY, this.width, this.heigth);
        ctx.fillStyle = "#000000";
        ctx.fill();
        ctx.closePath();



        this.net.draw(cameraX,cameraY);
    };


    Boat.prototype.update = function (deltaTime){
         this.positionX = this.positionX + (this.mousePosition-this.positionX)*(this.boatSpeed*deltaTime);
        this.net.positionX = this.positionX;
        // if(this.net.positionY<GameModel.getInstance().ctx.canvas.height/2)

        this.net.positionY +=0.3;
    };

    return Boat
}());

