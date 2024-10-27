// docs/paths/Users.paths.js
export const UsersPaths = {
  "/api/register": {
    post: {
      tags: ["Users"],
      summary: "Registrar un nuevo usuario",
      description:
        "Crea una nueva cuenta de usuario y retorna un token JWT en una cookie",
      requestBody: {
        required: true,
        content: {
          "application/json": {
            schema: {
              $ref: "#/components/schemas/RegisterInput",
            },
          },
        },
      },
      responses: {
        200: {
          description: "Usuario registrado exitosamente",
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/User",
              },
            },
          },
        },
        400: {
          description: "Error de validación",
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/Error",
              },
            },
          },
        },
        500: {
          description: "Error del servidor",
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

  "/api/login": {
    post: {
      tags: ["Users"],
      summary: "Iniciar sesión",
      description: "Autentica al usuario y retorna un token JWT en una cookie",
      requestBody: {
        required: true,
        content: {
          "application/json": {
            schema: {
              $ref: "#/components/schemas/LoginInput",
            },
          },
        },
      },
      responses: {
        200: {
          description: "Login exitoso",
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/User",
              },
            },
          },
        },
        400: {
          description: "Error de validación",
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/Error",
              },
            },
          },
        },
        401: {
          description: "Credenciales inválidas",
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/Error",
              },
            },
          },
        },
        404: {
          description: "Usuario no encontrado",
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

  "/api/logout": {
    post: {
      tags: ["Users"],
      summary: "Cerrar sesión",
      description: "Elimina la cookie del token JWT",
      responses: {
        200: {
          description: "Logout exitoso",
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  message: {
                    type: "string",
                    example: "Logged out successfully",
                  },
                },
              },
            },
          },
        },
      },
    },
  },

  "/api/profile": {
    get: {
      tags: ["Users"],
      summary: "Obtener perfil del usuario",
      description: "Obtiene los datos del usuario autenticado",
      security: [
        {
          cookieUsers: [],
        },
      ],
      responses: {
        200: {
          description: "Perfil del usuario",
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/User",
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
        404: {
          description: "Usuario no encontrado",
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

  "/api/update/{id}": {
    put: {
      tags: ["Users"],
      summary: "Actualizar usuario",
      description: "Actualiza los datos del usuario autenticado",
      security: [
        {
          cookieUsers: [],
        },
      ],
      parameters: [
        {
          name: "id",
          in: "path",
          required: true,
          description: "ID del usuario a actualizar",
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
              $ref: "#/components/schemas/UpdateUserInput",
            },
          },
        },
      },
      responses: {
        200: {
          description: "Usuario actualizado exitosamente",
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/User",
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
        404: {
          description: "Usuario no encontrado",
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

  "/api/delete/{id}": {
    delete: {
      tags: ["Users"],
      summary: "Eliminar usuario",
      description: "Elimina la cuenta del usuario autenticado",
      security: [
        {
          cookieUsers: [],
        },
      ],
      parameters: [
        {
          name: "id",
          in: "path",
          required: true,
          description: "ID del usuario a eliminar",
          schema: {
            type: "string",
          },
        },
      ],
      responses: {
        200: {
          description: "Usuario eliminado exitosamente",
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  message: {
                    type: "string",
                    example: "User deleted successfully",
                  },
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
        404: {
          description: "Usuario no encontrado",
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

export default UsersPaths;
