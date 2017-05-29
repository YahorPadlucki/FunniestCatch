var Device = (function () {

    var TouchEvents = {
        click: 'touchstart',
        down: 'touchstart',
        up: 'touchend',
        move: 'touchmove',
        outside: 'touchendoutside'
    };

    var MouseEvents = {
        click: 'click',
        down: 'mousedown',
        up: 'mouseup',
        move: 'mousemove',
        outside: 'mouseupoutside'
    };


    function Device() {
        if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
            Device.prototype.isMobile = true;
        }

        // this.isTouch = ('ontouchstart' in window) && this.deviceType === DeviceType.MOBILE;
        // this.event = this.isTouch ? TouchEvents : MouseEvents;
        Device.prototype.event = Device.prototype.isMobile ? TouchEvents : MouseEvents;
    }



    return Device;
})();