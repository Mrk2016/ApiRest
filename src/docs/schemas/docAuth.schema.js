export const authSchemas = {
  User: {
    type: "object",
    properties: {
      id: {
        type: "string",
        description: "ID del usuario",
        example: "507f1f77bcf86cd799439011",
      },
      username: {
        type: "string",
        description: "Nombre de usuario",
        example: "john_doe",
      },
      email: {
        type: "string",
        format: "email",
        description: "Correo electrónico del usuario",
        example: "john@example.com",
      },
      createdAt: {
        type: "string",
        format: "date-time",
        description: "Fecha de creación",
      },
      updatedAt: {
        type: "string",
        format: "date-time",
        description: "Fecha de última actualización",
      },
    },
  },
  RegisterInput: {
    type: "object",
    required: ["username", "email", "password"],
    properties: {
      username: {
        type: "string",
        description: "Nombre de usuario",
        example: "john_doe",
      },
      email: {
        type: "string",
        format: "email",
        description: "Correo electrónico",
        example: "john@example.com",
      },
      password: {
        type: "string",
        description: "Contraseña del usuario",
        example: "mySecurePassword123",
      },
    },
  },
  LoginInput: {
    type: "object",
    required: ["email", "password"],
    properties: {
      email: {
        type: "string",
        format: "email",
        description: "Correo electrónico",
        example: "john@example.com",
      },
      password: {
        type: "string",
        description: "Contraseña del usuario",
        example: "mySecurePassword123",
      },
    },
  },
  UpdateUserInput: {
    type: "object",
    properties: {
      username: {
        type: "string",
        description: "Nuevo nombre de usuario",
        example: "john_doe_updated",
      },
      email: {
        type: "string",
        format: "email",
        description: "Nuevo correo electrónico",
        example: "john_new@example.com",
      },
      password: {
        type: "string",
        description: "Nueva contraseña",
        example: "newSecurePassword123",
      },
    },
  },
  Error: {
    type: "object",
    properties: {
      message: {
        type: "string",
        description: "Mensaje de error",
        example: "User not found",
      },
    },
  },
};

export default authSchemas;
