// JavaScript Document

// NAV SLIDER -----
$("#nav-logo").click(function () {
  $("#nav-container").toggle("slide");
});
$("#nav-container").click(function () {
  $("#nav-container").toggle("slide");
});

// FILTER PROJECTS -----
$("#filter :checkbox").click(function () {
  var _showAll = $(".project").css('opacity', '1');
  if ($('#filter input:checkbox:checked').length > 0) {
    $(".project").css('opacity', '.2');
    $("#filter :checkbox:checked").each(function () {
      $("." + $(this).val()).css('opacity', '1');
    });
  } else {
    _showAll;
  }
});

// TOOLTIP -----
$(document).ready(function () {
  $('[data-toggle="tooltip"]').tooltip();
  $('[data-toggle="popover"]').popover();
});
