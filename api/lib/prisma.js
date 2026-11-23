import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "../generated/prisma/client.js";

let prisma;

export const createPrisma = (env) => {
    const connectionString = `${env.DATABASE_URL}`;

    const adapter = new PrismaPg({ connectionString });
    prisma = new PrismaClient({ adapter });

}

export const getPrisma = () => {
    if (!prisma) {
        throw new Error('prisma has not bee initialized');
    }

    return prisma;
}
