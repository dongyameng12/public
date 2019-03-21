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

$(document).ready(function(){
    // 一次点击的机会
    total_number =1;
    //增加点击机会
    function addGameNum(){
        total_number++;
        $('.throwing_sieve').removeClass('act');
    }
    // 致筛子
    $('.throwing_sieve').click(function() {
        if (total_number == 0) {
           return;
        }else if(total_number == 1){
            $('.throwing_sieve').addClass('act');
            random_number = Math.floor(Math.random() * 6 + 1);
            changeBackground();
            total_number = 0;
        } else {
            random_number = Math.floor(Math.random() * 6 + 1);
            changeBackground();
            total_number--;
            
        }
    });


    // 关闭弹窗和遮罩
    $('.btncommen').on('click',function(){
        $(this).parent().hide();
        hiddenCover();

    })
    $('#page_first p:eq(0)').on('click',function(){
        $('.lipin').show();
        showCover()

    })
    $('#page_first p:eq(1)').on('click',function(){
        showCover();
        $('.rule').show();

    })
});

let i = 0 // 用来判断是哪一个数组里面的class
let random_number = 0 // 初始化随机数
let total_number = 0 // 可点击‘掷骰子’总次数
function changeBackground () {
    let classArr = ['sieves_img2','sieves_img3','sieves_img4','sieves_img5','sieves_img6']
    $('.sieves').children('div').prop('class',classArr[i]).css({'top':'-.32rem'})
    i++
    if (i < classArr.length) {
        setTimeout(changeBackground, 150);
    } else {
        number_img(random_number)
        // number_img(1)
        i = 0
    }
}

// 背景图片切换结束，显示的图片
function number_img (number) {
    switch(number) 
    {
        case 1:
            $('.sieves').children('div').prop('class','current_img1').css({'top':'0'})
            setTimeout(function () {
                showCover();
                showEgg(number)
            },1000)
            break;
        case 2:
            $('.sieves').children('div').prop('class','current_img2').css({'top':'0'})
            setTimeout(function () {
                showCover()
                showEgg(number)
            },1000)
            break;
        case 3:
            $('.sieves').children('div').prop('class','current_img3').css({'top':'0'})
            setTimeout(function () {
                showCover()
                $('.fail').show()
            },1000)
            break;
        case 4:
            $('.sieves').children('div').prop('class','current_img4').css({'top':'0'})
            setTimeout(function () {
                showCover()
                showEgg(number)
            },1000)
            break;
        case 5:
            $('.sieves').children('div').prop('class','current_img5').css({'top':'0'})
            setTimeout(function () {
                showCover()
                $('.fail').show()
            },1000)
            break;
        case 6:
            $('.sieves').children('div').prop('class','sieves_img').css({'top':'0'})
            setTimeout(function () {
                showCover()
                showEgg(number)
            },1000)
            break;
    }
}

// 展示随机数的蛋
function showEgg (number) {
    switch (number) {
        case 1:
            $('.eggBg').prop('class','eggBg current_egg')
            $('.eggBg').css('display','block')
            setTimeout(function () {
                let flow_number = Math.floor(Math.random()*(50-1+1)+1);
                flowCallPop(number,flow_number)
            },1000);
            break;
        case 2:
            $('.eggBg').prop('class','eggBg current_egg2')
            $('.eggBg').css('display','block')
            setTimeout(function () {
                let flow_number1 = Math.floor(Math.random()*(1000-100+1)+100);
                flowCallPop(number,flow_number1)
            },1000)
            break;
        case 3:
            break;
        case 4:
            $('.eggBg').prop('class','eggBg current_egg4')
            $('.eggBg').css('display','block')
            setTimeout(function () {
                let flow_number2 = Math.floor(Math.random()*(50-1+1)+1);
                flowCallPop(number,flow_number2)
            },1000)
            break;
        case 5:
            break;
        case 6:
            $('.eggBg').prop('class','eggBg current_egg6')
            $('.eggBg').css('display','block')
            setTimeout(function () {
                let flow_number3 = Math.floor(Math.random()*(1000-100+1)+100);
                flowCallPop(number,flow_number3)
            },1000)
            break;
    }
}

// 中奖流量话费弹窗
function flowCallPop (number,random_number) {
    $('.eggBg').css('display','none')
    if (number == 2 || number == 6) {
        $('.popcenter').text(`获得电信流量${random_number}M`)
        $('.win').show()
    } else if (number == 1 || number == 4) {
        $('.popcenter').text(`获得话费${random_number}元`)
        $('.win').show()
    }
}

// 显示遮罩
function showCover(){
    $(".cover").css('height',$(document).height());
    $('.cover').css('width',$(document).width());
    $('.cover').show();
    $('.cover').css({'position':'fixed','top':0,"background-color":'rgba(0,0,0,.8)'});
}
// 隐藏遮罩
function hiddenCover(){
    $('.cover').hide();
    $('body').css('position','unset');
}