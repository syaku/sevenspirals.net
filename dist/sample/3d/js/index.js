var rotateX = 60;

$(function(){
  window.setInterval(function(){
    rotateX = (rotateX + 1) % 360;
    $("#content").css('transform','rotateX('+rotateX+'deg) rotateZ(-50deg)');
  }, 20);
});
