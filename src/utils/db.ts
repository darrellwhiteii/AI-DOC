import { PrismaClient } from '@prisma/client';
import dotenv from 'dotenv';

dotenv.config();
export const db = new PrismaClient();
