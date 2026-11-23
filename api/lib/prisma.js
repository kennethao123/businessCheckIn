import "dotenv/config";
import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "../generated/prisma/client.js";
import { env } from "cloudflare:workers"


const connectionString = `${env.DATABASE_URL}`;

const adapter = new PrismaPg({ connectionString });
return new PrismaClient({ adapter });
