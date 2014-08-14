var questionSuccess = function(data){
  $("#question_list").append(data.html)
}

var createQuestion = function(event){
  event.preventDefault();

  $.ajax({
    dataType: 'json',
    url: "/questions",
    type: "POST",
    data: {
      content: $("#content").val(),
      survey_id: $("#survey_id").val()
    }
  }).done(questionSuccess(data))
}

$("#new_question").on("submit",  createQuestion);