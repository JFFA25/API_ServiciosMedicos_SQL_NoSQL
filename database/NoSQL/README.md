# NoSQL – Base de Datos Documental

![MongoDB](https://img.shields.io/badge/mongodb-4EA94B?style=for-the-badge\&logo=mongodb\&logoColor=white)
![NoSQL](https://img.shields.io/badge/nosql-database-green?style=for-the-badge)
![JSON](https://img.shields.io/badge/json-document-orange?style=for-the-badge)

---

## Descripción

Esta carpeta contiene los recursos relacionados con la **base de datos NoSQL (MongoDB)** del sistema.

Su propósito es:

* Almacenar datos en formato JSON
* Manejar información flexible y no estructurada
* Registrar valoraciones clínicas
* Mantener respaldos de datos

## Estructura

```bash id="nosql1"
NoSQL/
│── backups/   # Archivos JSON de respaldo
```

## Componentes

### backups/

* Archivos `.json` con datos de MongoDB
* Respaldos de colecciones
* Datos generados por la API

## Tecnologías utilizadas

| Componente       | Tecnología                                                                                                         |
| ---------------- | ------------------------------------------------------------------------------------------------------------------ |
| Base de datos    | MongoDB ![MongoDB](https://img.shields.io/badge/mongodb-4EA94B?style=for-the-badge\&logo=mongodb\&logoColor=white) |
| Formato de datos | JSON ![JSON](https://img.shields.io/badge/json-FF6F00?style=for-the-badge)                                         |
| Arquitectura     | NoSQL ![NoSQL](https://img.shields.io/badge/nosql-document-green?style=for-the-badge)                              |

## Objetivo

* Manejar datos no estructurados
* Complementar el modelo relacional
* Permitir mayor flexibilidad
* Almacenar información clínica detallada

## Relación con SQL

MongoDB trabaja en conjunto con MySQL:

* MySQL → Datos estructurados
* MongoDB → Valoraciones y datos flexibles

 Forman una arquitectura **híbrida SQL + NoSQL**

## Notas

* Los datos están en formato JSON compatible con MongoDB
* Se utilizan para pruebas y análisis
* Permiten escalabilidad del sistema
