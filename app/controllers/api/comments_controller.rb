class Api::CommentsController < ApplicationController

    def index
        document = Document.find_by(id: params[:document_id])
        @comments = Comment.where(doc_id: document.id).all
        render :index
    end

    def show
        @comment = Comment.find_by(id: params[:id])
        render :show
    end

    def create
        @comment = Comment.new(comment_params)
        @comment.user_id = current_user.id
        @comment.doc_id = params[:doc_id]
        if @comment.save
            render :show
        else
            render json: @comment.errors.full_messages, status: 422
        end
    end

    def update
        @comment = Comment.find(params[:id])
        if @comment.update(comment_params)
            render :show
        else
            render json: @comment.errors.full_messages, status: 422
        end
    end

    def destroy
        comment = Comment.find(params[:id])
        comment.destroy
    end

    def comment_params
        params.require(:comment).permit(:comment, :start_index, :end_index, :resolved)
    end


end
