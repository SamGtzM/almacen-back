const db = require('../connection/database')

export const createAreas = async (req, res) => {
  await db.query(
    'INSERT INTO tabla_areas (nombre_area) VALUES (?)',
    [req.body.nombre_area],
    (err, rows, fields) => {
      if (!err) {
        res.status(200).json(rows)
      } else {
        console.log(err, fields)
      }
    }
  )
}

export const getAreas = async (req, res) => {
  await db.query('SELECT * FROM tabla_areas ORDER BY tabla_areas.id_area DESC', (err, rows, fields) => {
    if (!err) {
      res.status(200).json(rows)
    } else {
      console.log(err, fields)
    }
  })
}

export const getAreasById = async (req, res) => {
  await db.query('SELECT * FROM tabla_areas WHERE tabla_areas.id_area = ?', [req.params.areaId], (err, rows, fields) => {
    if (!err) {
      res.status(200).json(rows)
    } else {
      console.log(err, fields)
    }
  })
}

export const updateAreasById = async (req, res) => {
  await db.query(
    'UPDATE tabla_areas SET nombre_area = ? WHERE id_area = ?',
    [req.body.nombre_area,
      req.params.areaId],

    (err, rows, fields) => {
      if (!err) {
        res.status(200).json(rows)
      } else {
        console.log(err, fields)
      }
    }
  )
}

export const deleteAreasById = async (req, res) => {
  await db.query('DELETE FROM tabla_areas WHERE id_area = ?', [req.params.areaId], (err, rows, fields) => {
    if (!err) {
      res.status(204).json(rows)
    } else {
      console.log(err, fields)
    }
  })
}
