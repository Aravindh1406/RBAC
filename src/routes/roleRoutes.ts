import express from "express"
import {create,getAll} from "../controllers/roleControllers"
const router = express.Router();
router.post("/createRole", create);
router.get("/getAllRoles",getAll)
export default router