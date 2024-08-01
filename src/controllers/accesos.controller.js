const db = require('../connection/database')

export const createAccesos = async (req, res) => {
  await db.query(
    'INSERT INTO tabla_accesos (id_acceso, tipo_acceso) VALUES (?, ?)',
    [req.body.id_acceso,
        req.body.tipo_acceso],
    (err, rows, fields) => {
      if (!err) {
        res.status(200).json(rows)
      } else {
        console.log(err, fields)
      }
    }
  )
}

export const getAccesos = async (req, res) => {
  await db.query('SELECT * FROM tabla_accesos ORDER BY tabla_accesos.id_acceso DESC', (err, rows, fields) => {
    if (!err) {
      res.status(200).json(rows)
    } else {
      console.log(err, fields)
    }
  })
}

export const getAccesosById = async (req, res) => {
  await db.query('SELECT * FROM tabla_accesos WHERE tabla_accesos.id_acceso = ?', [req.params.accesoId], (err, rows, fields) => {
    if (!err) {
      res.status(200).json(rows)
    } else {
      console.log(err, fields)
    }
  })
}

export const updateAccesosById = async (req, res) => {
  await db.query(
    'UPDATE tabla_accesos SET id_acceso = ?, tipo_acceso = ? WHERE id_acceso = ?',
    [req.body.id_acceso,
        req.body.tipo_acceso,
        req.params.accesoId],

    (err, rows, fields) => {
      if (!err) {
        res.status(200).json(rows)
      } else {
        console.log(err, fields)
      }
    }
  )
}

export const deleteAccesosById = async (req, res) => {
  await db.query('DELETE FROM tabla_accesos WHERE id_acceso = ?', [req.params.accesoId], (err, rows, fields) => {
    if (!err) {
      res.status(204).json(rows)
    } else {
      console.log(err, fields)
    }
  })
}
