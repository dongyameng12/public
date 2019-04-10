(function (doc, win) {
    var docEl = doc.documentElement,
        resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
        recalc = function () {
            var clientWidth = docEl.clientWidth;
            if (!clientWidth) return;
            docEl.style.fontSize = 100 * (clientWidth /750) + 'px';
        };
    if (!doc.addEventListener) return;
    win.addEventListener(resizeEvt, recalc, false);
    doc.addEventListener('DOMContentLoaded', recalc, false);
})
    (document, window);

$(document).ready(function () {
    // 成功或失败
    var isfail = true;
    // 点击ios展开
    $('#ios_btn').on('click',function(){
        $('.ios_zhankai').toggle();
        var displayStyle = $('.ios_zhankai').css('display'); 
       if (displayStyle === 'block') {
         $('#jian_xuan').addClass('xuanzhuan');
       } else {
        $('#jian_xuan').removeClass('xuanzhuan');
       }
    })
    // 点击android_btn展开
    $('#android_btn').on('click',function(){
        $('.android_zhankai').toggle();
        var displayStyle = $('.android_zhankai').css('display'); 
       if (displayStyle === 'block') {
         $('#ajian_xuan').addClass('xuanzhuan');
       } else {
        $('#ajian_xuan').removeClass('xuanzhuan');
       }
    });
    // 点击开通
    $('#deal').on('click',function(){
        showMask();
        $('.progress').show();
        setTimeout(function(){
            $('.progress').hide();
            isfail?$('.success').show():$('.fail').show();
        },2000)

    });
    // 点击遮罩
    $('#mask').on('click',function(){
        hideMask();
        $('.tc').hide();
    })
});
//显示遮罩层
function showMask() {
    $("#mask").css("height", $(document).height());
    $("#mask").css("width", $(document).width());
    $("#mask").show();
    $('body').css('position', 'fixed');
}
//隐藏遮罩层
function hideMask() {
    $("#mask").hide();
    $('body').css('position', 'unset');
}