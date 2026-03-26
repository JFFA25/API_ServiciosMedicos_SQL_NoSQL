# SQL – Base de Datos Relacional

![MySQL](https://img.shields.io/badge/mysql-4479A1?style=for-the-badge\&logo=mysql\&logoColor=white)
![SQL](https://img.shields.io/badge/sql-database-orange?style=for-the-badge)
![Relational](https://img.shields.io/badge/database-relational-blue?style=for-the-badge)

## Descripción

Esta carpeta contiene todos los recursos relacionados con la **base de datos relacional (MySQL)** del sistema.

Su función principal es:

* Gestionar datos estructurados
* Mantener relaciones entre entidades
* Ejecutar lógica mediante Stored Procedures
* Proporcionar respaldos del sistema

## Estructura

```bash id="sql1"
SQL/
│── backups/     # Respaldos (.sql)
│── routines/    # Stored Procedures
│── structure/   # Estructura de la base de datos
```

## Componentes

### backups/

* Archivos `.sql` con estructura y datos
* Permiten restaurar la base de datos
* Incluyen scripts de población

### routines/

* Stored Procedures
* Automatización de procesos
* Generación de datos

### structure/

* Representación de la base de datos
* Diagramas o capturas (`.png`)
* Definición de tablas y relaciones

## Tecnologías utilizadas

| Componente    | Tecnología                                                                                                     |
| ------------- | -------------------------------------------------------------------------------------------------------------- |
| Base de datos | MySQL ![MySQL](https://img.shields.io/badge/mysql-4479A1.svg?style=for-the-badge\&logo=mysql\&logoColor=white) |
| Lenguaje      | SQL ![SQL](https://img.shields.io/badge/sql-database-orange?style=for-the-badge)                               |
| Arquitectura  | Relacional ![Relational](https://img.shields.io/badge/relational-model-blue?style=for-the-badge)               |

## Objetivo

* Garantizar integridad de los datos
* Manejar relaciones complejas
* Optimizar consultas mediante procedimientos
* Servir como base estructurada del sistema

## Notas

* Se recomienda ejecutar primero la estructura antes de la población
* Las rutinas optimizan el rendimiento del sistema
* MySQL actúa como base principal del modelo híbrido
