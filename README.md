# API REST de Autenticación y Gestión de Tareas

API REST construida con Node.js y Express que proporciona un sistema de autenticación JWT y gestión de tareas por usuario. Incluye documentación completa con Swagger UI.

## Características 🚀

- Autenticación completa con JWT
- CRUD de usuarios
- CRUD de tareas por usuario
- Validación de datos
- Documentación con Swagger UI
- Middleware de autenticación
- Manejo de errores personalizado

## Tecnologías Utilizadas 💻

- Node.js
- Express
- MongoDB
- JWT (JSON Web Tokens)
- Bcrypt
- Swagger UI
- JavaScript (ES6+)

## Requisitos Previos 📋

- Node.js (v14 o superior)
- MongoDB
- npm o yarn

## Instalación 🔧

1. Clona el repositorio:

```bash
git clone <https://github.com/Mrk2016/ApiRest>
```

2. Instala las dependencias:

```bash
npm install
```

3. Crea un archivo `.env` en la raíz del proyecto con las siguientes variables:

```env
PORT=3000
MONGODB_URI=tu-uri-de-mongodb
JWT_SECRET=tu-clave-secreta-jwt
```

4. Inicia el servidor:

```bash
npm run dev
```

## Documentación 📚

La documentación de la API está disponible en la ruta `/api-docs` cuando el servidor está en ejecución.

### Endpoints Principales

#### Autenticación

- POST `/api/register` - Registro de usuarios
- POST `/api/login` - Inicio de sesión
- POST `/api/logout` - Cierre de sesión
- GET `/api/profile` - Obtener perfil de usuario
- PUT `/api/update/:id` - Actualizar usuario
- DELETE `/api/delete/:id` - Eliminar usuario

#### Tareas

- GET `/api/tasks` - Obtener todas las tareas del usuario
- POST `/api/tasks` - Crear nueva tarea
- GET `/api/tasks/:id` - Obtener una tarea específica
- PUT `/api/tasks/:id` - Actualizar tarea
- DELETE `/api/tasks/:id` - Eliminar tarea

## Estructura del Proyecto 📁

```
src/
├── controllers/
│   ├── auth.controller.js
│   └── task.controller.js
├── database/
│   ├── db_connection.js
├── docs/
│   ├── schemas/
│   │   ├── docAuth.schema.js
│   │   └── docTask.schema.js
│   ├── paths/
│   │   ├── auth.paths.js
│   │   └── tasks.paths.js
│   └── swagger.js
├── middleware/
│   ├── validateSchema.js
│   └── verifyToken.js
├── models/
│   ├── user.model.js
│   └── task.model.js
├── routes/
│   ├── auth.routes.js
│   └── task.routes.js
├── schemas/
│   ├── auth.schema.js
│   └── task.schema.js
├── libs/
│    └── jwt.js
├── index.js
├── app.js
├── package.json
└── README.md

```

## Características de Seguridad 🔒

- Contraseñas hasheadas con bcrypt
- Autenticación con JWT
- Validación de datos entrada
- Protección de rutas con middleware
- Tokens en cookies HTTP-only
- Manejo de errores personalizado

## Uso 🛠️

### Registro de Usuario

```javascript
fetch("http://localhost:3000/api/register", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    username: "usuario",
    email: "usuario@ejemplo.com",
    password: "contraseña123",
  }),
});
```

### Crear Tarea

```javascript
fetch("http://localhost:3000/api/tasks", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    name: "Nueva Tarea",
    description: "Descripción de la tarea",
    status: "pendiente",
  }),
  credentials: "include",
});
```

## Scripts Disponibles 📜

```json
{
  "start": "node src/index.js",
  "dev": "nodemon src/index.js"
}
```

## Contribuir 🤝

Las contribuciones son bienvenidas. Por favor, abre primero un issue para discutir los cambios que te gustaría hacer.

1. Fork el proyecto
2. Crea tu rama de características (`git checkout -b feature/AmazingFeature`)
3. Comitea tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## Contacto 📫

Marcos Rubi Guevara - [@LinkedIn](https://www.linkedin.com/in/markrubi26/) - markrubi2@gmail.com

Link del proyecto: [https://github.com/Mrk2016/ApiRest](https://github.com/Mrk2016/ApiRest)

## Agradecimientos 🎁

- Menciona a cualquier persona o recurso que te haya ayudado
- Inspiración
- etc
