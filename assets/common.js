if (matchMedia('only screen and (max-width: 768px)').matches) {
  swiper = new Swiper('.swiper', {
    slidesPerView: 1.2,
    spaceBetween: 10,
    centeredSlides: true,
  });
  }else{
  
  }
  
$(function(){
  $('.question').click(function(){
    $(this).toggleClass('active');
    $(this).next().slideToggle();
  });
});
