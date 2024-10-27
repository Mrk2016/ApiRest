export const taskSchemas = {
  Task: {
    type: "object",
    properties: {
      _id: {
        type: "string",
        description: "ID de la tarea",
        example: "507f1f77bcf86cd799439011",
      },
      name: {
        type: "string",
        description: "Nombre de la tarea",
        example: "Completar informe",
      },
      description: {
        type: "string",
        description: "Descripción detallada de la tarea",
        example: "Elaborar el informe mensual de ventas",
      },
      status: {
        type: "string",
        description: "Estado actual de la tarea",
        example: "pendiente",
      },
      user: {
        type: "string",
        description: "ID del usuario propietario",
        example: "507f1f77bcf86cd799439011",
      },
    },
  },
  TaskInput: {
    type: "object",
    required: ["name", "description", "status"],
    properties: {
      name: {
        type: "string",
        description: "Nombre de la tarea",
        example: "Completar informe",
      },
      description: {
        type: "string",
        description: "Descripción detallada de la tarea",
        example: "Elaborar el informe mensual de ventas",
      },
      status: {
        type: "string",
        description: "Estado de la tarea",
        example: "pendiente",
      },
    },
  },
  TaskResponse: {
    type: "object",
    properties: {
      message: {
        type: "string",
        description: "Mensaje de la operación",
        example: "Task created successfully",
      },
      taskid: {
        type: "string",
        description: "ID de la tarea",
        example: "507f1f77bcf86cd799439011",
      },
      name: {
        type: "string",
        description: "Nombre de la tarea",
        example: "Completar informe",
      },
      description: {
        type: "string",
        description: "Descripción de la tarea",
        example: "Elaborar el informe mensual de ventas",
      },
      status: {
        type: "string",
        description: "Estado de la tarea",
        example: "pendiente",
      },
      user: {
        type: "string",
        description: "ID del usuario",
        example: "507f1f77bcf86cd799439011",
      },
    },
  },
};

export default taskSchemas;
