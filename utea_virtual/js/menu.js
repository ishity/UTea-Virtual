let a = 0;

$(function() {
    console.log("最初"+a);
    $('#nav li').on('click',function(e) {
        if(a == 0){
            $('ul', this).stop().slideDown('fast');
            a++;
            console.log(a);
        }else{
            $('ul', this).stop().slideUp('fast');
            a = 0
            console.log(a);
        }
    });
});

// $(function() {
//     $('#nav li').on('click',function(e) {
//         $('ul', this).stop().slideDown('fast');
//     })
//     .mouseout(function(e) {
//         $('ul', this).stop().slideUp('fast');
//     });
// });
