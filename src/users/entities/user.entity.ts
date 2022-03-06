import { Prisma } from "@prisma/client";

export class User implements Prisma.UsersUncheckedCreateInput {
    email: string;
}
