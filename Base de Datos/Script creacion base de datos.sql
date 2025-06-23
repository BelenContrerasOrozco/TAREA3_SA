-- SCRIPT DE BASE DE DATOS --
-- Belen Orozco 201901604 --

-- Crear la base de datos
CREATE DATABASE "TAREA3_SA";

-- Habilitando la extensión para generar UUIDs automáticamente
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Tabla principal: configuration_items
CREATE TABLE configuration_items (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    nombre TEXT NOT NULL,
    tipo TEXT NOT NULL,  -- Hardware, Software, etc.
    descripcion TEXT,
    numero_serie TEXT,
    version TEXT,
    fecha_adquisicion DATE,
    estado_actual TEXT,
    ubicacion_fisica TEXT,
    propietario_responsable TEXT,
    ambiente TEXT,  -- DEV, QA, PROD
    niveles_seguridad TEXT,
    cumplimiento TEXT,
    estado_configuracion TEXT,
    numero_licencia TEXT,
    fecha_vencimiento DATE,
    creado_en TIMESTAMP DEFAULT NOW(),
    actualizado_en TIMESTAMP DEFAULT NOW()
);

-- Tabla para relaciones entre CIs
CREATE TABLE ci_relaciones (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    ci_origen_id UUID NOT NULL,
    ci_destino_id UUID NOT NULL,
    tipo_relacion TEXT,
    FOREIGN KEY (ci_origen_id) REFERENCES configuration_items(id) ON DELETE CASCADE,
    FOREIGN KEY (ci_destino_id) REFERENCES configuration_items(id) ON DELETE CASCADE
);

-- Tabla para auditoría de cambios en CIs
CREATE TABLE ci_cambios (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    ci_id UUID NOT NULL,
    fecha_cambio DATE NOT NULL,
    descripcion TEXT,
    documentacion TEXT,
    enlace_incidente TEXT,
    FOREIGN KEY (ci_id) REFERENCES configuration_items(id) ON DELETE CASCADE
);
