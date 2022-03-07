import { Prisma } from "@prisma/client";
import { IsDecimal, IsString } from "class-validator";
import { Equipment } from "../entities/equipment.entity";

export class CreateEquipmentDto extends Equipment {
    @IsString()
    name: string;
    
    @IsDecimal()
    quantity: string | number | Prisma.Decimal;
    
    @IsString()
    time: string;
    
    @IsDecimal()
    power: string | number | Prisma.Decimal;
    
    @IsString()
    userId: string;
}
