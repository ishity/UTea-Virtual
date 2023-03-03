
$(function() {
    $('#test')
        // マウスポインターが画像に乗った時の動作
        .mouseover(function(e) {
            let target = e.target;
            console.log('mouseover:' + e.target.id);
            if(e.target.id=='test'){
                target.style.background = '';
            }else{
                // target.style.background = 'white';
                // target.style.color = '#E900FF';
                target.style.transition = '0.4s';
                target.style.fontSize = '25px';
                // target.style.transform = 'rotateX(360deg)';
                // target.style.transform = 'scale(1.5)';
            }
        })
        // マウスポインターが画像から外れた時の動作
        .mouseout(function(e) {
        let target = e.target;
        console.log('mouseout:' + e.target.id);
        target.style.background = '';
        target.style.color = '';
        // target.style.transform = 'scale(1.1)';
        target.style.fontSize = '';
    });
});
