const Task = require('../models/taskModel');

class TaskService {
  async getAllTasks() {
    return await Task.findAll();
  }

  async getTaskById(id) {
    return await Task.findByPk(id);
  }

  async createTask(taskData) {
    return await Task.create(taskData);
  }

  async updateTask(id, taskData) {
    await Task.update(taskData, {
      where: { id },
    });
    return await Task.findByPk(id);
  }

  async deleteTask(id) {
    await Task.destroy({
      where: { id },
    });
  }
}

module.exports = new TaskService();
