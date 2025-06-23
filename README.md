# Tarea 3. Creación de API para CMDB
# CMDB - API RESTful 
# Belén Orozco - 201901604

Este proyecto es una API RESTful desarrollada con Node.js y Express, que permite gestionar elementos de configuración (CIs) dentro de una **CMDB** (Configuration Management Database), como parte del curso de **Software Avanzado**.

---

##  Tecnologías utilizadas

- **Node.js** – Entorno de ejecución JavaScript
- **Express.js** – Framework web para APIs
- **Sequelize** – ORM para PostgreSQL
- **PostgreSQL** – Base de datos relacional
- **dotenv** – Manejo de variables de entorno
- **UUID** – Identificadores únicos en claves primarias

---

##  Funcionalidades

✅ CRUD completo de elementos de configuración (CIs)  
✅ Relaciones entre CIs (ej: servidor → base de datos)  
✅ Auditoría básica de cambios (cambios realizados a CIs)  
✅ Clasificación por ambiente (DEV, QA, PROD)  
✅ Filtros y búsqueda (por tipo, nombre, ambiente, estado)  
✅ Validación de campos obligatorios según tipo de CI

---

##  Estructura del proyecto

├── src/
│ ├── config/ # Configuración de base de datos
│ ├── models/ # Modelos Sequelize
│ ├── controllers/ # Lógica de entrada de rutas
│ ├── services/ # Lógica de negocio
│ ├── routes/ # Endpoints de la API
│ └── app.js # Configuración principal de Express
├── .env # Variables de entorno (DB config)
├── server.js # Punto de entrada
└── collection.postman.json # Colección para pruebas en Postman


---

##  Rutas disponibles

###  CIs (Configuration Items)

| Método | Ruta                      | Descripción                        |
|--------|---------------------------|------------------------------------|
| GET    | `/api/cis`                | Listar todos los CIs (con filtros) |
| GET    | `/api/cis/:id`            | Obtener CI por ID                  |
| POST   | `/api/cis`                | Crear nuevo CI                     |
| PUT    | `/api/cis/:id`            | Actualizar CI                      |
| DELETE | `/api/cis/:id`            | Eliminar CI                        |


### Relaciones entre CIs

| Método | Ruta                          | Descripción                    |
|--------|-------------------------------|--------------------------------|
| GET    | `/api/relaciones`             | Listar todas las relaciones    |
| POST   | `/api/relaciones`             | Crear relación entre CIs       |
| DELETE | `/api/relaciones/:id`         | Eliminar relación              |

---

## Validación por tipo de CI

Dependiendo del tipo de CI, algunos campos son obligatorios. Por ejemplo:

| Tipo         | Campos requeridos                        |
|--------------|-------------------------------------------|
| Hardware     | `numero_serie`, `ubicacion_fisica`        |
| Software     | `version`, `numero_licencia`              |
| Base de Datos| `version`, `propietario_responsable`      |

---

## ⚙️ Métodos HTTP usados

| Método | Acción           | Equivalente en CRUD |
|--------|------------------|----------------------|
| GET    | Leer/consultar   | Read                 |
| POST   | Crear             | Create               |
| PUT    | Actualizar        | Update               |
| DELETE | Eliminar          | Delete               |

---
