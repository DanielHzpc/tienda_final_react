import axios from 'axios'

const productsApi = axios.create({
    baseURL:'https://fakestoreapi.com/products'
})

export const getProducts = () => {
    return productsApi.get('/')
}

export const getProductID = (id) => {
    return productsApi.get(`/${id}`)
}
export const createProduct = (producto) => {
    return productsApi.post('/',producto)
}
export const deleteProduct = (id) => {
    return productsApi.delete(`/${id}/`)
}
export const updateProduct = (id,producto) => {
    return productsApi.put(`/${id}/`,producto)
}