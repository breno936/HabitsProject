import {Request, Response} from 'express';
import { prismaClient } from '../database/prismaClient';

export class CreateProductController{
    async handle(request:Request, response:Response){
        const {nome, bar_code, price} = request.body;
        console.log("S");
        const product = await prismaClient.product.create({
            data:{
                nome,
                price,
                bar_code
            }
        })

        return response.json();
    }
}