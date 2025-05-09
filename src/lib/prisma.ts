import { PrismaClient } from '@prisma/client';

// PrismaClient global instance
const globalForPrisma = global as unknown as { prisma: PrismaClient };

// PostgreSQL bağlantı seçenekleri
const prismaClientSingleton = () => {
  return new PrismaClient();
};

// Create a new PrismaClient if one doesn't exist already
export const prisma = globalForPrisma.prisma || prismaClientSingleton();

// In development, each file refresh creates a new connection
if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma;

export default prisma; 