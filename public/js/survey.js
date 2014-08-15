var ajaxCall = function(event) {
  event.preventDefault();
  console.log("preventing default")
  $.ajax({
    url: "/surveys",
    type: "POST",
    data: $(this).serialize()
  })
  .done(function(response) {
    $('#new_survey').after($(response.html)); //appends new question form
          // form title includes submitted surbey title
      console.log("Success!");
  })
  .fail(function() {
    console.log("Failed!");
  })
  .always(function() {
    console.log("Cycle complete");
  })
}

$('#survey_form').on('submit', ajaxCall);
