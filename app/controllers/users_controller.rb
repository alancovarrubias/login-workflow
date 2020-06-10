class UsersController < ApplicationController
  # POST /users
  # POST /users.json
  def create
    @user = User.new(user_params)

    respond_to do |format|
      if @user.save
        format.json { render json: @user, status: :created }
      else
        format.json { render json: @user.errors, status: :bad_request }
      end
    end
  end

  private
    # Only allow a list of trusted parameters through.
    def user_params
      params.require(:user).permit(:username, :password)
    end
end
