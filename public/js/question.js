
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
  $("#question_list").append(data.html)
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
