+function(window) {
    var cj = createjs, stage;

    function init() {
        stage = new cj.Stage('drawarea');

        // 円を描く
        var circle = new cj.Shape();
        circle.graphics.beginFill('red').drawCircle(0, 0, 50).endFill();
        // 円の中心の座標を指定
        circle.x = 150; circle.y = 250;
        circle.scaleX = 0; circle.scaleY = 0;
        circle.alpha = 0;
        stage.addChild(circle);

        // 四角を描く
        var rect = new cj.Shape();
        // (300, 100)に80x40の四角を描く
        rect.graphics.beginFill('blue').drawRect(300, 100, 150, 50).endFill();
        stage.addChild(rect);

        // 画像を描画
        var bitmap = new cj.Bitmap("miku.jpg");
        bitmap.x = 200; bitmap.y = 50;
        bitmap.scaleX = 0.5; bitmap.scaleY = 0.5;
        stage.addChild(bitmap);

        stage.update();

        cj.Ticker.setFPS(60);
        cj.Ticker.addEventListener('tick', tickHandler);

        // 円のアニメーション
        cj.Tween.get(circle, {loop: true})
                .to({alpha: 1, scaleX: 2, scaleY: 2}, 3000)
                .wait(1000)
                .to({alpha: 0, scaleX: 0, scaleY: 0}, 2000)
                .wait(1000);
        // 四角のアニメーション
        cj.Tween.get(rect, {loop: true})
                .to({x: 200, y: 200}, 2000)
                .wait(500)
                .to({x: 0, y: 0}, 2000)
                .wait(500);
    }

    function tickHandler(event) {
        stage.update();
    }

    window.addEventListener('load', function() {
        window.removeEventListener('load', arguments.callee);
        init();
    }, false);
} (window);
