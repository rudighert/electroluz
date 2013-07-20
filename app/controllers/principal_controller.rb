# encoding: UTF-8
class PrincipalController < ApplicationController
  def index
    
  end

  def set_render
    @name_render = params[:name_render]
    session[:partial_define] = @name_render
    respond_to do |format|
      format.js do
        @template = render_to_string(partial: "pages/#{@name_render}", handlers: [:haml])
        render partial: 'set_render', formats: [:js]
      end
    end 
  end

  def show_subrender
    @name_render = params[:name_render]
    @subrender = params[:subrender]
    @selector = params[:selector]
    respond_to do |format|
      format.js do
        @template = render_to_string(partial: "renders/#{@name_render}", handlers: [:haml])
        render partial: 'sub_render', formats: [:js]
      end
    end 
  end
end
