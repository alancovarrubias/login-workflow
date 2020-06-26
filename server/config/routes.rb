Rails.application.routes.draw do
  defaults format: :json do
    resources :users, only: [:create]
    resource :session, only: [:create, :destroy]
  end
end
