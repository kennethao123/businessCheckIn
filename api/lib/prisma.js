import { PrismaClient } from "../generated/prisma/client.js";
import { PrismaNeon } from "@prisma/adapter-neon";

let prisma;

export const createPrisma = (env) => {
    const connectionString = `${env.DATABASE_URL}`;

    const adapter = new PrismaNeon({ connectionString });
    prisma = new PrismaClient({ adapter });
    return prisma

}

export const getPrisma = () => {
    if (!prisma) {
        throw new Error('prisma has not bee initialized');
    }

    return prisma;
}
