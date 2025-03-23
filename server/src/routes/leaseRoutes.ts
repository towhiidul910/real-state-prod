import express from "express";

import { authMiddleware } from "../middleware/authMiddleware";
import { getLeases, getLeasesPayment } from "../controllers/leaseController";

const router = express.Router();

router.get("/", authMiddleware(["manager", "tenant"]), getLeases);
router.get(
  "/:id/payment",
  authMiddleware(["manager", "tenant"]),
  getLeasesPayment
);

export default router;
