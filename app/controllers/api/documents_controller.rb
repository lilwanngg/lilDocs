class Api::DocumentsController < ApplicationController 
  def show
    @document = Document.find(params[:id])
    render :show
  end

  def index
    @documents = current_user.documents
    render :index
  end

  def create
    @document = Document.new
    @document.user_id = current_user.id
    if @document.save
      render :show
    else
      render json: @document.errors.full_messages, status: 401
    end
  end

  def update 
    @document = Document.find(params[:id])
    if @document.update(doc_params)
      render :show
    else
      render json: @document.errors.full_messages, status: 422
    end
  end

  def destroy
    document = Document.find(params[:id])
    document.destroy
  end

  def doc_params
    params.require(:document).permit(:title, :content)
  end

end