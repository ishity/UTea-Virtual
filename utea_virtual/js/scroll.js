
// ---------- メニューバーの仕組み ----------

let a = 0;
function menuBar() {
	console.log("最初"+a);
    $('#nav li').on('click',function(e) {
        if(a == 0){
            $('ul', this).stop().slideDown('slow');
            a++;
            console.log(a);
        }else{
            $('ul', this).stop().slideUp('fast');
            a = 0
            console.log(a);
        }
    });
};

// function menuBar() {
// 	console.log("最初"+a);
//     $('#nav li').on('click',function(e) {
//         $('ul', this).stop().slideToggle('fast');
// 	});
// };

// $(window).on("load",function () {
// 	menuBar();//スクロール途中でヘッダーが消え、上にスクロールすると復活する関数を呼ぶ
// });

// ---------- メニューバーの仕組みここまで ----------


// ---------- スクロール時のメニューバーの仕組み ----------

var beforePos = 0;//スクロールの値の比較用の設定
//スクロール途中でヘッダーが消え、上にスクロールすると復活する設定を関数にまとめる
function ScrollAnime() {
    var elemTop = $('#area-1').offset();//#area-2の位置まできたら
	var scroll = $(window).scrollTop();
    
    //ヘッダーの出し入れをする
    if(scroll == beforePos) {
		//IE11対策で処理を入れない
		$('#header').removeClass('UpMove');	//#headerにUpMoveというクラス名を除き
		$('#header').addClass('Stay');//#headerにDownMoveのクラス名を追加
    }else if(elemTop > scroll || 0 > scroll - beforePos){
		//ヘッダーが上から出現する
		$('#nav ul').stop().slideUp('fast');
		a = 0;
		$('#header').removeClass('UpMove');	//#headerにUpMoveというクラス名を除き
		$('#header').addClass('DownMove');//#headerにDownMoveのクラス名を追加
    }else {
		//ヘッダーが上に消える
		$('#nav ul').stop().slideUp('fast');
		a = 0;
        $('#header').removeClass('DownMove');//#headerにDownMoveというクラス名を除き
		$('#header').addClass('UpMove');//#headerにUpMoveのクラス名を追加
    }
    
    beforePos = scroll;//現在のスクロール値を比較用のbeforePosに格納
}

// ---------- スクロール時のメニューバーの仕組みここまで ----------



// ---------- 実行 ----------

// 画面をスクロールをしたら動かしたい場合の記述
$(window).on('scroll',function () {
	ScrollAnime();//スクロール途中でヘッダーが消え、上にスクロールすると復活する関数を呼ぶ
});

// ページが読み込まれたらすぐに動かしたい場合の記述
$(window).on('load', function () {
	menuBar();//スクロール途中でヘッダーが消え、上にスクロールすると復活する関数を呼ぶ
});

// ---------- 実行ここまで ----------


//リンク先のidまでスムーススクロール
//※ページ内リンクを行わない場合は不必要なので削除してください
//     var headerH = $("#header").outerHeight(true);//headerの高さを取得    
//     $('#g-navi li a').click(function () {
// 	var elmHash = $(this).attr('href'); 
// 	var pos = $(elmHash).offset().top-headerH;//header分の高さを引いた高さまでスクロール
// 	$('body,html').animate({scrollTop: pos}, 1000);
// 	return false;
// });
