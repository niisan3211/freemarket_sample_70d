class ProductsController < ApplicationController

  before_action :set_product, except: [:index, :new, :create]

  def index
  end
  
  def new
    @product = Product.new
    @product.images.new
    # ↓Sequl Proに直入力したユーザーIDを引っ張り出す記述
    # ↓ユーザー登録機能実装後は不要
    @user = User.find(1)
  end

  def create
    # ↓Sequl Proに直入力したユーザーIDを引っ張り出す記述
    # ↓ユーザー登録機能実装後は不要
    @user = User.find(1)
    @product = Product.new(product_params)
    if @product.save
      redirect_to root_path
    else
      render :new
    end
  end

  def show
  end

  def edit
    
  end

  def update
    @user = User.find(1)
    if @product.update(product_params)
      redirect_to root_path
    else
      render :edit
    end
  end

  def destroy
    @product.destroy
    redirect_to root_path
  end

  private
  def product_params
    params.require(:product).permit(:name, :explanation, :category_id, :brand, :product_status, :delivery_cost, :shipping_origin, :delivery_day, :price, images_attributes: [:image, :_destroy, :id]).merge(user_id: @user.id)
    # ↑ @user.idの部分はユーザー登録機能実装後は<"current_user.id">に変更
  end

  def set_product
    @product = Product.find(params[:id])
  end
end
