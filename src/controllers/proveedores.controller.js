const db = require('../connection/database')

export const createProveedores = async (req, res) => {
  await db.query(
    'INSERT INTO tabla_proveedores (nombre_proveedor, activo) VALUES (?, ?)',
    [req.body.nombre_proveedor,
        req.body.activo],
    (err, rows, fields) => {
      if (!err) {
        res.status(200).json(rows)
      } else {
        console.log(err, fields)
      }
    }
  )
}

export const getProveedores = async (req, res) => {
  await db.query('SELECT * FROM tabla_proveedores WHERE activo != 0 ORDER BY tabla_proveedores.id_provedor DESC', (err, rows, fields) => {
    if (!err) {
      res.status(200).json(rows)
    } else {
      console.log(err, fields)
    }
  })
}

export const getProveedoresById = async (req, res) => {
  await db.query('SELECT * FROM tabla_proveedores WHERE tabla_proveedores.id_provedor = ? AND activo != 0', [req.params.proveedorId], (err, rows, fields) => {
    if (!err) {
      res.status(200).json(rows)
    } else {
      console.log(err, fields)
    }
  })
}

export const updateProveedoresById = async (req, res) => {
  await db.query(
    'UPDATE tabla_proveedores SET nombre_proveedor = ? WHERE id_provedor = ?',
    [req.body.nombre_proveedor,
        req.params.proveedorId],

    (err, rows, fields) => {
      if (!err) {
        res.status(200).json(rows)
      } else {
        console.log(err, fields)
      }
    }
  )
}

export const deleteProveedoresById = async (req, res) => {
  await db.query('UPDATE tabla_proveedores SET activo = 0 WHERE id_provedor = ?', [req.params.proveedorId], (err, rows, fields) => {
    if (!err) {
      res.status(204).json(rows)
    } else {
      console.log(err, fields)
    }
  })
}
