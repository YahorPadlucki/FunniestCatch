var DeviceDetect  = (function () {

    function DeviceDetect() {
        if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {

        }
        // this.isTouch = ('ontouchstart' in window) && this.deviceType === DeviceType.MOBILE;
        // this.event = this.isTouch ? TouchEvents : MouseEvents;
    }
    return DeviceDetect;
})();