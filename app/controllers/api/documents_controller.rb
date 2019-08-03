class Api::DocumentsController < ApplicationController 
  def show
    @document = Document.find(params[:id])
    render :show
  end

  def index
    @documents = Document.all
    render :index
  end

  def create
    @document = User.new(doc_params)
    if @document.save
      render :show
    else
      render json: @document.errors.full_messages, status: 401
    end
  end

  def destroy
    document = Document.find(params[:id])
    document.destroy
    render :index
  end

  def doc_params
    params.require(:document).permit(:title)
  end

end