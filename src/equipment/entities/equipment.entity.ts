import { Prisma } from "@prisma/client";

export class Equipment implements Prisma.EquipmentUncheckedCreateInput {
    name: string;
    quantity: number;
    time: string;
    power: string | number | Prisma.Decimal;
    userId: string;
}
