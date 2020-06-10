Rails.application.routes.draw do
  defaults format: :json do
    resources :users, only: [:create]
  end
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end