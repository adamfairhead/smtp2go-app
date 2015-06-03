$(function() {

  // Open and close the Reports/Settings sections

  $('.reports-title').on('click', function() {
    $('.reports').toggleClass('is-open');
    $('.settings').removeClass('is-open');
  });

  $('.settings-title').on('click', function() {
    $('.settings').toggleClass('is-open');
    $('.reports').removeClass('is-open');
  });


  // Select different parts of the navigation
  
  $('.page-navigation a').on('click', function() {
    
    if ($(this).parents('.dashboard').length) {
      $('.page-navigation a').parent().removeClass('is-selected');
      $('.page-navigation a').parent().removeClass('is-selected-parent');
      $(this).parent().addClass('is-selected');
    };

    if ($(this).parents('.reports ul').length) {
      $('.page-navigation a').parent().removeClass('is-selected');
      $('.page-navigation a').parent().removeClass('is-selected-parent');
      $(this).parent().addClass('is-selected');
      $('.reports').addClass('is-selected-parent');
    };

    if ($(this).parents('.settings ul').length) {
      $('.page-navigation a').parent().removeClass('is-selected');
      $('.page-navigation a').parent().removeClass('is-selected-parent');
      $(this).parent().addClass('is-selected');
      $('.settings').addClass('is-selected-parent');
    };
  });


  // Open navigation on small screens

  $('.open-nav, .page-navigation ul a, .dashboard a, .page-navigation .user, .page-navigation .logout').on('click', function() {
    $('body').toggleClass('nav-visible');
  });


  // User dropdown in the top-right corner

  $('.page-top .user').on('click', function() {
    $('.user-dropdown').toggleClass('is-visible');
    $('.user > a').toggleClass('is-selected');
  });

});
