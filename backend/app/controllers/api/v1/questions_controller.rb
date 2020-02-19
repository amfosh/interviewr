class Api::V1::QuestionsController < ApplicationController

    def index
        @questions = Question.all
        # @ask_questions = Question.ask 
        # @dont_ask_questions = Question.dont_ask
        render json: @questions
        # render json: @ask_questions
        # render json: @dont_ask_questions
    end

    def create
        @question = Question.new(question_params)
        @user = User.find(params[:name])
        @question.user = @user
        if @question.save
            render json: @question, status: 200
        end
    end

    private

    def question_params
        params.require(:question).permit(:ask, :dont_ask, :user_id)
    end
end
