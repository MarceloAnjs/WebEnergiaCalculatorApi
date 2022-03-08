import { Prisma } from "@prisma/client";
import { IsDecimal, IsNumber, IsString } from "class-validator";
import { Equipment } from "../entities/equipment.entity";

export class CreateEquipmentDto extends Equipment {
    @IsString()
    name: string;
    
    @IsNumber()
    quantity: number
    
    @IsString()
    time: string;
    
    @IsDecimal()
    power: string | number | Prisma.Decimal;
    
    @IsString()
    userId: string;
}
