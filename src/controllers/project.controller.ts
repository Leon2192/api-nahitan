import { Request, Response } from "express";
import Project from "../models/project.model";

class ProjectController {
  async getAllProjects(req: Request, res: Response) {
    try {
      const projects = await Project.find();
      res.json(projects);
    } catch (error) {
      res.status(500).json({ error: "Error al obtener proyectos" });
    }
  }

  async createProject(req: Request, res: Response) {
    try {
      const newProject = new Project(req.body);
      await newProject.save();
      res.status(201).json(newProject);
    } catch (error) {
      res.status(500).json({ error: "Error al crear proyecto" });
    }
  }

  async updateProject(req: Request, res: Response) {
    try {
      const updatedProject = await Project.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
      );
      res.json(updatedProject);
    } catch (error) {
      res.status(500).json({ error: "Error al actualizar proyecto" });
    }
  }

  async deleteProject(req: Request, res: Response) {
    try {
      await Project.findByIdAndDelete(req.params.id);
      res.status(204).end();
    } catch (error) {
      res.status(500).json({ error: "Error al eliminar proyecto" });
    }
  }
}

export default new ProjectController();
