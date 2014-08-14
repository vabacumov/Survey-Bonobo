$(document).ready(function() {
  // This is called after the document has loaded in its entirety
  // This guarantees that any elements we bind to will exist on the page
  // when we try to bind to them

  // See: http://docs.jquery.com/Tutorials:Introducing_$(document).ready()
  var surveyCreater = $("#create_survey_button");
  surveyCreater.click(function(){
    var scrollToNewSurvey = $("#new_survey");
    surveyCreater.animate(scrollToNewSurvey, 1000);
  });

});


// jquery => $("")
// equals
// javascript => getById, getByClassName, querySelector


// jquery =>
//     surveyCreater.click();
//     surveyCreater.on("click", );
// is the same thing as
// Javascript =>

// document.getById("create_survey_button").addEventListener("click",function(){

})
