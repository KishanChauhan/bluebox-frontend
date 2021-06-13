// AOS.init();

// $('.slider').slick({
//     dots: true,
//     infinite: true,
//     speed: 1500,
//     slidesToShow: 3,
//     slidesToScroll: 3,
//     dots:false,
//     arrrows:true,
//     prevArrow:'<button class="btn prevBtn"><i class="fa fa-angle-left"></i></button>',
//     nextArrow:'<button class="btn nextBtn"><i class="fa fa-angle-right"></i></button>',
//     responsive: [
//       {
//         breakpoint: 1024,
//         settings: {
//           slidesToShow: 3,
//           slidesToScroll: 3,
//           infinite: true,
//           dots: false
//         }
//       },
//       {
//         breakpoint: 600,
//         settings: {
//           slidesToShow: 2,
//           slidesToScroll: 2
//         }
//       },
//       {
//         breakpoint: 480,
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1
//         }
//       }
//       // You can unslick at a given breakpoint now by adding:
//       // settings: "unslick"
//       // instead of a settings object
//     ]
//   });


//   $(window).scroll(function(){
//     if($(window).scrollTop() > 150){
//       $("nav").addClass('header-float')
//     }
//     else{
//         $("nav").removeClass('header-float')
//     }
//   })

  $('.step1Btn').click(function(){
    $('.step1').hide(400)
    $('.step2').show(500)
    $('.st1').removeClass('active')
    $('.st2').addClass('active')
  })
  $('.step2Btn').click(function(){
    $('.step2').hide(400)
    $('.step3').show(500)
    $('.st2').removeClass('active')
    $('.st3').addClass('active')
  })
  $('.step3Btn').click(function(){
    $('.step3').hide(400)
    $('.step4').show(500)
    $('.st3').removeClass('active')
    $('.st4').addClass('active')
  })

  $('.step2BackBtn').click(function(){
    $('.step2').hide(400)
    $('.step1').show(500)
    $('.st2').removeClass('active')
    $('.st1').addClass('active')
  })
  $('.step3BackBtn').click(function(){
    $('.step3').hide(400)
    $('.step2').show(500)
    $('.st3').removeClass('active')
    $('.st2').addClass('active')
  })
  $('.step4BackBtn').click(function(){
    $('.step4').hide(400)
    $('.step3').show(500)
    $('.st4').removeClass('active')
    $('.st3').addClass('active')
  })

  $('.pagination button').click(function(){
    $('.pagination button').removeClass('active')
    $(this).addClass('active')
  })

  function inc1(){
    document.getElementById('inpNum1').stepUp()
  }
  function dec1(){
   document.getElementById('inpNum1').stepDown()
  }

  function inc2(){
    document.getElementById('inpNum2').stepUp()
  }
  function dec2(){
   document.getElementById('inpNum2').stepDown()
  }

  function inc3(){
    document.getElementById('inpNum3').stepUp()
  }
  function dec3(){
   document.getElementById('inpNum3').stepDown()
  }

  function inc4(){
    document.getElementById('inpNum4').stepUp()
  }
  function dec4(){
   document.getElementById('inpNum4').stepDown()
  }