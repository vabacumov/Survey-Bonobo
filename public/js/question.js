var questionSuccess = function(data){
  $("#question_list").append(data.html)
}

var deleteSuccess = function(data){
  $("#" + data).remove();
}

var createQuestion = function(event){
  event.preventDefault();

  $.ajax({
    url: "/questions",
    type: "POST",
    data: {
      content: $("#content").val(),
      survey_id: $("#survey_id").val()
    }
  }).done(questionSuccess)
}

var deleteQuestion = function(event){
  event.preventDefault();

  $.ajax({
  url: "/questions/" + $(this).data("id") + "/delete",
  type: "POST",
  }).done(questionSuccess)
}

// $("#new_question").on("submit",  createQuestion);
$("#questionDelete").on("click", deleteQuestion);
