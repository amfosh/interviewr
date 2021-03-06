class Api::V1::QuestionsController < ApplicationController

    def index
        questions = Question.all
        render json: questions
    end

    def create
        question = Question.new(question_params)
        user = User.find_by(params[:user_id])
        question.user = user
        if question.save
            render json: question, status: 200
        end
    end

    def update
        if params[:id] != 'undefined'
            question = Question.find(params[:id])
            question.update(question_params)
            render json: question, status: 200
        end
    end

    private

    def question_params
        params.require(:question).permit(:content, :user_id)
    end
end
