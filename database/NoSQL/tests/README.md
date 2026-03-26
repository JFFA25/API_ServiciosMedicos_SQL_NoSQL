# Test NoSQL – Generación de Datos Hospitalarios![Node.js](https://img.shields.io/badge/node.js-339933?style=for-the-badge&logo=Node.js&logoColor=white)![Express](https://img.shields.io/badge/express.js-000000?style=for-the-badge&logo=express&logoColor=white)![MongoDB](https://img.shields.io/badge/mongodb-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)![Mongoose](https://img.shields.io/badge/mongoose-880000?style=for-the-badge&logo=mongoose&logoColor=white)![Swagger](https://img.shields.io/badge/swagger-85EA2D.svg?style=for-the-badge&logo=swagger&logoColor=black)

##  Descripción

Este módulo corresponde a las pruebas realizadas sobre el **esquema NoSQL (MongoDB)** del sistema de servicios médicos.

El objetivo es validar la correcta inserción, estructura y comportamiento de documentos dentro de la colección

##  Ejemplo de solicitud

```json
{
  "cantidad": 1000,
  "es_grave": false
}
```

Cada documento representa una valoración clínica asociada a un paciente, incluyendo información médica, estudios solicitados y auditoría.

## Endpoint utilizado

```
POST /api/poblar-nosql
```

### Dashboard Inicial con el Primer Test de 1k de Registros

![NoSQL](/dashboard/Dashboard_NoSQL.jpg)

### Evidencia del Test

### 1. Insercion basica de valoraciones 1k de Registros

![NoSQL](/database/NoSQL/tests/1.Inserción%20básica%20de%20valoraciones%20(1,000%20registros).png)


