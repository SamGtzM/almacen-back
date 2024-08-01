
CREATE DATABASE almacen_it;

USE almacen_it;

// ACCESOS A LA PLATAFORMA
CREATE TABLE tabla_accesos(
    id_acceso INT NOT NULL PRIMARY KEY,
    tipo_acceso VARCHAR(255) NOT NULL,
    fecha_alta TIMESTAMP NOT NULL DEFAULT current_timestamp
);

INSERT INTO tabla_accesos (id_acceso, tipo_acceso) VALUES (901, 'Administrador');
INSERT INTO tabla_accesos (id_acceso, tipo_acceso) VALUES (902, 'It');
INSERT INTO tabla_accesos (id_acceso, tipo_acceso) VALUES (903, 'Consulta');

// Areas
/*
Areas empresa en general
*/
CREATE TABLE tabla_areas(
    id_area INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    nombre_area VARCHAR(255) NOT NULL,
    fecha_alta TIMESTAMP NOT NULL DEFAULT current_timestamp
);

INSERT INTO tabla_areas (nombre_area) VALUES ('Sistemas');
INSERT INTO tabla_areas (nombre_area) VALUES ('Mantenimiento');
INSERT INTO tabla_areas (nombre_area) VALUES ('Recursos Humanos');
INSERT INTO tabla_areas (nombre_area) VALUES ('Calidad');
INSERT INTO tabla_areas (nombre_area) VALUES ('Almacen');
INSERT INTO tabla_areas (nombre_area) VALUES ('Logistica');
INSERT INTO tabla_areas (nombre_area) VALUES ('Produccion');

// USUARIOS
CREATE TABLE tabla_usuario(
    id_usuario INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    id_acceso INT NOT NULL,
    id_area INT NOT NULL,
    nombre_usuario VARCHAR(255) NOT NULL,
    numero_empleado VARCHAR(255),
    correo VARCHAR(255) NOT NULL,
    telefono VARCHAR(255),
    usuario VARCHAR(255) NOT NULL, 
    pass VARCHAR(255) NOT NULL,
    usuario_alta VARCHAR(255) NOT NULL,
    fecha_alta TIMESTAMP NOT NULL DEFAULT current_timestamp,
    activo INT NOT NULL,
    FOREIGN KEY(id_area) REFERENCES tabla_areas (id_area),
    FOREIGN KEY(id_acceso) REFERENCES tabla_accesos (id_acceso)
);

//PROVEEDORES
CREATE TABLE tabla_proveedores(
    id_provedor INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    nombre_proveedor VARCHAR(255) NOT NULL,
    activo INT NOT NULL,
    fecha_alta TIMESTAMP NOT NULL DEFAULT current_timestamp
);

// sistemas
CREATE TABLE tabla_sistemas(
    id_sistema INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    nombre_sistema VARCHAR(255) NOT NULL,
    version_sistema VARCHAR(255) NOT NULL,
    fecha_alta TIMESTAMP NOT NULL DEFAULT current_timestamp
);

// EQUIPOS
CREATE TABLE tabla_equipos(
    id_equipo INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    id_sistema INT NOT NULL,
    id_provedor INT NOT NULL,
    id_usuario INT NOT null,
    gama VARCHAR(255),
    modelo VARCHAR(255),
    numero_serie VARCHAR(255),
    cantidad INT,
    factura_contrato VARCHAR(255),
    fecha_inicio_arrendamiento DATETIME,
    fehca_final_arrendamiento DATETIME,
    arrendamiento INT,
    garantia VARCHAR(255),
    mac_equipo VARCHAR(255),
    numero_empleado_asignado INT,
    password_equipo VARCHAR(255),
    hosname VARCHAR(255),
    orden_compra VARCHAR(255),
    estatus_equipo VARCHAR(255),
    fecha_asignacion DATETIME,
    estatus_asignado VARCHAR(255),
    folio_factura VARCHAR(255),
    precio VARCHAR(255),
    iva VARCHAR(255),
    fecha_factura DATETIME,
    activo INT,
    fecha_alta TIMESTAMP NOT NULL DEFAULT current_timestamp,
    FOREIGN KEY(id_sistema) REFERENCES tabla_sistemas (id_sistema),
    FOREIGN KEY(id_usuario) REFERENCES tabla_usuario (id_usuario),
    FOREIGN KEY(id_provedor) REFERENCES tabla_proveedores (id_provedor)
);