class Api::PermissionsController < ApplicationController 
  def index
    @permissions = Permission.all
    render :index
  end

  def create
    # permission = Permission.find(doc_id: params[:document_id], user_id: params[:user_id])
    @permission = Permission.new(permission_params)
    @permission.doc_id = params[:document_id]
    if @permission.save
        render :index
    else
      render json: @permission.errors.full_messages, status: 401
    end
  end

  def update 
    @permission = Document.find(params[:id])
    @permission.doc_id = params[:document_id]
    if @permission.update(permission_params)
      render :show
    else
      render json: @permission.errors.full_messages, status: 422
    end
  end

  def destroy
    permission = Permission.find(params[:id])
    permission.destroy
  end

  def permission_params
    params.require(:permission).permit(:permission_type)
  end

end