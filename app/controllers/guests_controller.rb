class GuestsController < ApplicationController
    def index
        render json: Guest.all
    end

    def create
        guest = Guest.create!(guest_params)
        render json: guest, status: :created
    end

    def destroy
        guest = Guest.find(params[:id])
        guest.destroy
        head :no_content
    end

    private

    def guest_params
        params.permit(:name, :email)
    end
end
