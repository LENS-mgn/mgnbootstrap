$('#gnav__toggle').click(function () {
  $("#gnav__inner").slideToggle();
  $(".gnav__toggle-off").removeClass(".gnav__toggle-off").addClass(".gnav__toggle-on");
  $(".gnav__toggle-on").removeClass(".gnav__toggle-on").addClass(".gnav__toggle-off");
})
