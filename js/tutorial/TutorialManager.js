var TutorialManager = (function () {
    var tutorialStep = 1;

    function TutorialManager() {
        this.popup = new TutorialPopup();
        GameModel.getInstance().engine.elementsToDraw.push(this.popup);
        this.isMobile = GameModel.getInstance().device.isMobile;

        var introTxt = "Click to cast the line";
        if(this.isMobile){
            introTxt = "Tap to cast the line";
        }

        this.popup.show(introTxt);

        addEventListener(GameEvent.CLOSE_POPUP, this.nextStep.bind(this));
        addEventListener(GameEvent.FISH_CAUGHT, this.nextStep.bind(this));
        addEventListener(GameEvent.HOOK_ON_TOP, this.nextStep.bind(this));
    }

    TutorialManager.prototype.nextStep = function () {
        tutorialStep++;
        if (tutorialStep > 4) return;
        if (tutorialStep === 4) {
            var event = new Event(GameEvent.CLOSE_POPUP);
            dispatchEvent(event);
            return;
        }
        var text1;
        var text2;
        var delay = 1000;
        switch (tutorialStep) {
            case 2:
                text1 = "Move mouse to avoid fish";
                if(this.isMobile){
                    text1 = "Touch and move to avoid fish";
                }
                text2 = "On the way down";
                removeEventListener(GameEvent.CLOSE_POPUP, this.nextStep.bind(this));

                break;
            case 3:
                delay = 500;
                text1 = "On the way up";
                text2 = "Catch as many fish as you can";
                removeEventListener(GameEvent.FISH_CAUGHT, this.nextStep.bind(this));
                break;
        }
        setTimeout(this.popup.show(text1, text2).bind(this), delay);

    };

    return TutorialManager;
})();