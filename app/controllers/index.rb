get '/' do
 redirect '/surveys'
end

get '/surveys' do
  @surveys = Survey.all
  erb :index
end

get '/surveys/new' do
  @surveys = Survey.all
  @new_survey = true
  erb :index
end

post '/surveys' do
  survey = Survey.new
  survey.title = params[:title]
  survey.author = params[:author]
  survey.save
  content_type :json
  question_data = erb :new_question, :layout => false, :locals => {survey_id: survey.id}
  {html: question_data}.to_json
end

post '/questions' do
  question = Question.new
  question.content = params[:content]
  question.survey_id = params[:survey_id]
  question.save

  content_type :json
  question_partial = erb :question, :layout => false, :locals => {question: question}
  {html: question_partial}.to_json
end

post '/questions/:id/delete' do
  question = Question.find(params[:id])
  question.destroy
  params[:id].to_json
end

#This is route for submitting the survey and questions
get '/survey/finish' do
  @surveys = Survey.all
  @new_survey = false
  erb :index
end

get '/survey/:id' do
  @survey = Survey.find(params[:id])
  erb :survey_page
end

post '/surveys/answers' do
  i = 1
  Survey.find(params[:id]).questions.each do |q|
    selector = "yes#{i}".to_sym
    if params[selector] == "yes"
      q.yes += 1
    else
      q.no += 1
    end
    q.save
    i += 1
  end

  redirect '/'
end

get '/surveys/answers/:id' do
  @survey = Survey.find(params[:id])
  @all_questions = survey.questions
  erb :survey_chart
end




