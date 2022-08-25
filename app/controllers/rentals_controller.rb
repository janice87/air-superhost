class RentalsController < ApplicationController
    skip_before_action :authenticate_user, only: [:index, :show]
    
    def index
        render json: Rental.all.order(:location)
    end

    def show
        rental = Rental.find(params[:id])
        render json: rental, status: :ok
    end

    def create
        #byebug        
        rental = Rental.create!(rental_params)        
        render json: rental, status: :created
    end

    def update
        rental = Rental.find(params[:id])
        rental.update!(rental_params)
        render json: rental, status: :accepted

    end

    def destroy
        rental = Rental.find(params[:id])
        rental.destroy
        head :no_content
    end

    private

    def rental_params       
        params.permit(:name, :location, :price, :rating, :description, :image, :user_id, :guest_id)
    end
end
