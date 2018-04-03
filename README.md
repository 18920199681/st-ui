# st-ui
基于 j Query 封装一些常用ui组件
## 

## 使用方法
引入css文件夹下的 st-ui.css 文件；
js文件夹下的 moveBox.js 文件；
js文件夹下的 st-ui.js 文件；

注意：moveBox.js 文件 要在 st-ui 文件之前引入；JS方法的参数是json对象格式。

## 
## 布局

采用rem布局，整屏宽分为12等分，即整屏宽等于12rem。

## 
## 导航条

##### 效果演示

###### pc端效果图 :
![navbar](./effect_img/navbar_pc.png)

###### 手机端（右侧菜单会变成下拉形式）:
![navbar](./effect_img/navbar_phone.png)

##### HTML
```
<div class="st_navbar"></div>
<div class="st_navbar_menu_height"></div>
<div class="st_navbar_menu_phone">
    <ul>&nbsp;</ul>
</div>
```

##### JavaScript
```
st_navbar({
    logo: './images/logo.png',
    company_name: 'company_name',
    navbar_menu: ["首页", "第二页", "第三页"]
});
```

##### 参数说明：
参数格式：json对象

参数名 | 参数说明
----|------
logo | 网站logo
company_name | 网站表示语言或公司名，在logo右侧
navbar_menu | 导航菜单，位于导航条右侧
# 