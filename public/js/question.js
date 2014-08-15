
var deleteSuccess = function(data){
  var selector = "#" + JSON.parse(data);
  $(selector).remove();
}

var deleteQuestion = function(event){
  event.preventDefault();

  $.ajax({
  url: "/questions/" + $(this).data("id") + "/delete",
  type: "POST",
  }).done(deleteSuccess)
}

var questionSuccess = function(data){
  var new_question = $(data.html);
  new_question.addClass("rowColorGray");
  new_question.css("border", "1px solid black");
  $("#question_list").append(new_question);
  $("#questionDelete").on('click', deleteQuestion);
}

var createQuestion = function(event){
  event.preventDefault();

  $.ajax({
    url: "/questions",
    type: "POST",
    data: $(this).serialize()
  }).done(questionSuccess)
}
