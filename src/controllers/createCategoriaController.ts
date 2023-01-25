import {Request, Response} from 'express';
import { prismaClient } from '../database/prismaClient';

export class CreateCategoriaController{
    async handle(request:Request, response:Response){
        const {nome} = request.body;
        console.log("S");
        const categoria = await prismaClient.category.create({
            data:{
                nome
            }
        })

        return response.json();
    }
}