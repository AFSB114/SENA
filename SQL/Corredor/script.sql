--CREAR BASE DE DATOS
CREATE DATABASE empresa;

--CONECTAR A LA BASE DE DATOS
CONN 

CREATE TABLE departamentos (
    id SERIAL,
    nombre VARCHAR(50),
    PRIMARY KEY (id)
);   

CREATE TABLE empleados (
    id SERIAL,
    nombre VARCHAR(50),
    departamento_id INT,
    salario DECIMAL(10,2),
    PRIMARY KEY (id),
    FOREIGN KEY (departamento_id) REFERENCES departamentos(id)
);

CREATE TABLE proyectos(
    id SERIAL,
    nombre VARCHAR(50),
    departamento_id INT,
    PRIMARY KEY(id),
    FOREIGN KEY(departamento_id) REFERENCES departamentos(id)
);

-- Insertar departamentos
INSERT INTO departamentos (nombre) VALUES
('Ventas'),
('Marketing'),
('Recursos Humanos'),
('Tecnología'),
('Finanzas'),
('Operaciones'),
('Servicio al Cliente'),
('Logística'),
('Legal'),
('Investigación y Desarrollo'),
('Calidad'),
('Mantenimiento'),
('Relaciones Públicas'),
('Innovación'),
('Desarrollo Sostenible'),
('Gestión de Proyectos'),
('Comunicación Interna'),
('Seguridad'),
('Auditoría Interna'),
('Formación y Desarrollo');

-- Insertar empleados
INSERT INTO empleados (nombre, departamento_id, salario) VALUES
('Juan Pérez', 1, 3000.00),
('María García', 2, 3500.00),
('Carlos Rodríguez', 3, 3200.00),
('Ana Martínez', 4, 4000.00),
('Pedro López', 5, 3800.00),
('Laura Sánchez', 6, 3300.00),
('Miguel González', 1, 2800.00),
('Sofía Fernández', NULL, 2500.00),
('Diego Ramírez', 4, 4200.00),
('Elena Torres', NULL, 2700.00),
('Roberto Jiménez', 7, 3100.00),
('Carmen Ruiz', 8, 3400.00),
('Javier Moreno', 9, 3900.00),
('Isabel Castro', 10, 4100.00),
('Fernando Ortiz', 11, 3600.00),
('Patricia Núñez', 12, 3000.00),
('Alejandro Díaz', 2, 3300.00),
('Beatriz Vargas', NULL, 2900.00),
('Raúl Medina', 5, 3700.00),
('Silvia Ramos', 1, 3200.00),
('Óscar Herrera', 4, 4300.00),
('Natalia Cruz', 6, 3500.00),
('Andrés Flores', NULL, 2600.00),
('Lucía Reyes', 3, 3100.00),
('Emilio Vega', 8, 3300.00),
('Marta Campos', 7, 3000.00),
('Hugo Serrano', 11, 3800.00),
('Eva Delgado', 9, 4000.00),
('Ignacio Blanco', NULL, 2800.00),
('Cecilia Fuentes', 2, 3400.00),
('Víctor Mendoza', NULL, 3100.00),
('Rosa Navarro', NULL, 2950.00),
('Tomás Guerrero', NULL, 3250.00),
('Adriana Romero', NULL, 3050.00),
('Gabriel Soto', NULL, 3150.00);

-- Insertar departamentos sin empleados
INSERT INTO departamentos (nombre) VALUES 
('Relaciones Institucionales'),
('Gestión del Cambio'),
('Responsabilidad Social Corporativa'),
('Planificación Estratégica'),
('Gestión del Conocimiento');

