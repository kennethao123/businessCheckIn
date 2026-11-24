import { PrismaClient } from "../generated/prisma/client.js";
import { PrismaNeon } from "@prisma/adapter-neon";

export const createPrisma = (env) => {
    const connectionString = `${env.DATABASE_URL}`;

    const adapter = new PrismaNeon({ connectionString });
    return new PrismaClient({ adapter });
}

// export const getPrisma = () => {
//     if (!prisma) {
//         throw new Error('prisma has not bee initialized');
//     }
//
//     return prisma;
// }
