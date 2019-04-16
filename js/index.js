(function (doc, win) {
    var docEl = doc.documentElement,
        resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
        recalc = function () {
            var clientWidth = docEl.clientWidth;
            if (!clientWidth) return;
            docEl.style.fontSize = 100 * (clientWidth / 750) + 'px';
        };
    if (!doc.addEventListener) return;
    win.addEventListener(resizeEvt, recalc, false);
    doc.addEventListener('DOMContentLoaded', recalc, false);
})
    (document, window);

$(document).ready(function () {
    // 首页翻书
    (function () {
        var bgCounter = 0,
            backgrounds = [
                "images/homex_01.png",
                "images/homex_02.png",
                "images/homex_03.png",
                "images/homex_04.png",
            ];
        function changeBackground() {
            bgCounter = (bgCounter + 1) % backgrounds.length;
            $('#change').css('background', 'url(' + backgrounds[bgCounter] + ') no-repeat ');
            $('#change').css('background-size', 'cover');
            setTimeout(changeBackground, 510);
        }
        changeBackground();
    })();
    // 开启回忆
    $('#start_memories').on('click',function(){
       alert(1)
    });

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