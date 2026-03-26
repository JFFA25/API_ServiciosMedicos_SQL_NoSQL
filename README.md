# API_ServiciosMedicos_SQL_NoSQL

![Node.js](https://img.shields.io/badge/node.js-339933?style=for-the-badge\&logo=Node.js\&logoColor=white)
![Express](https://img.shields.io/badge/express.js-000000?style=for-the-badge\&logo=express\&logoColor=white)
![MySQL](https://img.shields.io/badge/mysql-4479A1?style=for-the-badge\&logo=mysql\&logoColor=white)
![MongoDB](https://img.shields.io/badge/mongodb-4EA94B?style=for-the-badge\&logo=mongodb\&logoColor=white)
![API REST](https://img.shields.io/badge/API-REST-blue?style=for-the-badge)

## Descripción

API REST diseñada para ejecutar **pruebas de población de datos** en el área de servicios médicos, utilizando una arquitectura **híbrida SQL + NoSQL**.

El sistema permite:

* Generar grandes volúmenes de datos clínicos
* Integrar MySQL y MongoDB en un mismo flujo
*  Analizar rendimiento entre ambos modelos de base de datos
*  Simular escenarios reales del sector médico

## Autores

1. **Jose Francisco Flores Amador** / [@JFFA25](https://github.com/JFFA25)
2. **Edgar Cabrera Velázquez** / [@Edgar-Cbr](https://github.com/Edgar-Cbr)
3. **Edwin Hernández Campos** / [@Edwinhdzcm](https://github.com/Edwinhdzcm)
4. **Giovany Raul Pazos Cruz** / [@giova0412](https://github.com/giova0412)
5. **Uriel Maldonado Bernabe** / [@Urii7895](https://github.com/Urii7895)

## Tecnologías utilizadas

| Componente          | Tecnología                                                                                                                                                                                                                                         |
| ------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Backend             | Node.js + Express ![Node.js](https://img.shields.io/badge/node.js-339933.svg?style=for-the-badge\&logo=node.js\&logoColor=white) ![Express](https://img.shields.io/badge/express.js-000000.svg?style=for-the-badge\&logo=express\&logoColor=white) |
| Base de datos SQL   | MySQL ![MySQL](https://img.shields.io/badge/mysql-4479A1.svg?style=for-the-badge\&logo=mysql\&logoColor=white)                                                                                                                                     |
| Base de datos NoSQL | MongoDB + Mongoose ![MongoDB](https://img.shields.io/badge/mongodb-47A248.svg?style=for-the-badge\&logo=mongodb\&logoColor=white) ![Mongoose](https://img.shields.io/badge/mongoose-880000.svg?style=for-the-badge)                                |
| Documentación       | Swagger ![Swagger](https://img.shields.io/badge/swagger-85EA2D.svg?style=for-the-badge\&logo=swagger\&logoColor=black)                                                                                                                             |
| Configuración       | Dotenv ![Dotenv](https://img.shields.io/badge/dotenv-ECD53F.svg?style=for-the-badge\&logo=dotenv\&logoColor=black)                                                                                                                                 |
| Middleware          | CORS ![CORS](https://img.shields.io/badge/cors-enabled-green.svg?style=for-the-badge)                                                                                                                                                              |

## Estructura del proyecto

```bash id="main1"
API/
│── controllers/
│── routes/
│── models/
│── dashboard/
│── database/
│   ├── SQL/
│   │   ├── backups/
│   │   ├── routines/
│   │   └── structure/
│   └── NoSQL/
│       └── backups/
```
## Endpoints principales

| Método | Endpoint            | Descripción                          |
| ------ | ------------------- | ------------------------------------ |
| POST   | `/api/poblar-test`  | Generación híbrida (MySQL + MongoDB) |
| POST   | `/api/poblar-nosql` | Generación exclusiva en MongoDB      |

## Dashboards (Resultados)

### Dashboard SQL (Actualizado)

![Dashboard SQL](./dashboard/Upgrade_Dashboard_SQL.jpg)

### Dashboard NoSQL (Actualizado)

![Dashboard NoSQL](./dashboard/Upgrade_Dashboard_NoSQL.jpg)

## Flujo del sistema

```text id="main2"
Cliente → Routes → Controllers → (MySQL + MongoDB) → Respuesta → Dashboard
```
## Objetivo del proyecto

* Comparar bases de datos SQL vs NoSQL
* Evaluar rendimiento en generación de datos
* Simular escenarios clínicos reales
* Analizar escalabilidad del sistema

## Notas

* Arquitectura basada en **Node.js + Express**
* Uso de **Mongoose** para modelado NoSQL
* Integración con **MySQL mediante procedimientos almacenados**
* Dashboards para análisis visual de resultados
