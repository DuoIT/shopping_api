const ProductsService = require('../../Services/ProductsService');

class ProductsController {
    constructor() {

    }
    //getAllProduct
    async getAllProduct({ req, res, next }) {
        const result = await ProductsService.getAllProduct();
        console.log(result);
        res.json(result);
    }
    //postProduct
    async postProduct({req, res, next}){
        const {body} = req;
        const result = await ProductsService.postProduct(body);
        console.log(result);
        res.json(result);
    }
    //updateProduct
    async updateProduct({req, res, next}){
        const {body} = req;
        const result = await ProductsService.updateProduct(body);
        console.log(result);
        res.json(result);
    }
    //getDetailProduct
    async getDetailProdutc({req, res, next}){
        const {body} = req;
        const result = await ProductsService.getDetailProduct(body);
        console.log(result);
        res.json(result);
    }
    //getProduct - by - cate
    async getProductbyCate({req, res, next}){
        const {body} = req;
        const result = await ProductsService.getProductByCate(body);
        console.log(result);
        res.json(result);
        
    }
    
    //postCategory
    async postCate({req, res, next}){
        const {body} = req;
        const result = await ProductsService.postCate(body);
        console.log(result);
        res.json(result);
    }
    //updateCategory
    async updateCate({req, res, next}){
        const {body} = req;
        const result = await ProductsService.updateCate(body);
        console.log(result);
        res.json(result);
    }
    //getCate
    async getCate({req, res, next}){
        const result = await ProductsService.getCate();
        console.log(result);
        res.json(result);
    }
    //addToCart
    async addToCart({req, res, next}){
        const {user, body} = req;
        const result = await ProductsService.addToCart();
        console.log(result);
        res.json(result);
    }
}

module.exports = new ProductsController();
