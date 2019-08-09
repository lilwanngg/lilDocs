class Api::PermissionsController < ApplicationController 
  def show
    @permission = Permission.includes(:user).find_by(id: params[:id])
    render :show
  end
  
  def index
    @permissions = current_user.permissions
    # @permissions = Permission.all.where(doc_id: params)
    render :index
  end

  def create
    @permission = Permission.new(permission_params)
    if @permission.save
        render :show
    else
      render json: @permission.errors.full_messages, status: 401
    end
  end

  def update
    @permission = Permission.find_by(id: params[:id])
    if @permission.update(permission_params)
      render :show
    else
      render json: @permission.errors.full_messages, status: 401
    end
  end

  def destroy
    permission = Permission.find(params[:id])
    permission.destroy
  end

  def permission_params
    params.require(:permission).permit(:user_id, :doc_id, :permission_type)
  end

end