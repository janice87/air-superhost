class ApplicationController < ActionController::API
  include ActionController::Cookies
  before_action :authenticate_user
rescue_from ActiveRecord::RecordNotFound, with: :response_not_found
rescue_from ActiveRecord::RecordInvalid, with: :invalid_response

def current_user
  @current_user ||= User.find_by(id: session[:user_id])
end

private

def authenticate_user
  render json: {error: [User: "Not Authorized"]}, status: :unauthorized unless current_user
end

def response_not_found
  render json: {error: "Record not found"}, status: :not_found
end

def invalid_response(invalid)
  render json: {errors: invalid.record.errors.full_messages}, status: :unprocessable_entity
end

end
