+function(window) {
    var cj = createjs, stage, circle;

    function init() {
        stage = new cj.Stage('drawarea');

        circle = new cj.Shape();
        circle.graphics.beginFill('red').drawCircle(0, 0, 50);
        circle.x = 50; circle.y = 50;

        stage.addChild(circle);
        stage.update();
    }

    window.addEventListener('load', function() {
        window.removeEventListener('load', arguments.callee);
        init();
    }, false);
} (window);
