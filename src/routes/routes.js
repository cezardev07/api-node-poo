import { Router } from "express";

import { routesClient } from "../controllers/client.js";
import { routesAdmin } from "../controllers/admin.js";
import { auth } from "../controllers/auth.js";

const router = Router()

// auth
router.post("/auth/admin", auth.loginAdmin)
router.post("/auth/client", auth.loginClient)
router.post("/auth/client/register", auth.registerClient)

// client
router.get("/", routesClient.get)
router.post("/", routesClient.post)
router.put("/", routesClient.update)
router.delete("/", routesClient.delete)

// admin
router.delete("/admin", routesAdmin.delete)
router.delete("/admin/:key", routesAdmin.deleteAll)

export { router }