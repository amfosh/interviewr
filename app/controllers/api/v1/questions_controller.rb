class Api::V1::QuestionsController < ApplicationController

    def index
        @questions = Question.all

        render json: @questions, status: 200
    end

    def create
        @question = Question.new(question_params)
        if @question.save
            render json: @question, status: 200
        end
    end

    private

    def question_params
        params.require(:question).permit(:ask, :dont_ask, :user_id)
    end
end
