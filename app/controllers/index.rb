get '/' do
 redirect '/surveys'
end

get '/surveys' do
 erb :index
end

get '/surveys/new' do
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
  Question.create()
end
