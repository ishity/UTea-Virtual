// ---------- スライドの画像変換 ----------

const pics_src = ["images/one.png","images/two.png"];
const text = ["①右上の「GUIDE」というボタンを押すと操作方法が記載されています。","②上下左右キーで移動、画面をドラッグで視点の切り替え、クリック操作をやめると元の視点に戻ります。"];
let num = -1;
let time = 0;

function picChange(){
    if (num == 1){
        num = 0;
    }else {
        num ++;
    }
    document.getElementById("mypic").src = pics_src[num];
    document.getElementById("page").textContent = text[num];
}

function slideshow_timer(){
    if (num == 1){
        num = 0;
    }else {
        num ++;
    }
    setTimeout(picChange(num), 2500);
}

// ---------- スライドの画像変換ここまで ----------

// ---------- スライドの画像をゆっくり表示 ----------

function load_effect() {
    document.getElementById("mypic").classList.add('is-show');
    document.getElementById("page").classList.add('is-show');
}
setTimeout(load_effect, 600); // 600ミリ秒経過後に実行

// ---------- スライドの画像をゆっくり表示ここまで ----------


// ---------- 実行 ----------

setInterval(() => {
    picChange();
}, 2500);

// ---------- 実行ここまで ----------
