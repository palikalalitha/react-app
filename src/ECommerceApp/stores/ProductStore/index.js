import ProductStore from "./ProductStore"
import ProductService from "../../services/ProductService/ProductServiceAPI.js"
const productService = new ProductService()
const productStore = new ProductStore(productService)
export default productStore
