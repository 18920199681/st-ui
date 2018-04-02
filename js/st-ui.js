document.querySelector('html').style.fontSize = document.querySelector('html').clientWidth / 12 + 'px';
window.onresize = function () {
    document.querySelector('html').style.fontSize = document.querySelector('html').clientWidth / 12 + 'px'
}

/**
*导航条
*/
function st_navbar(option) {
    var st_navbar = '<div class="st_navbar">\
                        <div class="st_navbar_box clearFloat">\
                            <div class="st_navbar_left clearFlaot">\
                                <div class="st_navbar_logo">\
                                    <img src="'+ option.logo + '" alt="logo">\
                                </div>\
                                <div class="st_navbar_company_name">' + option.company_name + '</div>\
                            </div>\
                            <div class="st_navbar_list">\
                                <ul class="clearFlaot"></ul >\
                                <div class="st_navbar_list_btn">\
                                        <div>\
                                            <span class="st_bavbar_list_btn_line"></span>\
                                            <span class="st_bavbar_list_btn_line"></span>\
                                            <span class="st_bavbar_list_btn_line"></span>\
                                        </div>\
                                </div>\
                            </div >\
                        </div >\
                    </div >\
                    <div class="st_body_box">\
                        <div class="st_navbar_list_phone">\
                            <ul>&nbsp;</ul>\
                        </div>\
                    </div>';

    $('body').html(st_navbar);

    var item = option.navbar_menu;
    var menu_list = '';
    for (var i = 0; i < item.length; i++) {
        menu_list += '<a href="javascript:;">\
                            <li>'+ item[i] + '</li>\
                        </a>'
    }
    $('.st_navbar_list ul').html(menu_list);

    // 菜单（移动端）
    $('.st_navbar_list_phone ul').html($('.st_navbar_list ul').html());
    // $('.st_navbar_list_btn').on('click', function (e) {
    //     let et_navbar_height = $('.st_navbar')[0].offsetHeight;
    //     let et_body_top = $('.st_body').offset().top;
    //     let et_navbar_list_height = $('.st_navbar_list_phone')[0].offsetHeight;
    //     let et_body = document.querySelector(".st_body");
    //     if (parseInt(et_body_top) == et_navbar_height) {
    //         startMove(et_body, { top: et_navbar_list_height });
    //     } else {
    //         startMove(et_body, { top: 0 });
    //     }
    // });
}



