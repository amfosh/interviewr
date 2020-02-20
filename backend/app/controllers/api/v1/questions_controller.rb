class Api::V1::QuestionsController < ApplicationController

    def index
        questions = Question.all
        render json: questions
    end

    def create
        binding.pry
        question = Question.new(question_params)
        user = User.find(params[:user_id])
        question.user = user
        if question.save
            render json: question, status: 200
        end
    end

    private

    def question_params
        params.require(:question).permit(:ask, :dont_ask, :user_id)
    end
end
