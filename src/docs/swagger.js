// docs/swagger.js
import authSchemas from "./schemas/docAuth.schema.js";
import taskSchemas from "./schemas/docTask.schema.js";
import taskPaths from "./paths/tasks.paths.js";
import authPaths from "./paths/auth.paths.js";

export const swaggerDocs = {
  openapi: "3.0.0",
  info: {
    title: "API de Autenticación y Tareas",
    version: "1.0.0",
    description:
      "API REST para gestión de usuarios y tareas con autenticación JWT",
    contact: {
      name: "Soporte API",
      email: "markrubi2@gmail.com",
    },
  },
  servers: [
    {
      url: "http://localhost:3000",
      description: "Servidor de desarrollo",
    },
  ],
  components: {
    schemas: {
      ...authSchemas,
      ...taskSchemas, // Agregamos los schemas de tareas
    },
    securitySchemes: {
      cookieAuth: {
        type: "apiKey",
        in: "cookie",
        name: "token",
      },
    },
    responses: {
      UnauthorizedError: {
        description: "Error de autenticación",
        content: {
          "application/json": {
            schema: {
              $ref: "#/components/schemas/Error",
            },
          },
        },
      },
      NotFoundError: {
        description: "Recurso no encontrado",
        content: {
          "application/json": {
            schema: {
              $ref: "#/components/schemas/Error",
            },
          },
        },
      },
      ServerError: {
        description: "Error interno del servidor",
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
  tags: [
    {
      name: "Users",
      description: "Endpoints de autenticación y gestión de usuarios",
    },
    {
      name: "Tasks",
      description: "Operaciones con tareas",
    },
  ],
  paths: {
    ...authPaths,
    ...taskPaths, // Agregamos los paths de tareas
  },
  security: [
    {
      cookieAuth: [],
    },
  ],
  externalDocs: {
    description: "Documentación adicional",
    url: "http://example.com/docs",
  },
};

export default swaggerDocs;
