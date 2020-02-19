class Api::V1::UsersController < ApplicationController

    def index
        @users = User.all
    
        render json: @users.to_json(include: [:game]), status: 200
      end
    
    def show
        @user = User.find_by(name: params[:name])
    
        render json: @user, status: 200
      end

    def create
        @user = User.create(user_params)
        if @user.save
            render json: @user, status: 200
        end
    end

    private

    def user_params
        params.require(:user).permit(:name)
    end
end
