import { Request, Response } from "express";
// import { PrismaClient } from "@prisma/client/extension";
// Replace from '@prisma/client/extension'
import { PrismaClient } from "@prisma/client"; // Correct import

const prisma = new PrismaClient();

export const getLeases = async (req: Request, res: Response): Promise<void> => {
  try {
    const leases = await prisma.lease.findMany({
      include: {
        tenant: true,
        property: true,
      },
    });
    res.json(leases);
  } catch (error: any) {
    res.status(500).json({
      message: `Error retrieving leases: ${error.message}`, // Fixed spelling
    });
  }
};

export const getLeasesPayment = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { id } = req.params;
    const payment = await prisma.payment.findMany({
      where: { leaseId: Number(id) },
    });
    res.json(payment);
  } catch (error: any) {
    res.status(500).json({
      message: `Error retrieving leases payment: ${error.message}`, // Fixed spelling
    });
  }
};
