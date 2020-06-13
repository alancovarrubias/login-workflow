class UsersController < ApplicationController
  # protect_from_forgery except: [:create]
  def create
    @user = User.new(user_params)

    respond_to do |format|
      if @user.save
        format.json { render status: :created }
      else
        format.json { render json: { errors: @user.errors }, status: :unprocessable_entity }
      end
    end
  end

  private
    # Only allow a list of trusted parameters through.
    def user_params
      params.require(:user).permit(:username, :password)
    end
end
