const TaskService = require('../services/taskService');

class TaskController {
  async getAllTasks(req, res, next) {
    try {
      const tasks = await TaskService.getAllTasks();
      res.json(tasks);
    } catch (error) {
      next(error);
    }
  }

  async getTaskById(req, res, next) {
    try {
      const taskId = req.params.id;
      const task = await TaskService.getTaskById(taskId);
      res.json(task);
    } catch (error) {
      next(error);
    }
  }

  async createTask(req, res, next) {
    try {
      const { title, description } = req.body;
      const newTask = await TaskService.createTask({ title, description });
      res.status(201).json(newTask);
    } catch (error) {
      next(error);
    }
  }

  async updateTask(req, res, next) {
    try {
      const taskId = req.params.id;
      const { title, description, completed } = req.body;
      const updatedTask = await TaskService.updateTask(taskId, { title, description, completed });
      res.json(updatedTask);
    } catch (error) {
      next(error);
    }
  }

  async deleteTask(req, res, next) {
    try {
      const taskId = req.params.id;
      await TaskService.deleteTask(taskId);
      res.sendStatus(204);
    } catch (error) {
      next(error);
    }
  }
}

module.exports = new TaskController();
