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
    // 返回
    $('.turn').on('click',function(){
        window.history.go(-1);
    })
});
var num = 0;

// 输入数字长度监控
function getCoumt () {
    let val_length = $('.textpj').val().length
    $('.current_count').text(val_length)
    
}

$(document).on('click','.service_manager li',function () {
    $(this).css('background-image',"url('images/star_02.png')")
    $(this).prevAll().css('background-image','url("images/star_02.png")')
    $(this).nextAll().css('background-image','url("images/star_01.png")')
    let class_obj = $(this).prop('class')
    change_text(class_obj)
})
$(document).on('click','.service_comment li',function () {
    $(this).css('background-image',"url('images/star_02.png')")
    $(this).prevAll().css('background-image','url("images/star_02.png")')
    $(this).nextAll().css('background-image','url("images/star_01.png")')
    let class_obj = $(this).prop('class')
    change_text(class_obj)
})

function change_text (class_obj) {
    if (class_obj.includes('ma')) {
        $('.managerp').html('')
        let evalALl = []
        let number_class = class_obj.replace('manager_','')
        if (number_class == 1 || number_class == 2 || number_class == 3) {
            switch (number_class)
            {
                case '1':
                $('.manager_my').text('非常不满意')
                break;
                case '2':
                $('.manager_my').text('不满意')
                break;
                case '3':
                $('.manager_my').text('一般')

            }
            evalALl = ['上门不准时','申请流程繁琐','态度欠缺耐心','业务不熟练','耗时很长','服务不规范']
        } else {
            switch (number_class)
            {
                case '4':
                $('.manager_my').text('满意')
                break;
                case '5':
                $('.manager_my').text('非常满意')
                break;
            }
            evalALl = ['非常准时','改约靠谱','耐心细致','处理快速','效率高','很专业']
        }
        evalALl.map((item,index) => {
            let p_obj = `<p>${item}</p>`
            $('.managerp').append(p_obj)
        })
    } else if (class_obj.includes('co')) {
        $('.commentp').html('')
        let evalALl2 = []
        let number_class = class_obj.replace('comment_','')
        if (number_class == 1 || number_class == 2 || number_class == 3) {
            switch (number_class)
            {
                case '1':
                $('.comment_my').text('非常不满意')
                break;
                case '2':
                $('.comment_my').text('不满意')
                break;
                case '3':
                $('.comment_my').text('一般')

            }
            evalALl2 = ['申请渠道单一','申请流程繁琐','长时间无人联系','预约不及时','缺少在线预约功能']
        } else {
            switch (number_class)
            {
                case '4':
                $('.comment_my').text('满意')
                break;
                case '5':
                $('.comment_my').text('非常满意')
                break;
            }
            evalALl2 = ['申请渠道多','申请流程简便','联系快','主动及时预约','支持一键预约']
        }
        evalALl2.map((item,index) => {
            let p_obj = `<p>${item}</p>`
            $('.commentp').append(p_obj)
        })
    }
}

$(document).on('click','.chosen p',function () {
    if ($(this).prop('class').includes('se')) {
        $(this).removeClass('selected_style')
    } else {
        $(this).addClass('selected_style')
    }
}) 





