Rails.application.routes.draw do
  root 'homes#index'
  
  devise_for :users

  namespace :api do
    namespace :v1 do
      resources :countries, only: [:index, :show, :create], param: :slug
      resources :posts, only: [:index, :show, :create, :destroy], param: :id
      resources :comments, only: [:create, :destroy]
      resources :post_likes, only: [:create]
      resources :comment_likes, only: [:create]
      resources :cities, only: [:show, :index, :create]
      resources :users, only: [:show], param: :username
      resources :trips, only: [:show, :create, :update], param: :id
      resources :destinations, only: [:create, :update]
    end
  end

  get "*path", to: "homes#index", via: :all
end