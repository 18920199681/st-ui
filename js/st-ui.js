document.querySelector('html').style.fontSize = document.querySelector('html').clientWidth / 12 + 'px';
window.onresize = function () {
    document.querySelector('html').style.fontSize = document.querySelector('html').clientWidth / 12 + 'px'
}

/**
*导航条
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

}


