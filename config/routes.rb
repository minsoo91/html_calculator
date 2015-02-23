Rails.application.routes.draw do
  root 'static_pages#root'
  namespace :api do
    resource :calculator
  end
end
