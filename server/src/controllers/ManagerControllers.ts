import { Request, Response } from "express";
// import { PrismaClient } from "@prisma/client/extension";
// Replace from '@prisma/client/extension'
import { PrismaClient } from "@prisma/client"; // Correct import


const prisma = new PrismaClient();

export const getManager = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { cognitoId } = req.params;
    const manager = await prisma.manager.findUnique({
      where: { cognitoId },
    });

    if (manager) {
      res.json(manager);
    } else {
      // res.status(404).json({ massage: "Manager not found" });
      res.status(404).json({ message: "manager not found" }); // Fixed spelling


    }
  } catch (error: any) {
    res.status(500).json({
      message: `Error retrieving manager: ${error.message}`, // Fixed spelling

    });
  }
};

export const createManager = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { cognitoId, name, email, phoneNumber } = req.body;
    const manager = await prisma.manager.create({
      data: {
        cognitoId,
        name,
        email,
        phoneNumber,
      },
    });

    res.status(201).json(manager);
  } catch (error: any) {
    res.status(500).json({
      message: `Error creating manager: ${error.message}`, // Fixed spelling

    });
  }
};



export const updateManager = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const {cognitoId} = req.params;
    const {  name, email, phoneNumber } = req.body;
    const updateManager = await prisma.manager.update({
      where: {cognitoId},
      data: {
        name,
        email,
        phoneNumber,
      },
    });

    res.json(updateManager)
  } catch (error: any) {
    res.status(500).json({
      message: `Error updating manager: ${error.message}`, // Fixed spelling
    });
  }
};
