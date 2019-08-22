Rails.application.routes.draw do

  get '/pages/about', to: 'pages#about'
  get '/pages/contactus', to: 'pages#contactus'
  root to: 'pages#home'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
