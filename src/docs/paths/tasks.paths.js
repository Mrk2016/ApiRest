// docs/paths/task.paths.js
export const taskPaths = {
  "/api/tasks": {
    get: {
      tags: ["Tasks"],
      summary: "Obtener todas las tareas",
      description: "Obtiene todas las tareas del usuario autenticado",
      security: [
        {
          cookieAuth: [],
        },
      ],
      responses: {
        200: {
          description: "Lista de tareas obtenida exitosamente",
          content: {
            "application/json": {
              schema: {
                type: "array",
                items: {
                  $ref: "#/components/schemas/Task",
                },
              },
            },
          },
        },
        401: {
          description: "No autorizado - Token no proporcionado o inválido",
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/Error",
              },
            },
          },
        },
      },
    },
    post: {
      tags: ["Tasks"],
      summary: "Crear nueva tarea",
      description: "Crea una nueva tarea para el usuario autenticado",
      security: [
        {
          cookieAuth: [],
        },
      ],
      requestBody: {
        required: true,
        content: {
          "application/json": {
            schema: {
              $ref: "#/components/schemas/TaskInput",
            },
          },
        },
      },
      responses: {
        200: {
          description: "Tarea creada exitosamente",
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/TaskResponse",
              },
            },
          },
        },
        400: {
          description: "Datos inválidos",
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/Error",
              },
            },
          },
        },
        401: {
          description: "No autorizado",
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/Error",
              },
            },
          },
        },
      },
    },
  },
  "/api/tasks/{id}": {
    get: {
      tags: ["Tasks"],
      summary: "Obtener una tarea",
      description: "Obtiene una tarea específica por su ID",
      security: [
        {
          cookieAuth: [],
        },
      ],
      parameters: [
        {
          name: "id",
          in: "path",
          required: true,
          description: "ID de la tarea",
          schema: {
            type: "string",
          },
        },
      ],
      responses: {
        200: {
          description: "Tarea encontrada",
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/Task",
              },
            },
          },
        },
        404: {
          description: "Tarea no encontrada",
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/Error",
              },
            },
          },
        },
      },
    },
    put: {
      tags: ["Tasks"],
      summary: "Actualizar tarea",
      description: "Actualiza una tarea existente por su ID",
      security: [
        {
          cookieAuth: [],
        },
      ],
      parameters: [
        {
          name: "id",
          in: "path",
          required: true,
          description: "ID de la tarea a actualizar",
          schema: {
            type: "string",
          },
        },
      ],
      requestBody: {
        required: true,
        content: {
          "application/json": {
            schema: {
              $ref: "#/components/schemas/TaskInput",
            },
          },
        },
      },
      responses: {
        200: {
          description: "Tarea actualizada exitosamente",
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  message: {
                    type: "string",
                    example: "Task updated successfully",
                  },
                },
              },
            },
          },
        },
        404: {
          description: "Tarea no encontrada",
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/Error",
              },
            },
          },
        },
      },
    },
    delete: {
      tags: ["Tasks"],
      summary: "Eliminar tarea",
      description: "Elimina una tarea existente por su ID",
      security: [
        {
          cookieAuth: [],
        },
      ],
      parameters: [
        {
          name: "id",
          in: "path",
          required: true,
          description: "ID de la tarea a eliminar",
          schema: {
            type: "string",
          },
        },
      ],
      responses: {
        200: {
          description: "Tarea eliminada exitosamente",
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  message: {
                    type: "string",
                    example: "Task deleted successfully",
                  },
                },
              },
            },
          },
        },
        404: {
          description: "Tarea no encontrada",
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/Error",
              },
            },
          },
        },
      },
    },
  },
};

export default taskPaths;
