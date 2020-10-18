import { IProduct } from "./types";

export function addProductToCart(product: IProduct) {
  return {
    type: 'ADD_PRODUCT_TO_CART', // string obrigatoria para o redux
    payload: {
      product,
    }
    
    
    
    
    // geralmente são os parâmetros que recebe do componente  
  }

};