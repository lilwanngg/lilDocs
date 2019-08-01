class Api::UsersController < ApplicationController 
  def show
    @user = User.find(params[:id])
    render :show
  end

  def index
    @users = User.all
    render :index
  end

  def create
    @user = User.new(user_params)
    if @user.save
      login!(@user)
      render :show
    else
      render json: @user.errors.full_messages, status: 401
    end

  end

  def verify_user
    @user = User.find_by(email: params[:email])
      if @user
        render json: @user
      else
        render json: @user.errors.full_messages, status: 404
      end
  end

  def user_params
    params.require(:user).permit(:first_name, :last_name, :email, :password)
  end

end