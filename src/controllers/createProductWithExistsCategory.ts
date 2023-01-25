import {Request, Response} from 'express';
import { prismaClient } from '../database/prismaClient';

export class CreateProductCategoriaExistsController{
    async handle(request:Request, response:Response){
        const {nome, price, bar_code, id_categoria} = request.body;
        const categoriaProduct = await prismaClient.productCategoria.create({
            data:{
                product:{
                    create:{
                        bar_code,
                        nome,
                        price,

                    },
                },
                category:{
                    connect:{
                        id:id_categoria,
                    },
                },
            },
        })

        return response.json();
    }
}