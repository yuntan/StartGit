+function(window) {
    var cj = createjs, stage, circle;
    cj.DisplayObject.suppressCrossDomainErrors = true;

    function init() {
        stage = new cj.Stage('drawarea');

        // 円を描く
        circle = new cj.Shape();
        circle.graphics.beginFill('red').drawCircle(0, 0, 50).endFill();
        // 円の中心の座標を指定
        circle.x = 50; circle.y = 50;
        stage.addChild(circle);

        // 画像を描画
        bitmap = new cj.Bitmap("miku.jpg");
        bitmap.x = 200; bitmap.y = 50;
        bitmap.scaleX = 0.5; bitmap.scaleY = 0.5;
        stage.addChild(bitmap);

        stage.update();
    }

    window.addEventListener('load', function() {
        window.removeEventListener('load', arguments.callee);
        init();
    }, false);
} (window);
