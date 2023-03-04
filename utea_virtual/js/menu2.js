"use strict";
let a = -1;

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


$(window).on("load",function () {
	menuBar();//スクロール途中でヘッダーが消え、上にスクロールすると復活する関数を呼ぶ
});


// $(function() {
//     $('#nav li').on('click',function(e) {
//         $('ul', this).stop().slideDown('fast');
//     })
//     .mouseout(function(e) {
//         $('ul', this).stop().slideUp('fast');
//     });
// });
