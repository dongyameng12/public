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
    var swiper1 = new Swiper('#swiper1',{
        observer:true,
        observeParents:true,
        loop: true, // 循环模式选项
        autoplay: true,//可选选项，自动滑动
        pagination: {
            el: '.pagination1',
        },
    });
    var swiper2 = new Swiper('#swiper2',{
        init: false,
        observer:true,
        observeParents:true,
        loop: true, // 循环模式选项
        autoplay: true,//可选选项，自动滑动
        pagination: {
            el: '.pagination2',
        },
    });
    var swiper3 = new Swiper('#swiper3',{
        init: false,
        observer:true,
        observeParents:true,
        loop: true, // 循环模式选项
        autoplay: true,//可选选项，自动滑动
        pagination: {
            el: '.pagination3',
        },
    });
    // swiper1.init()
   $('#tab p').on('click',function(){
    var className = $(this).children('span:eq(1)');
    if(!className.hasClass('act')){
        var p_abject = $(this).siblings('p');
        $.each(p_abject,function(index,item){
            if( $(item).children('span:eq(1)').hasClass('act')){
                $(item).children('span:eq(1)').removeClass('act');
            }
        });
        $(this).children('span:eq(1)').addClass('act');
        // console.log($(this).index()) 判断点击的是第几个p
        if ($(this).index() == 0) {
            show_lunbo(0)
            swiper1.init()
        } else if ($(this).index() == 1) {
            show_lunbo(1)
            swiper2.init()
        } else if ($(this).index() == 2) {
            show_lunbo(2)
            swiper3.init()
        }
    }
   }); 
   

    //点击我的权益
    $('#wenhao').on('click',function(){
        showMask();
       $('.pop').show();
    })
    // 关闭
    $('.close').on('click',function(){
        $('.pop').hide();
        hideMask();
    })
});
// 展示的是哪个轮播图
function show_lunbo (index) {
    if (!$('.bg:eq('+index+')').hasClass('bg_active')) {
        $('.bg:eq('+index+')').siblings('.bg').removeClass('bg_active')
        $('.bg:eq('+index+')').addClass('bg_active')
    }
}
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