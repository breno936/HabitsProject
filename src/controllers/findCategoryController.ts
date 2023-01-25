import {Request, Response} from 'express';
import { prismaClient } from '../database/prismaClient';

export class FindCategoriaController{
    async handle(request:Request, response:Response){
        const {id} = request.params;
        const category = await prismaClient.category.findFirst({
            where:{
                id:id
            },
            include:{
                ProductCategoria:{},
            },
        })

        return response.json(category);
    }
}