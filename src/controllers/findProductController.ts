import {Request, Response} from 'express';
import { prismaClient } from '../database/prismaClient';

export class FindProductController{
    async handle(request:Request, response:Response){
        const {id} = request.params;
        console.log("dsdsfsd");
        const product = await prismaClient.product.findFirst({
            where:{
                id:id
            },
            select:{
                ProductCategoria:{},
            },
        })

        return response.json(product);
    }
}