$(window).ready(function() {
  $("#nav-button").click(function() {

    if ($("#nav-toggle-2").prop('checked')) {
      $("#nav-button").toggleClass('active');
      let status = $("#nav-toggle-2").prop('checked')
      $("#nav-toggle-2").prop('checked', !status);
      $("body").css('position', 'static');
    } else if ($("#nav-toggle-3").prop('checked')) {
      $(".black-logo").css('display', '');
      $("#nav-button").toggleClass('active');
      $("body").css('position', 'static');
      $(".nav-container ul li").css('background', '');
      // $(".portfolio-content-wrapper").css('visibility', '');



      let status = $("#nav-toggle-3").prop('checked')
      $("#nav-toggle-3").prop('checked', !status);
      let status1 = $("#nav-toggle-4").prop('checked')
      $("#nav-toggle-4").prop('checked', !status1);

      // $("#portfolio-2").css('visibility', 'hidden');
      // $("#portfolio-2").css('opacity', '0');

      $("#portfolio-1").css('visibility', '');
      $("#portfolio-1").css('opacity', '');

      $("#portfolio-2").css('visibility', '');
      $("#portfolio-2").css('opacity', '');

      $("#portfolio-3").css('visibility', '');
      $("#portfolio-3").css('opacity', '');

      $("#portfolio-4").css('visibility', '');
      $("#portfolio-4").css('opacity', '');

      $(".portfolio-content-wrapper").css('transition-duration', '0s');

    } else {
      $(this).toggleClass('active');
      let status = $("#nav-toggle-1").prop('checked')
      $("#nav-toggle-1").prop('checked', !status);
      $("body").css('position', 'static');
    }

    if ($("#nav-toggle-1").prop('checked') || $("#nav-toggle-2").prop('checked')) {
      console.log('test')
      $("body").css('position', 'fixed');
    }


  })

  $("#qoute-button").click(function() {
    // alert(1);
    $("#nav-button").toggleClass('active');
    // $(this).toggleClass('active');
    let status = $("#nav-toggle-2").prop('checked')
    $("#nav-toggle-2").prop('checked', !status);
    $("body").css('position', 'fixed');
  })


  $("#contact-button").click(function() {
    // alert(1);
    $("#nav-button").toggleClass('active');
    // $(this).toggleClass('active');
    let status = $("#nav-toggle-2").prop('checked')
    $("#nav-toggle-2").prop('checked', !status);
    $("body").css('position', 'fixed');
  })

  $("#portfolio-button-1").click(function() {
    $(".black-logo").css('display', 'none');
    $("#nav-button").toggleClass('active');
    // $(this).toggleClass('active');
    let status = $("#nav-toggle-3").prop('checked')
    $("#nav-toggle-3").prop('checked', !status);


    setTimeout(() => {
      let status1 = $("#nav-toggle-4").prop('checked');
      $("#nav-toggle-4").prop('checked', !status1);
    }, 300);


    $(".nav-container ul li").css('background', 'black');
    $("#portfolio-1").css('visibility', 'visible');
    $("#portfolio-1").css('opacity', '1');
    $("body").css('position', 'fixed');
    $(".portfolio-content-wrapper").css('transition-duration', '3s');
  })


  $("#portfolio-button-2").click(function() {
    $(".black-logo").css('display', 'none');
    $("#nav-button").toggleClass('active');
    // $(this).toggleClass('active');
    let status = $("#nav-toggle-3").prop('checked')
    $("#nav-toggle-3").prop('checked', !status);

    setTimeout(() => {
      let status1 = $("#nav-toggle-4").prop('checked');
      $("#nav-toggle-4").prop('checked', !status1);
    }, 300);

    $(".nav-container ul li").css('background', 'black');
    $("#portfolio-2").css('visibility', 'visible');
    $("#portfolio-2").css('opacity', '1');
    $("body").css('position', 'fixed');
    $(".portfolio-content-wrapper").css('transition-duration', '3s');
  })

  $("#portfolio-button-3").click(function() {
    // alert(1);
    $(".black-logo").css('display', 'none');
    $("#nav-button").toggleClass('active');
    // $(this).toggleClass('active');
    let status = $("#nav-toggle-3").prop('checked')
    $("#nav-toggle-3").prop('checked', !status);

    setTimeout(() => {
      let status1 = $("#nav-toggle-4").prop('checked');
      $("#nav-toggle-4").prop('checked', !status1);
    }, 300);

    $(".nav-container ul li").css('background', 'black');
    $("#portfolio-3").css('visibility', 'visible');
    $("#portfolio-3").css('opacity', '1');
    $("body").css('position', 'fixed');
    $(".portfolio-content-wrapper").css('transition-duration', '3s');
  })

  $("#portfolio-button-4").click(function() {
    // alert(1);
    $(".black-logo").css('display', 'none');
    $("#nav-button").toggleClass('active');
    // $(this).toggleClass('active');
    let status = $("#nav-toggle-3").prop('checked')
    $("#nav-toggle-3").prop('checked', !status);

    setTimeout(() => {
      let status1 = $("#nav-toggle-4").prop('checked');
      $("#nav-toggle-4").prop('checked', !status1);
    }, 300);

    $(".nav-container ul li").css('background', 'black');
    $("#portfolio-4").css('visibility', 'visible');
    $("#portfolio-4").css('opacity', '1');
    $("body").css('position', 'fixed');
    $(".portfolio-content-wrapper").css('transition-duration', '3s');
  })


  $('#form-button').click( button =>{

    let name = document.getElementById('name');
    let email = document.getElementById('email');
    let country = document.getElementById('country');
    let message = document.getElementById('message');

    let formData = {
      name: name.value,
      email: email.value,
      country: country.value,
      message: message.value
    };

    let xhr = new XMLHttpRequest();
    xhr.open('POST','https://forward.haxia.co:5000')
    xhr.setRequestHeader('content-type','application/json');
    xhr.send(JSON.stringify(formData))

    document.getElementById("nav-toggle-2").checked = false;


    document.getElementById("menu_background").style.display = 'block';
    document.getElementById("menu_background").style.transform = 'scale(2000)';
    document.getElementById("menu_background").style.visibility = 'visible';

    document.getElementById("nav-toggle-5").checked = true;

    setTimeout(() => {
        // document.getElementById("menu_background").style.visibility = 'hidden';
        document.getElementById("nav-toggle-5").checked = false;
        document.getElementById("menu_background").style.transform = '';
        document.getElementById("menu_background").style.display = '';
    document.getElementById("menu_background").style.visibility = '';
    $("#nav-button").toggleClass('active');
      console.log('badr')
    }, 4000)


  });


});
