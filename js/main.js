/* main.js */
$(function(){
    $('#category_btn').click(function(){
        $('#category').slideToggle();
    });
    
    // 다른곳 누르면 자동으로 닫기
    $('header, section').click(function(){
      $('#category').slideUp();
    });


    // 상품리스트 추가
  var item_list1 = $('.item_list1');  // 상품 목록 위치
  var list = '';  // 삽입될 html data
  var list_num = 5;  // 상품 목록 갯수
  var kwd = '원';
  var origin_price = '';

  for(var i = 0; i < list_num; i++) {
    list += '<li>';
    list += '<a href="#">';
    list += '<img src="' + product_data1[i].img_url + '" alt="상품이미지">';
    list += '<span class="title">' + product_data1[i].title + '</span>';
    list += '<span class="name">' + product_data1[i].name + '</span>'

    if(product_data1[i].origin_price == "") {
      kwd = "&nbsp;";
      origin_price = "";
    } else { origin_price = product_data1[i].origin_price;}

    list += '<del class="origin_price">' + origin_price + kwd + '</del>';
    list += '<ins class="sale_price"><strong>' + product_data1[i].sale_price + '원</strong></ins>';
  }

  item_list1.append(list);

    // 상품리스트 추가2
  var item_list2 = $('.item_list2');  // 상품 목록 위치
  var list = '';  // 삽입될 html data
  var list_num = 5;  // 상품 목록 갯수
  var kwd = '원';
  var origin_price = '';

  for(var i = 0; i < list_num; i++) {
    list += '<li>';
    list += '<a href="#">';
    list += '<img src="' + product_data2[i].img_url + '" alt="상품이미지">';
    list += '<span class="title">' + product_data2[i].title + '</span>';
    list += '<span class="name">' + product_data2[i].name + '</span>'

    if(product_data2[i].origin_price == "") {
      kwd = "&nbsp;";
      origin_price = "";
    } else { origin_price = product_data2[i].origin_price;}

    list += '<del class="origin_price">' + origin_price + kwd + '</del>';
    list += '<ins class="sale_price"><strong>' + product_data2[i].sale_price + '원</strong></ins>';
  }

  item_list2.append(list);

});

/* bx_slider */
$(document).ready(function(){
    $('.slider').bxSlider({
        // 여기에 옴션설정
        mode: 'horizontal',  // 효과설정
        auto: true,
        speed: 500,
        pause: 4000,
        easing: "ease-in-out",
        autoHover: true,
        responsive: false,
        pager : true,  // 하단 인티케이터 표시/비표시(fales)
    });
});