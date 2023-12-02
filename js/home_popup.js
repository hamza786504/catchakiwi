$(function () {
    $(".sidebar_navigation ul li a").click(function (e) {
      e.preventDefault();
      $(".sidebar_navigation ul li a").removeClass("active");
      $(this).addClass("active");

      $(".sections .section").removeClass("active");
      const dataSection = $(this).data('section');
      $("#" + dataSection).addClass("active");
    });
  });