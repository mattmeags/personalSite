var mm={
   navConfig:  function(){
    var nav = $('nav');
    var navHeight = nav.height();
    console.log("navHeight: " + navHeight);
    var bodyHeight = $('html').height();
    console.log("bodyHeight: " + bodyHeight);
    var topPos = (bodyHeight/2) - navHeight;
    nav.css("top", topPos);
    $('.contentWrapper').css('top', topPos);
  },
  navClick: function(f, pos){
    var target = $(f).attr('href');
//first link click
    if(pos == 'auto'){
      $('nav').animate({
        right: "250px"
      }, 500, mm.addContent(target));
    }else{
      //every other link click
      $('.active').animate({
        top: "+=15px"
      },200, function(){
        $('.active').fadeOut(200).removeClass('active');
        mm.addContent(target);
      });
      //mm.addContent(target);
    }
  },
  addContent: function(target){
    console.log('addcontent');
    $(target).fadeIn(200).animate({
      top: "-=15px"
    },200);
    $(target).addClass('active');
  },
  getRightPos: function(){
    return $('nav').css('right');
  },
  setActive: function(j){
    
    $('.activeLink').removeClass('activeLink');
    $(j).addClass('activeLink');
    return;
  }
}

$(document).ready(function(){
  mm.navConfig();
  $("nav ul li a").click(function(){
    var pos = mm.getRightPos(this);
    //12alert(pos);
    mm.setActive(this);
    mm.navClick(this, pos);

  });
});
