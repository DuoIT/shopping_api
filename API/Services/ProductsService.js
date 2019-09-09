const ProductsModel = require('../Models/ProductsModel');
const CatesModel = require('../Models/CateModel');
const CartsModel = require('../Models/CartModel');

class ProductsService {
    constructor() {
        this.ProductsModel = ProductsModel;
        this.CatesModel = CatesModel;
        this.CatesModel = CartsModel;
    }
    //postProduct
    async postProduct(body) {
        const name = body.name;
        const image = body.image;
        const overview = body.overview;
        const category = body.category;
        const describe = body.describe;
        const price = body.price;
        const stock = body.stock
        if (!body.name || !body.image || !body.overview || !body.category || !body.describe || !body.price || !body.stock) {
            return {
                message: 'name_or_image_or_overview_or_category_or_describle_or_price_or_stock_is_required!!!'
            }
        }
        const dataProduct = new this.ProductsModel({
            name: body.name,
            image: body.image,
            overview: body.overview,
            category: body.category,
            describe: body.describe,
            price: body.price,
            stock: body.stock
        });
        const NewProduct = await dataProduct.save()
        console.log(NewProduct);
        return {
            success: true,
            message: 'Add product success!!!',
            data: dataProduct
        }
    }
    //updateProduct
    async updateProduct(body) {
        const newname = body.name;
        const newimage = body.image;
        const newoverview = body.overview;
        const newcategory = body.category;
        const newdescribe = body.describe;
        const newprice = body.price;
        const newstock = body.stock
        if (!body.name || !body.image || !body.overview || !body.category || !body.describe || !body.price || !body.stock) {
            return {
                message: 'name_or_image_or_overview_or_category_or_describle_or_price_or_stock_is_required!!!'
            }
        }
        const product = await this.ProductsModel.findById(body._id).exec();
        //console.log(product);
        product.name = newname,
            product.image = newimage,
            product.overview = newoverview,
            product.category = newcategory,
            product.describe = newdescribe,
            product.price = newprice,
            product.stock = newstock
        product.save();
        if (!product) {
            return {
                message: 'update_wrong!!',
                data: null,
                success: false
            }
        }
        return {
            message: 'update_success!!',
            data: product,
            success: true
        }
    }
    //getProduct(user, admin)
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
    //getProduct-by-id
    async getDetailProduct(body){
        console.log(body);
        if(!body){
            return{
                message:'product_wrong!!',
                data: null
            }
        }
        const detailProduct = await this.ProductsModel.findById(body._id).exec();
        console.log(detailProduct);
        if(!detailProduct){
            return{
                message:'no_product',
                data: null
            }
        }
        return{
            message: 'get_detail_product_success!!',
            data: detailProduct
        }
    }




    //getProduct-by-cate
    async getProductByCate(body){
        const cate = body.cate;
        if(!body.cate){
            return {
                message: 'Cate_is_require!'
            }
        }
        const product = await this.ProductsModel.find({'cate':body.cate}).exec();
        console.log(product);
        if(!product){
            return{
                message:'get fail'
            }
        }

        
    }






    //postCate
    async postCate(body) {
        const name = body.name;
        if (!body.name) {
            return {
                message: 'name_is_require!!'
            }
        }
        const dataCate = new this.CatesModel({
            name: body.name
        });
        const newCate = await dataCate.save();
        console.log(newCate);
        return {
            success: true,
            message: 'Add_category_success!!',
            data: newCate
        }
    }
    //updateCate
    async updateCate(body) {
        const newname = body.name;
        if (!body.name) {
            return {
                message: 'name_is_require!!'
            }
        }
        const cate = await this.CatesModel.findById(body._id).exec();
        console.log(cate);
        cate.name = newname;
        cate.save();
        if (!cate) {
            return {
                message: 'update_cate_fail!',
                data: null
            }
        }
        return {
            message: 'update_cate_success!!',
            data: cate
        }
    }
    //getCate
    async getCate() {
        try {
            const cate = await this.CatesModel.find({}).exec();
            return {
                message: 'get_cate_success!!',
                result: {
                    data: cate
                }
            }
        } catch (error) {
            return {
                message: 'get_cate_fail!!',
                data: null
            }
        }
    }
    //AddToCart
    async addToCart(user, body){
        console.log(user);
        console.log(body);
        
        
    }

}

module.exports = new ProductsService();
