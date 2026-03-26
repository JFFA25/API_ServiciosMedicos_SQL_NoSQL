# Database – Gestión de Datos

![MySQL](https://img.shields.io/badge/mysql-4479A1?style=for-the-badge\&logo=mysql\&logoColor=white)
![MongoDB](https://img.shields.io/badge/mongodb-4EA94B?style=for-the-badge\&logo=mongodb\&logoColor=white)
![Hybrid](https://img.shields.io/badge/database-hybrid-blue?style=for-the-badge)

## Descripción

Esta carpeta contiene toda la **estructura y gestión de bases de datos** del sistema, implementando una arquitectura **híbrida SQL + NoSQL**.

Su propósito es:

* Administrar bases de datos relacionales (MySQL)
* Gestionar bases de datos NoSQL (MongoDB)
*  Mantener respaldos (backups)
* Ejecutar rutinas y scripts SQL
* Proveer datos para pruebas y análisis

## Estructura

```bash id="db1"
database/
│── SQL/
│   ├── backups/      # Respaldos de base de datos
│   ├── routines/     # Stored Procedures
│   └── structure/    # Estructura visual y scripts
│
└── NoSQL/
    └── backups/      # Respaldos en formato JSON
```

## Componentes principales

### SQL (MySQL)

Encargado de:

* Manejar datos estructurados
* Ejecutar procedimientos almacenados
* Definir relaciones entre entidades
* Proveer integridad y consistencia

 Contiene:

* **backups/** → Scripts `.sql` de estructura y datos
* **routines/** → Stored Procedures
* **structure/** → Representación de la base de datos

### NoSQL (MongoDB)

Encargado de:

* Almacenar datos no estructurados
* Manejar documentos JSON
* Registrar valoraciones clínicas
* Complementar el sistema híbrido

 Contiene:

* **backups/** → Archivos `.json` con datos

## Tecnologías utilizadas

| Componente          | Tecnología                                                                                                         |
| ------------------- | ------------------------------------------------------------------------------------------------------------------ |
| Base de datos SQL   | MySQL ![MySQL](https://img.shields.io/badge/mysql-4479A1.svg?style=for-the-badge\&logo=mysql\&logoColor=white)     |
| Base de datos NoSQL | MongoDB ![MongoDB](https://img.shields.io/badge/mongodb-4EA94B?style=for-the-badge\&logo=mongodb\&logoColor=white) |
| Lenguaje SQL        | SQL ![SQL](https://img.shields.io/badge/sql-database-orange?style=for-the-badge)                                   |
| Formato de datos    | JSON ![JSON](https://img.shields.io/badge/json-data-yellow?style=for-the-badge)                                    |
| Arquitectura        | Híbrida ![Hybrid](https://img.shields.io/badge/hybrid-SQL%2BNoSQL-blue?style=for-the-badge)                        |

## Flujo de datos

```text id="db2"
MySQL (estructura y relaciones)
        ↓
Stored Procedures (generación de datos)
        ↓
MongoDB (valoraciones y datos no estructurados)
        ↓
Backups (SQL + JSON)
```

## Objetivo

* Integrar bases de datos SQL y NoSQL
* Evaluar rendimiento en diferentes escenarios
* Mantener respaldos organizados
* Facilitar pruebas y simulaciones

---

## Notas

* La carpeta está organizada por tipo de base de datos
* Se mantiene separación clara entre SQL y NoSQL
* Permite escalabilidad y fácil mantenimiento
* Base fundamental para el funcionamiento de la API
