const ProductsService = require('../../Services/ProductsService');

class ProductsController {
    constructor() {

    }

    async getAllProduct({ req, res, next }) {
        const result = await ProductsService.getAllProduct();
        console.log(result);
        
        res.json(result);
    }
}

module.exports = new ProductsController();
