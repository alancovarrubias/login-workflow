class ApplicationController < ActionController::Base
  rescue_from ActiveRecord::RecordNotFound do |e|
    render json: { error: "Not Found" }, status: :not_found
  end

  rescue_from ActionController::InvalidAuthenticityToken do |e|
    render json: { error: "Invalid token" }, status: :unauthorized
  end
end
