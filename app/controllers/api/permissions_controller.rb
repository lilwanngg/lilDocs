class Api::PermissionsController < ApplicationController 
  def index
    @permissions = current_user.permissions
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

  # def destroy
  #   permission = Permission.find(params[:id])
  #   permission.destroy
  # end

  def permission_params
    params.require(:permission).permit(:user_id, :doc_id, :permission_type)
  end

end