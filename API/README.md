# API Servicios Médicos SQL + NoSQL![Node.js](https://img.shields.io/badge/node.js-339933?style=for-the-badge&logo=Node.js&logoColor=white)![Express](https://img.shields.io/badge/express.js-000000?style=for-the-badge&logo=express&logoColor=white)![MySQL](https://img.shields.io/badge/mysql-4479A1.svg?style=for-the-badge&logo=mysql&logoColor=white)![MongoDB](https://img.shields.io/badge/mongodb-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)![Mongoose](https://img.shields.io/badge/mongoose-880000?style=for-the-badge&logo=mongoose&logoColor=white)![Swagger](https://img.shields.io/badge/swagger-85EA2D.svg?style=for-the-badge&logo=swagger&logoColor=black)![API REST](https://img.shields.io/badge/API-REST-blue?style=for-the-badge)

## Descripción

Esta API REST forma parte del sistema **Servicios Médicos Híbrido**, diseñado para generar datos de prueba en un entorno hospitalario mediante el uso combinado de:

- **MySQL (Base de datos relacional)**
- **MongoDB (Base de datos NoSQL)**

El sistema permite simular escenarios clínicos reales, generar grandes volúmenes de datos y evaluar el rendimiento de una arquitectura híbrida.

## Arquitectura del sistema

El sistema se divide en dos componentes principales:

- **SQL (MySQL)** → Manejo de pacientes, servicios médicos y citas  
- **NoSQL (MongoDB)** → Almacenamiento de valoraciones clínicas  

Esto permite combinar la integridad de datos estructurados con la flexibilidad de documentos dinámicos.

## Estructura del Proyecto

```bash
API/
│── controllers/      # Lógica de negocio (SQL y NoSQL)
│── routes/           # Definición de endpoints
│── db.js             # Conexión a MySQL y MongoDB
│── server.js         # Configuración principal del servidor
│── swagger.js        # Documentación Swagger
```
## Tecnologías utilizadas

| Componente        | Tecnología / Herramienta |
|------------------|--------------------------|
| Backend          | Node.js + Express ![Node.js](https://img.shields.io/badge/node.js-339933.svg?style=for-the-badge&logo=node.js&logoColor=white) ![Express](https://img.shields.io/badge/express.js-000000.svg?style=for-the-badge&logo=express&logoColor=white) |
| Base de Datos SQL | MySQL (mysql2) ![MySQL](https://img.shields.io/badge/mysql-4479A1.svg?style=for-the-badge&logo=mysql&logoColor=white) |
| Base de Datos NoSQL | MongoDB + Mongoose ![MongoDB](https://img.shields.io/badge/mongodb-47A248.svg?style=for-the-badge&logo=mongodb&logoColor=white) ![Mongoose](https://img.shields.io/badge/mongoose-880000.svg?style=for-the-badge) |
| Documentación    | Swagger (OpenAPI) ![Swagger](https://img.shields.io/badge/swagger-85EA2D.svg?style=for-the-badge&logo=swagger&logoColor=black) |


### Autores

1. **Jose Francisco Flores Amador** /[@JFFA25](https://github.com/JFFA25)
2. **Edgar Cabrera Velázquez** /[@Edgar-Cbr](https://github.com/Edgar-Cbr)
3. **Edwin Hernández Campos** /[@Edwinhdzcm](https://github.com/Edwinhdzcm)
4. **Giovany Raul Pazos Cruz** /[@giova0412](https://github.com/giova0412)
5. **Uriel Maldonado Bernabe** /[@Urii7895](https://github.com/Urii7895)