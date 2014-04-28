+function(window) {
    var cj = createjs;
    var canvas, stage, container;

    var letterSpacing = 64; // 文字間のスペース
    var textColor = "#666666";
    var fontSize = 100;
    var font = fontSize + "px Arial";
    var duration = 40;

    // 読み込み時に一回だけ実行される
    function init() {
        canvas = document.getElementById('drawarea');
        stage = new cj.Stage(canvas);
        container = new cj.Container();
        container.x = canvas.width >> 1;
        container.y = (canvas.height >> 1) + (fontSize >> 1);
        stage.addChild(container);
        cj.Ticker.setFPS(60);
        cj.Ticker.addEventListener('tick', function() {
            stage.update();
        });
    }

    // word: 表示したいテキスト
    function createText(word) {
        // テキストの長さ
        var l = word.length;
        var centeringValue = (letterSpacing * (l - 1)) >> 1;
        // createjs Textオブジェクトを格納
        var texts = [];
        for (var i = 0; i < l; i++) {
            var str = word.substring(i, i + 1);
            var text = new cj.Text(word.substring(i, i + 1), font, textColor);
            text.textAlign = "center";
            text.textBaseline = "buttom";
            text.x = letterSpacing * i - centeringValue;
            text.y = canvas.height;
            text.scaleY = 0;
            container.addChild(text);
            texts[i] = text;
        }
        createTimeline(texts);
    }

    function createTimeline(texts) {
        timeline = new cj.Timeline([], {entry: 0}, {paused: true, useTicks: true});
        var l = texts.length;
        for(var i = 0; i < l; i++) {
            var text = texts[i];
            var tween = cj.Tween.get(text)
                        .wait(i * 6)
                        .to({y: -10, scaleY: 2}, duration, cj.Ease.circOut)
                        .to({y: 0, scaleY: 1}, duration, cj.Ease.backInOut);
            timeline.addTween(tween);
        }
    }

    function play() {
        timeline.gotoAndPlay("entry");
    }

    window.addEventListener('load', function() {
        window.removeEventListener('load', arguments.callee);
        init();
        createText("CreateJS");
        play();
    }, false);
} (window);
