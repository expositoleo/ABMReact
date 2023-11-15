import { Producto } from "../types/Producto";

const BASE_URL = 'http://localhost:8080/api/v1';

export const ProductoService = {

    
    getProductos: async (): Promise<Producto[]> => {
       
        const response = await fetch(`${BASE_URL}/producto`);
        const data = await response.json();
        return data;
    },

    
    getProducto: async (id:number): Promise<Producto> => {

        const response = await fetch (`${BASE_URL}/producto/getAll${id}`);
        const data = await response.json();
        return data;
        
    },

    createProducto:async (producto:Producto):Promise<Producto> => {

        const response = await fetch(`${BASE_URL}/producto`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(producto)
        });

        const data = await response.json();
        return data;
        
    },

    updateProducto: async (id: number, producto: Producto): Promise<Producto> => {
        
        const response = await fetch(`${BASE_URL}/producto/${id}`, {
            method: "PUT",
            headers: {
                'Content-Type':'application/json'
            },
            body: JSON.stringify(producto)
        });

        const data = await response.json();
        return data;
    },

    

    deleteProducto: async (id:number): Promise<void> => {
        await fetch(`${BASE_URL}/producto/${id}`, {
            method: "DELETE"
        });
    }
    

  
}
