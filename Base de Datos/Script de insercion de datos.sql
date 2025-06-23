-- Insercion de datos en tabla: configuration_items

INSERT INTO configuration_items (
    id, nombre, tipo, descripcion, numero_serie, version, fecha_adquisicion,
    estado_actual, ubicacion_fisica, propietario_responsable, ambiente,
    niveles_seguridad, cumplimiento, estado_configuracion,
    numero_licencia, fecha_vencimiento
)
VALUES
(uuid_generate_v4(), 'Servidor1', 'Hardware', 'Servidor de Aplicaciones', 'SN123456', 'v1.0', '2022-01-01',
 'Activo', 'Sala de Servidores 1', 'Equipo de Infraestructura', 'PROD', 'Alto', 'Cumple', 'Aprobado', 'ABC123', '2023-01-01'),

(uuid_generate_v4(), 'Aplicación1', 'Software', 'Aplicación de contabilidad', NULL, 'v2.5', '2022-03-15',
 'Activo', NULL, 'Equipo de Desarrollo', 'PROD', 'Medio', 'Cumple', 'Aprobado', 'XYZ456', '2024-01-01'),

(uuid_generate_v4(), 'BaseDatos1', 'Base de Datos', 'Base de datos central', NULL, 'v12.1', '2022-02-20',
 'Activo', 'Sala de Servidores 1', 'Equipo de Bases de Datos', 'QA', 'Alto', 'Cumple', 'Aprobado', 'DB789', '2024-12-31'),

(uuid_generate_v4(), 'ServidorQA', 'Hardware', 'Servidor para pruebas', 'SNQA001', 'v1.1', '2023-04-10',
 'Activo', 'Rack QA', 'Equipo de QA', 'QA', 'Medio', 'Cumple', 'Aprobado', NULL, NULL),

(uuid_generate_v4(), 'AppDesarrollo', 'Software', 'Aplicación de seguimiento de tareas', NULL, 'v0.9', '2023-05-05',
 'Activo', NULL, 'Equipo de Desarrollo', 'DEV', 'Bajo', 'Cumple', 'Pendiente', NULL, NULL);

-- Insercion de datos en tabla: ci_relaciones
INSERT INTO ci_relaciones (id, ci_origen_id, ci_destino_id, tipo_relacion)
VALUES
(uuid_generate_v4(), (SELECT id FROM configuration_items WHERE nombre = 'Servidor1'), (SELECT id FROM configuration_items WHERE nombre = 'Aplicación1'), 'alojado en'),

(uuid_generate_v4(), (SELECT id FROM configuration_items WHERE nombre = 'Aplicación1'), (SELECT id FROM configuration_items WHERE nombre = 'BaseDatos1'), 'usa'),

(uuid_generate_v4(), (SELECT id FROM configuration_items WHERE nombre = 'ServidorQA'), (SELECT id FROM configuration_items WHERE nombre = 'AppDesarrollo'), 'prueba'),

(uuid_generate_v4(), (SELECT id FROM configuration_items WHERE nombre = 'AppDesarrollo'), (SELECT id FROM configuration_items WHERE nombre = 'BaseDatos1'), 'conecta a'),

(uuid_generate_v4(), (SELECT id FROM configuration_items WHERE nombre = 'BaseDatos1'), (SELECT id FROM configuration_items WHERE nombre = 'Servidor1'), 'almacenado en');

-- Insercion de datos en tabla: ci_cambios
INSERT INTO ci_cambios (id, ci_id, fecha_cambio, descripcion, documentacion, enlace_incidente)
VALUES
(uuid_generate_v4(), (SELECT id FROM configuration_items WHERE nombre = 'Servidor1'), '2022-02-01', 'Actualización de software', 'https://manuales.ejemplo.com/servidor1', 'https://incidentes.ejemplo.com/001'),

(uuid_generate_v4(), (SELECT id FROM configuration_items WHERE nombre = 'Aplicación1'), '2022-04-01', 'Parche de seguridad aplicado', 'https://docs.ejemplo.com/aplicacion1', 'https://incidentes.ejemplo.com/002'),

(uuid_generate_v4(), (SELECT id FROM configuration_items WHERE nombre = 'BaseDatos1'), '2023-01-15', 'Migración de versión', 'https://docs.ejemplo.com/bd-v12', NULL),

(uuid_generate_v4(), (SELECT id FROM configuration_items WHERE nombre = 'ServidorQA'), '2023-05-01', 'Mantenimiento de hardware', NULL, 'https://incidentes.ejemplo.com/003'),

(uuid_generate_v4(), (SELECT id FROM configuration_items WHERE nombre = 'AppDesarrollo'), '2023-06-10', 'Actualización de funcionalidades', 'https://docs.ejemplo.com/app-dev', 'https://incidentes.ejemplo.com/004');



SELECT * FROM configuration_items;
SELECT * FROM ci_relaciones;
SELECT * FROM ci_cambios;







