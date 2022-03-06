import { Prisma } from "@prisma/client";

export class History implements Prisma.HistoryUncheckedCreateInput{
    cost: string | number | Prisma.Decimal;
    consumption: string | number | Prisma.Decimal;
    fare: string | number | Prisma.Decimal;
    equipments: Prisma.InputJsonValue;
    userId: string;
}
