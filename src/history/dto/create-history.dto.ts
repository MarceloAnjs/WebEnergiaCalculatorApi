import { Prisma } from "@prisma/client";
import { IsDecimal, IsJSON, IsString } from "class-validator";
import { History } from "../entities/history.entity";

export class CreateHistoryDto extends History{
    @IsDecimal()
    cost: string | number | Prisma.Decimal;
    
    @IsDecimal()
    consumption: string | number | Prisma.Decimal;
    
    @IsDecimal()
    fare: string | number | Prisma.Decimal;
    
    equipments: string;
    
    @IsString()
    userId: string;
}
