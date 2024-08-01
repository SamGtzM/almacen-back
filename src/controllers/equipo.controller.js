const db = require('../connection/database')

export const createEquipos = async (req, res) => {
  await db.query(
    'INSERT INTO tabla_equipos (id_sistema, id_provedor, id_usuario, gama, modelo, numero_serie, cantidad, factura_contrato, fecha_inicio_arrendamiento, fehca_final_arrendamiento, arrendamiento, garantia, mac_equipo, numero_empleado_asignado, password_equipo, hosname, orden_compra, estatus_equipo, fecha_asignacion, estatus_asignado, folio_factura, precio, iva, fecha_factura, activo) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)',
    [req.body.id_sistema,
        req.body.id_provedor,
        req.body.id_usuario,
        req.body.gama,
        req.body.modelo,
        req.body.numero_serie,
        req.body.cantidad,
        req.body.factura_contrato,
        req.body.fecha_inicio_arrendamiento,
        req.body.fehca_final_arrendamiento,
        req.body.arrendamiento,
        req.body.garantia,
        req.body.mac_equipo,
        req.body.numero_empleado_asignado,
        req.body.password_equipo,
        req.body.hosname,
        req.body.orden_compra,
        req.body.estatus_equipo,
        req.body.fecha_asignacion,
        req.body.estatus_asignado,
        req.body.folio_factura,
        req.body.precio,
        req.body.iva,
        req.body.fecha_factura,
        req.body.activo ],
    (err, rows, fields) => {
      if (!err) {
        res.status(200).json(rows)
      } else {
        console.log(err, fields)
      }
    }
  )
}

export const getEquipos = async (req, res) => {
  await db.query('SELECT tabla_equipos.id_equipo, tabla_equipos.id_sistema, tabla_sistemas.nombre_sistema, tabla_sistemas.version_sistema, tabla_equipos.id_provedor, tabla_proveedores.nombre_proveedor, tabla_equipos.id_usuario, tabla_usuario.nombre_usuario, tabla_usuario.numero_empleado, tabla_usuario.correo, tabla_usuario.usuario, tabla_equipos.gama, tabla_equipos.modelo, tabla_equipos.numero_serie, tabla_equipos.cantidad, tabla_equipos.factura_contrato, tabla_equipos.fecha_inicio_arrendamiento, tabla_equipos.fehca_final_arrendamiento, tabla_equipos.arrendamiento, tabla_equipos.garantia, tabla_equipos.mac_equipo, tabla_equipos.numero_empleado_asignado, tabla_equipos.password_equipo, tabla_equipos.hosname, tabla_equipos.orden_compra, tabla_equipos.estatus_equipo, tabla_equipos.fecha_asignacion, tabla_equipos.estatus_asignado, tabla_equipos.folio_factura, tabla_equipos.precio, tabla_equipos.iva, tabla_equipos.fecha_factura, tabla_equipos.activo, tabla_equipos.fecha_alta FROM tabla_equipos INNER JOIN tabla_sistemas ON tabla_equipos.id_equipo = tabla_sistemas.id_sistema INNER JOIN tabla_proveedores ON tabla_equipos.id_provedor = tabla_proveedores.id_provedor INNER JOIN tabla_usuario ON tabla_equipos.id_usuario = tabla_usuario.id_usuario WHERE tabla_equipos.activo != 0 ORDER BY tabla_equipos.id_equipo DESC;', (err, rows, fields) => {
    if (!err) {
      res.status(200).json(rows)
    } else {
      console.log(err, fields)
    }
  })
}

