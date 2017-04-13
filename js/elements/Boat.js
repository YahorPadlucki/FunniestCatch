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
    }

    Boat.prototype.draw = function () {
        var ctx = GameModel.getInstance().ctx;

        ctx.beginPath();
        ctx.rect(this.positionX-this.width/2, this.positionY-this.heigth, this.width, this.heigth);
        ctx.fillStyle = "#000000";
        ctx.fill();
        ctx.closePath();
    };


    Boat.prototype.update = function (deltaTime){
         this.positionX = this.positionX + (this.mousePosition-this.positionX)*(this.boatSpeed*deltaTime);
    };

    return Boat
}());

