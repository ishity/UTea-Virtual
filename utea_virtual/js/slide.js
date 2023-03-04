// ---------- スライドの画像変換 ----------

const pics_src = ["images/one.png","images/two.png"];
const text = ["①右上の「GUIDE」というボタンを押すと操作方法が記載されています。","②上下左右キーで移動、画面をドラッグで視点の切り替え、クリック操作をやめると元の視点に戻ります。"];
let num = -1;
let time = 0;

// function start() {
//     setInterval(slideshow_timer,2000); 
// }

// function picChange(n){
//     document.getElementById("mypic").src = pics_src[n];
//     document.getElementById("page").textContent = text[n];
// }

// function slideshow_timer(){
//     if (num == 1){
//         num = 0;
//     } 
//     else {
//         num ++;
//     }
//     setTimeout("picChange(num)", 2000);
//     // setInterval(slideshow_timer,2500); 
// }

function picChange(){
    if (num == 1){
        num = 0;
    }else {
        num ++;
    }
    // setTimeout(picChange(num), 2500);
    document.getElementById("mypic").src = pics_src[num];
    document.getElementById("page").textContent = text[num];
    // document.getElementById("mypic").classList.add('is-not-show');
}

function slideshow_timer(){
    if (num == 1){
        num = 0;
    }else {
        num ++;
    }
    // picChange(num);
    setTimeout(picChange(num), 2500);
    // setInterval(slideshow_timer,2500); 
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

// 画面をスクロールをしたら動かしたい場合の記述
setInterval(() => {
    picChange();
}, 2500);

// $(window).on('load', function () {
// 	setInterval(slideshow_timer(),2500); //スクロール途中でヘッダーが消え、上にスクロールすると復活する関数を呼ぶ
// });

// ページが読み込まれたらすぐに動かしたい場合の記述
// $(window).on('load', function () {
// 	setInterval(slideshow_timer(),2500); //スクロール途中でヘッダーが消え、上にスクロールすると復活する関数を呼ぶ
// });

// ---------- 実行ここまで ----------