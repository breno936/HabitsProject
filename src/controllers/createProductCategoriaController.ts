import {Request, Response} from 'express';
import { prismaClient } from '../database/prismaClient';

export class CreateProductCategoriaController{
    async handle(request:Request, response:Response){
        const {id_product, id_categoria} = request.body;
        console.log("dsfsdfsd");
        const categoriaProduct = await prismaClient.productCategoria.create({
            data:{
                id_product,
                id_categoria 
            }
        })

        return response.json();
    }
}