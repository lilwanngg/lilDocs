Rails.application.routes.draw do
  root to: 'static_pages#root'

  namespace :api, defaults: { format: :json } do
    resources :users, only: [:create, :index, :show ]
    resource :session, only: [:create, :destroy, :show]
    resources :documents, only: [:create, :show, :index, :update, :destroy] do
      resources :comments, only: [:create, :destroy]
    end
    
    get "/verify_user", to: "users#verify_user"


  end
  
end
