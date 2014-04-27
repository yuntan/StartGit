+function(window) {
    var cj = createjs, stage, circle;

    function init() {
        stage = new cj.Stage('drawarea');

        // 円を描く
        circle = new cj.Shape();
        circle.graphics.beginFill('red').drawCircle(0, 0, 50).endFill();
        // 円の中心の座標を指定
        circle.x = 50; circle.y = 50;
        circle.scaleX = 0; circle.scaleY = 0;
        circle.alpha = 0;
        stage.addChild(circle);

        // 画像を描画
        bitmap = new cj.Bitmap("miku.jpg");
        bitmap.x = 200; bitmap.y = 50;
        bitmap.scaleX = 0.5; bitmap.scaleY = 0.5;
        stage.addChild(bitmap);

        stage.update();

        cj.Ticker.setFPS(60);
        cj.Ticker.addEventListener('tick', tickHandler);

        cj.Tween.get(circle).to({alpha: 1, scaleX: 2, scaleY: 2}, 5000);
    }

    function tickHandler(event) {
        stage.update();
    }

    window.addEventListener('load', function() {
        window.removeEventListener('load', arguments.callee);
        init();
    }, false);
} (window);
