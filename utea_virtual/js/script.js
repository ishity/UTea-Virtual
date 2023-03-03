$(function() {
    $('#nav li').mouseover(function(e) {
        $('ul', this).stop().slideDown('fast');
    })
    .mouseout(function(e) {
        $('ul', this).stop().slideUp('fast');
    });
});

