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
        render :show
      else
        render json: [" Email could not be found"], status: 404
      end
  end

  def email_to_permission
    @user = User.find_by(email: params[:email])
      if @user
        old_permission = Permission.find_by(user_id: @user.id, doc_id: params[:doc_id])
        if old_permission
          old_permission.destroy
        end
        permission = Permission.new(user_id: @user.id, doc_id: params[:doc_id], permission_type: params[:type])
        if permission.save
          render :show
        # else
        #   render json: [" User permission already exists "], status: 422
        end
      else
        render json: [" Email could not be found"], status: 404
      end
  end

  def user_params
    params.require(:user).permit(:first_name, :last_name, :email, :password)
  end

end