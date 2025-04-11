import express from "express";
import {
  getTenant,
  createTenant,
  updateTenant,
  getCurrentResidences,
  addFavoriteProperty,
  removeFavoriteProperty,
} from "../controllers/tenantControllers";

const router = express.Router();

router.get("/:cognitoId", getTenant);

router.put("/:cognitoId", updateTenant);


router.post("/", createTenant);

router.get("/:cognitoId/current-residence", getCurrentResidences);
router.post("/:cognitoId/favorites/:propertyId", addFavoriteProperty);
// router.post("/:cognitoId/favorites/:propertyId", removeFavoriteProperty);
router.delete("/:cognitoId/favorites/:propertyId", removeFavoriteProperty);


export default router;

