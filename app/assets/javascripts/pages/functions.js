$(document).ready(function(){
  startScrollInit()
  $('.conten_menu').on('click','.item',function(){
    var name_render = $(this).data('name_render')
    setRender(name_render)
  })
})

function setRender(name_render){
  var name_render = name_render
  $('.content_wrapper').fadeOut(500,function(){
    $('.content_wrapper').html('')
    $('.item a').removeClass('active')
    $('.item[data-name_render="'+name_render+'"] a').addClass('active')
    $.get(render,{name_render: name_render}, function(data){
    });
  }) 
}

function startScrollInit(){
  $('.area_banner').carouFredSel({
    items:{visible:1},
    scroll:{
      duration: 1000
    }
  });
}

