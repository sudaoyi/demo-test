
  $("#navShopMenu").find('li').each(function(i,v){
      $(v).on('mouseenter',function(){
          $(v).find(".nav-shop-submenu").addClass('active')
      })
       $(v).on('mouseleave',function(){
          $(v).find(".nav-shop-submenu").removeClass('active')
      })
  })


$('.left-btn').on('click',function(){
    console.log('fefe')
});

$('.right-btn').on('click',banner)

;(function(){
    var bannerTime=setInterval(banner,5000)
     $('.banner-content').on('mouseenter',function(){
         clearInterval(bannerTime)
     })
     $('.banner-content').on('mouseleave',function(){
         bannerTime=setInterval(banner,5000)
     })
}())



function banner(){
    $('.banner-content').animate({marginLeft:'-1500px'},1000,function(){
        $('.banner-content').css({marginLeft:'0px'})
        $('.banner-content').find('img').eq(0).remove().clone(true).appendTo('.banner-content')
    })
}
