const db = require('../connection/database')

export const createSistemas = async (req, res) => {
  await db.query(
    'INSERT INTO tabla_sistemas (nombre_sistema, version_sistema) VALUES (?, ?)',
    [req.body.nombre_sistema,
        req.body.version_sistema],
    (err, rows, fields) => {
      if (!err) {
        res.status(200).json(rows)
      } else {
        console.log(err, fields)
      }
    }
  )
}

export const getSistemas = async (req, res) => {
  await db.query('SELECT * FROM tabla_sistemas ORDER BY tabla_sistemas.id_sistema DESC', (err, rows, fields) => {
    if (!err) {
      res.status(200).json(rows)
    } else {
      console.log(err, fields)
    }
  })
}

export const getSistemasById = async (req, res) => {
  await db.query('SELECT * FROM tabla_sistemas WHERE tabla_sistemas.id_sistema = ?', [req.params.sistemaId], (err, rows, fields) => {
    if (!err) {
      res.status(200).json(rows)
    } else {
      console.log(err, fields)
    }
  })
}

export const updateSistemasById = async (req, res) => {
  await db.query(
    'UPDATE tabla_sistemas SET nombre_sistema = ?, version_sistema = ? WHERE id_sistema = ?',
    [req.body.nombre_sistema,
        req.body.version_sistema,
        req.params.sistemaId],

    (err, rows, fields) => {
      if (!err) {
        res.status(200).json(rows)
      } else {
        console.log(err, fields)
      }
    }
  )
}

export const deleteSistemasById = async (req, res) => {
  await db.query('DELETE FROM tabla_sistemas WHERE id_sistema = ?', [req.params.sistemaId], (err, rows, fields) => {
    if (!err) {
      res.status(204).json(rows)
    } else {
      console.log(err, fields)
    }
  })
}
