class HomesController < ApplicationController
  before_action :authenticate_user!, except: [:index, :authorized]
  before_action :authorize_user, except: [:index, :authenticated]


  def index
  end

  def authenticated
  end

  def authorized
  end

  protected

  def authorize_user
    if !user_signed_in? || !(current_user.role == "admin")
      flash[:notice] = "You do not have access to this page."
      redirect_to root_path
    end
  end
end
