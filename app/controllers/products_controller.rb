class ProductsController < ApplicationController

  def index
  end
  
  def edit
  end

  def new
    @product = Product.new
    @product.images.new
    # ↓Sequl Proに直入力したユーザーIDを引っ張り出す記述
    @user = User.find(1)
  end

  def create
    # ↓Sequl Proに直入力したユーザーIDを引っ張り出す記述
    @user = User.find(1)
    @product = Product.new(product_params)
    # binding.pry
    if @product.save
      redirect_to root_path
    else
      render :new
    end
  end

  def show
  end

  private
  def product_params
    params.require(:product).permit(:name, :explanation, :category_id, :brand, :product_status, :delivery_cost, :shipping_origin, :delivery_day, :price, images_attributes: [:image]).merge(user_id: @user.id)
  end
end
