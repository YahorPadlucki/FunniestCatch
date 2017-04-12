var Boat = (function () {
    function Boat() {
        this.positionX = 0;
        this.positionY = 0;
        this.width = 100;
        this.heigth = 50;

        GameModel.getInstance().doc.addEventListener("mousemove",onMouseMove.bind(this),false);

        function onMouseMove(){
            
        }
    }

    Boat.prototype.render = function () {
        var ctx = GameModel.getInstance().ctx;

        ctx.beginPath();
        ctx.rect(this.positionX, this.positionY, this.width, this.heigth);
        ctx.fillStyle = "0x000000";
        ctx.fill();
        ctx.closePath();
    };

    return Boat
}());

