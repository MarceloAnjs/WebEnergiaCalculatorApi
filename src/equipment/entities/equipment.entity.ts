import { Prisma } from "@prisma/client";

export class Equipment implements Prisma.EquipmentUncheckedCreateInput {
    name: string;
    quantity: string | number | Prisma.Decimal;
    time: string;
    power: string | number | Prisma.Decimal;
    userId: string;
}
