import express from "express";
import {
    getManager,
    createManager,
    updateManager,
    getManagerProperties
} from "../controllers/ManagerControllers"

const router = express.Router()
// console.log(router)

router.get("/:cognitoId", getManager)

router.put("/:cognitoId", updateManager)

router.get("/:cognitoId/properties", getManagerProperties)

router.post("/", createManager)


export default router;