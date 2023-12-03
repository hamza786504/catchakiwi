$(function () {
    $(".sidebar_navigation ul li a").click(function (e) {
      e.preventDefault();
      $(".sidebar_navigation ul li a").removeClass("active");
      $(this).addClass("active");

      $(".sections .section").removeClass("active");
      const dataSection = $(this).data('section');
      $("#" + dataSection).addClass("active");
    });


    $('.accordion-button').click(function () {
      var accordionItem = $(this).closest('.accordion-item');
      $('.accordion-item').removeClass("open");
      accordionItem.addClass("open");
      var icon = accordionItem.hasClass('collapsed') ? '-' : '+';

      // Toggle the collapsed class and switch the icon
      accordionItem.toggleClass('collapsed');
      $(this).find('.accordion-button::before').text(icon);
  });

  });