export const getEquiposById = async (req, res) => {
  await db.query('SELECT tabla_equipos.id_equipo, tabla_equipos.id_sistema, tabla_sistemas.nombre_sistema, tabla_sistemas.version_sistema, tabla_equipos.id_provedor, tabla_proveedores.nombre_proveedor, tabla_equipos.id_usuario, tabla_usuario.nombre_usuario, tabla_usuario.numero_empleado, tabla_usuario.correo, tabla_usuario.usuario, tabla_equipos.gama, tabla_equipos.modelo, tabla_equipos.numero_serie, tabla_equipos.cantidad, tabla_equipos.factura_contrato, tabla_equipos.fecha_inicio_arrendamiento, tabla_equipos.fehca_final_arrendamiento, tabla_equipos.arrendamiento, tabla_equipos.garantia, tabla_equipos.mac_equipo, tabla_equipos.numero_empleado_asignado, tabla_equipos.password_equipo, tabla_equipos.hosname, tabla_equipos.orden_compra, tabla_equipos.estatus_equipo, tabla_equipos.fecha_asignacion, tabla_equipos.estatus_asignado, tabla_equipos.folio_factura, tabla_equipos.precio, tabla_equipos.iva, tabla_equipos.fecha_factura, tabla_equipos.activo, tabla_equipos.fecha_alta FROM tabla_equipos INNER JOIN tabla_sistemas ON tabla_equipos.id_equipo = tabla_sistemas.id_sistema INNER JOIN tabla_proveedores ON tabla_equipos.id_provedor = tabla_proveedores.id_provedor INNER JOIN tabla_usuario ON tabla_equipos.id_usuario = tabla_usuario.id_usuario WHERE tabla_equipos.activo != 0 AND tabla_equipos.id_equipo = ? ORDER BY tabla_equipos.id_equipo DESC;', [req.params.equipoId], (err, rows, fields) => {
    if (!err) {
      res.status(200).json(rows)
    } else {
      console.log(err, fields)
    }
  })
}

export const updateEquiposById = async (req, res) => {
  await db.query(
    'UPDATE tabla_equipos SET id_sistema = ?, id_provedor = ?, id_usuario = ?, gama = ?, modelo = ?, numero_serie = ?, cantidad = ?, factura_contrato = ?, fecha_inicio_arrendamiento = ?, fehca_final_arrendamiento = ?, arrendamiento = ?, garantia = ?, mac_equipo = ?, numero_empleado_asignado = ?, password_equipo = ?, hosname = ?, orden_compra = ?, estatus_equipo = ?, fecha_asignacion = ?, estatus_asignado = ?, folio_factura = ?, precio = ?, iva = ?, fecha_factura = ? WHERE id_equipo = ?',
    [req.body.id_sistema,
        req.body.id_provedor,
        req.body.id_usuario,
        req.body.gama,
        req.body.modelo,
        req.body.numero_serie,
        req.body.cantidad,
        req.body.factura_contrato,
        req.body.fecha_inicio_arrendamiento,
        req.body.fehca_final_arrendamiento,
        req.body.arrendamiento,
        req.body.garantia,
        req.body.mac_equipo,
        req.body.numero_empleado_asignado,
        req.body.password_equipo,
        req.body.hosname,
        req.body.orden_compra,
        req.body.estatus_equipo,
        req.body.fecha_asignacion,
        req.body.estatus_asignado,
        req.body.folio_factura,
        req.body.precio,
        req.body.iva,
        req.body.fecha_factura,
        req.params.equipoId],

    (err, rows, fields) => {
      if (!err) {
        res.status(200).json(rows)
      } else {
        console.log(err, fields)
      }
    }
  )
}

export const deleteEquiposById = async (req, res) => {
  await db.query('UPDATE tabla_equipos SET activo = 0 WHERE id_equipo = ?', [req.params.equipoId], (err, rows, fields) => {
    if (!err) {
      res.status(204).json(rows)
    } else {
      console.log(err, fields)
    }
  })
}

export const getEquiposRHById = async (req, res) => {
  await db.query('SELECT * FROM tabla_equipos WHERE activo != 0 AND tabla_equipos.numero_empleado_asignado = ?', [req.params.numeroempleado], (err, rows, fields) => {
    if (!err) {
      res.status(200).json(rows)
    } else {
      console.log(err, fields)
    }
  })
}
