class UsersController < ApplicationController
      #  get '/me'    
      def show       
        render json: current_user, status: :ok
    end
    
    # post '/signup'
    def create       
        user = User.create!(user_params)
        session[:user_id] = user.id
        render json: user, status: :created    
    end

    private

    def user_params       
        params.permit(:username, :name, :password, :password_confirmation)
    end
end