-- Insertar proyectos
INSERT INTO proyectos (nombre, departamento_id) VALUES
('Lanzamiento producto A', 1),
('Campaña publicitaria verano', 2),
('Optimización procesos RRHH', 3),
('Migración a la nube', 4),
('Análisis financiero Q3', 5),
('Mejora cadena suministro', 6),
('Programa fidelización clientes', 7),
('Expansión almacén este', 8),
('Revisión contratos proveedores', 9),
('Desarrollo prototipo X', 10),
('Certificación ISO 9001', 11),
('Renovación equipos planta 2', 12),
('Estrategia de comunicación corporativa', 13),
('Incubadora de ideas innovadoras', 14),
('Plan de sostenibilidad 2025', 15),
('Sistema de gestión de proyectos', 16),
('Boletín interno mensual', 17),
('Actualización protocolos de seguridad', 18),
('Plan de auditoría anual', 19),
('Programa de desarrollo de liderazgo', 20),
('Campaña de responsabilidad social', NULL),
('Programa de bienestar empleados', NULL),
('Transformación digital', NULL),
('Expansión mercado internacional', NULL),
('Hackathon anual de innovación', NULL);

--1.INNER JOIN
SELECT e.id, e.nombre AS empleado, d.nombre AS departamento, e.salario FROM empleados e
INNER JOIN departamentos d ON e.departamento_id = d.id;

--2.LEFT JOIN
SELECT e.id, e.nombre AS empleado, d.nombre AS departamento, e.salario FROM empleados e
LEFT JOIN departamentos d ON e.departamento_id = d.id;

--3.RIGHT JOIN
SELECT e.id, e.nombre AS empleado, d.nombre AS departamento, e.salario FROM empleados e
RIGHT JOIN departamentos d ON e.departamento_id = d.id;

--4.FULL OUTER JOIN
SELECT e.id, e.nombre AS empleado, d.nombre AS departamento, e.salario FROM empleados e
FULL OUTER JOIN departamentos d ON e.departamento_id = d.id;

--5.CROSS JOIN
SELECT * FROM empleados
CROSS JOIN departamentos;

--35 empleados, 25 departamentos. 
--35 x 25 = 875 registros.

--El "CROSS JOIN" es un tipo de unión que combina cada fila de la primera tabla con cada fila de la segunda tabla.
--No se requiere ninguna condición de unión.


--6.COMPARE LA MISMA TABLA
SELECT e1.nombre AS empleado, e1.salario, e2.nombre AS empleado_comparado, e2.salario FROM empleados e1
INNER JOIN empleados e2 ON e1.salario > e2.salario;

--7.TRIPLE INNER JOIN
SELECT e.nombre AS empleado, d.nombre AS departamento, p.nombre FROM empleados e
INNER JOIN departamentos d ON e.departamento_id = d.id
INNER JOIN proyectos p ON p.departamento_id = d.id;


--8.FUNCTIONS SQL

SELECT COUNT(*) FROM empleados;

SELECT COUNT(departamento_id) FROM empleados;

SELECT SUM(salario) AS valor_total_pagado FROM empleados;

SELECT AVG(salario) AS PROMEDIO FROM empleados;

SELECT MAX(salario) AS MAXIMO FROM empleados;

SELECT MIN(salario) AS MINIMO FROM empleados;



SELECT CONCAT(nombre, ' tiene un salario de $',salario ) FROM empleados;

SELECT UPPER(nombre) FROM empleados;

SELECT LOWER(nombre) FROM empleados;

SELECT nombre, LENGTH(nombre) FROM empleados; --DEVUELVE EL LARGO DE UN STRING

SELECT SUBSTRING(nombre, 1, 5) FROM empleados; --EXTRAE UNA PARTE DEL STRING

SELECT ROUND(salario, 0) FROM empleados; --REDONDEA EL NUMERO DE DECIMALES

SELECT CEIL(3.1); -- REDONDEA MAS CERCANO ARRIBA

SELECT FLOOR(3.9); -- REDONDEA MAS CERCANO ABAJO

SELECT ABS(-15); -- VALOR ABSOLUTO



SELECT NOW(); -- YYYY-MM-DD hh:mm:ss

SELECT CURRENT_DATE; -- YYYY-MM-DD