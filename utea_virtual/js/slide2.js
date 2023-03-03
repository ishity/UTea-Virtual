'use strict';

/* 初期設定 */
const imgs = ['images/one.png', 'images/two.png'];  // 画像の配列
let num = -1;
let currentImg = 0;  // スライドショーに表示している画像番号
pageNow();  // 現在のページ数を表示する

/* スライドショーメソッド */
// function slideShow(num){
// if(currentImg + num >= 0 && currentImg + num < imgs.length){
//     currentImg += num;
//     document.getElementById('slide_img').src = imgs[currentImg];
// }else if(currentImg + num === -1){ // 先頭の画像表示時にprevボタンを押したとき
//     currentImg = imgs.length - 1;
//     document.getElementById('slide_img').src = imgs[currentImg];
// }else if(currentImg + num === imgs.length){ // 末尾の画像表示時にnextボタンを押したとき
//     currentImg = 0;
//     document.getElementById('slide_img').src = imgs[currentImg];
// }
// pageNow();
// }
    
function slideshow_timer(){
    if (num == 1){
        num = 0;
        currentImg = 0;
    } 
    else {
        num ++;
        currentImg++;
    } 
    document.getElementById("slide_img").src = imgs[num];
}

/* 現在のページ数表示メソッド */
function pageNow(){
    if(num == 1){
        document.getElementById('page').textContent = "②上下左右キーで移動、画面をドラッグで視点の切り替え、クリック操作をやめると元の視点に戻ります。";
    }else{
        document.getElementById('page').textContent = "①右上の「GUIDE」というボタンを押すと操作方法が記載されています。";
    }
}

/* prevボタンクリックイベント */
document.getElementById('prev').onclick = function(){
slideShow(-1);
}

/* nextボタンクリックイベント */
document.getElementById('next').onclick = function(){
slideShow(1);
}