const ProductsModel = require('../Models/ProductsModel');

class ProductsService {
    constructor() {
        this.ProductsModel = ProductsModel;
    }

    async getAllProduct() {
        try {
            const data = await this.ProductsModel.find({}).exec();
            return {
                success: true,
                message: 'get_products_success',
                result: {
                    products: data
                }
            }
        } catch (error) {
            return {
                success: false,
                message: 'get_product_fail',
                result: null
            } 
        }
    }
}

module.exports = new ProductsService();
