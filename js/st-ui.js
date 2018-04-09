document.querySelector('html').style.fontSize = document.querySelector('html').clientWidth / 12 + 'px';
window.onresize = function () {
    document.querySelector('html').style.fontSize = document.querySelector('html').clientWidth / 12 + 'px'
}

/**
* 侧边栏
*/
function st_sidebar() {
    var item = $('body').find('.st_left_navbar li');
    for (var i = 0; i < item.length; i++) {
        item[i].onmouseover = function () {
            this.style.background = 'white';
        }
        item[i].onmouseout = function () {
            this.style.background = 'gainsboro';
        }
    }

    var st_first_nav_title = $('body').find('.st_first_nav_title');
    var st_second_nav_box = $('body').find('.st_second_nav_box');
    var first_menu_arrow_right = $('body').find('.first_menu_arrow_right');
    var first_menu_arrow_bottom = $('body').find('.first_menu_arrow_bottom');
    for (var i = 0; i < st_first_nav_title.length; i++) {
        st_first_nav_title[i].index = i;
        st_first_nav_title[i].onclick = function () {

            for (var j = 0; j < st_first_nav_title.length; j++) {
                st_second_nav_box[j].style.display = 'none';
                first_menu_arrow_right[j].style.display = 'block';
                first_menu_arrow_bottom[j].style.display = 'none';
            }
            st_second_nav_box[this.index].style.display = 'block';
            first_menu_arrow_right[this.index].style.display = 'none';
            first_menu_arrow_bottom[this.index].style.display = 'block';
        }
    }

    var st_get_into = $('body').find('.st_get_into');
    var st_right_frame = $('body').find('.st_right_frame');
    for (var i = 0; i < st_get_into.length; i++) {
        st_get_into[i].index = i;
        st_get_into[i].onclick = function () {
            for (let j = 0; j < st_get_into.length; j++) {
                st_right_frame[j].style.display = 'none';
            }
            st_right_frame[this.index].style.display = 'block';
        }
    }

}

/**
* 头部导航条
*/
function st_navbar(option) {
    var logo = '';
    var company_name = '';
    if (option.logo && typeof (option) == "object") {
        logo = option.logo;
    }
    if (option.company_name && typeof (option) == "object") {
        company_name = option.company_name;
    }

    var st_navbar = '<div class="st_navbar_box clearFloat">\
                        <div class="st_navbar_left clearFlaot">\
                            <div class="st_navbar_logo">\
                                <img src="'+ logo + '">\
                            </div>\
                            <div class="st_navbar_company_name">' + company_name + '</div>\
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
                    </div >';
    $('.st_navbar').html(st_navbar);

    var item = [];
    if (option.navbar_menu && option.navbar_menu instanceof Array) {
        item = option.navbar_menu;
    } else {
        console.error("navbar_menu 应为数组");
    }
    var menu_list = '';
    for (var i = 0; i < item.length; i++) {
        menu_list += '<a href="javascript:;">\
                            <li>'+ item[i] + '</li>\
                        </a>'
    }
    $('.st_navbar_list ul').html(menu_list);
    $('.st_navbar_menu_phone ul').html(menu_list);

    /**
     * 头部导航条菜单（移动端）
     */
    // 让移动端导航菜单处于收起状态
    $('body').find('.st_navbar_menu_phone').css('top', -($('.st_navbar_menu_phone')[0].offsetHeight));
    $('body').find('.st_navbar_list_btn').on('click', function () {
        // 导航条高度
        let st_navbar_height = $('.st_navbar')[0].offsetHeight;
        let old_height = $('.st_navbar')[0].offsetHeight;
        // 导航条挡板高度
        let st_navbar_menu_height_box = document.querySelector('.st_navbar_menu_height');
        let st_navbar_menu_height = $('.st_navbar_menu_height')[0].offsetHeight;
        // 菜单高度
        let st_navbar_menu_phone = $('.st_navbar_menu_phone')[0].offsetHeight;
        // 菜单top
        let st_navbar_menu_phone_top = document.querySelector('.st_navbar_menu_phone');

        if (st_navbar_height == st_navbar_menu_height) {
            startMove(st_navbar_menu_height_box, { 'height': st_navbar_menu_phone });
            startMove(st_navbar_menu_phone_top, { 'top': 0 });
        } else {
            startMove(st_navbar_menu_height_box, { 'height': old_height });
            startMove(st_navbar_menu_phone_top, { 'top': -st_navbar_menu_phone });
        }
    })
}


