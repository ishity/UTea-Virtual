const pics_src = ["images/one.png","images/two.png"];
const text = ["①右上の「GUIDE」というボタンを押すと操作方法が記載されています。","②上下左右キーで移動、画面をドラッグで視点の切り替え、クリック操作をやめると元の視点に戻ります。"];
let num = -1;

function start() {
    setInterval(slideshow_timer,2000); 
}

function picChange(n){
    document.getElementById("mypic").src = pics_src[n];
    document.getElementById("page").textContent = text[n];
}

function slideshow_timer(){
    if (num == 1){
        num = 0;
    } 
    else {
        num ++;
    }
    setTimeout("picChange(num)", 4000);
    // setInterval(slideshow_timer,2000); 
}

setInterval(() => {
    
    slideshow_timer();

}, 2000);