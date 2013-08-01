$(document).ready(function(){
  startScrollInit()
  $('.conten_menu').on('click','li.item',function(){
    var name_render = $(this).data('name_render')
    setRender(name_render)
  })
  $('#view_info_team').live('click','.show_team',function(){
    showTeam()
  })


})

function setRender(name_render){
  var name_render = name_render
  $('.content_wrapper').fadeOut(500,function(){
    $('.content_wrapper').html('')
    $('.item a').removeClass('active')
    $('.item[data-name_render="'+name_render+'"] a').addClass('active')
    $.get(render_path,{name_render: name_render}, function(data){
    });
  }) 
}

function setSubRender(name_render,selector, subrender){
  var name_render = name_render
  var subrender = subrender
  var selector = selector
  $('.'+selector).fadeOut(500,function(){
    $('.'+selector).html('')
    $.get(subrender_path,{name_render: name_render, subrender: subrender, selector: selector}, function(data){
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

function servicesGalleries(){
  $('.image_gallery').carouFredSel({
    items:{visible:1},
    scroll:{
      duration: 800
    }
  });
}

function actionForWho(){
  $('.menu_who').on('click','.item_who',function(){
    var name_render = $(this).data('name_render')
    var selector    = $(this).data('selector')
    var subrender   = $(this).data('subrender')
    setSubRender(name_render, selector,subrender)
  })
}

function setWhoSelect(selector){
  $('.menu_vertical .item_who').removeClass('active')
  $('.menu_vertical .item_who[data-subrender='+selector+']').addClass('active')
}

function showTeam(){
  mixpanel.track("Pestaña Visitada",{"nombre pestaña" : "showTeam"});
  $("#team_exoluz").modal({
    opacity:70, 
    overlayCss: {backgroundColor:"black"},
    overlayClose: true
  });

}