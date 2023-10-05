import express from "express";
import projectController from "../controllers/project.controller";

const router = express.Router();

router.get("/projects", projectController.getAllProjects);
router.post("/projects", projectController.createProject);
router.put("/projects/:id", projectController.updateProject);
router.delete("/projects/:id", projectController.deleteProject);

export default router;
