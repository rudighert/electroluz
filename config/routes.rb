Electroluz::Application.routes.draw do
  
  resources :principal, only:[:set_render] do
    collection do
      get :set_render
      get :show_subrender
    end
  end
  root :to => "principal#index"
end
