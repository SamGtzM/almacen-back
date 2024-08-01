const bcryptjs = require('bcryptjs')
const jwt = require('jsonwebtoken')
const db = require('../connection/database')
const config = require('../config')

export const getUsers = async (req, res) => {
  await db.query('SELECT tabla_usuario.id_usuario, tabla_usuario.id_acceso, tabla_accesos.tipo_acceso, tabla_usuario.id_area, tabla_areas.nombre_area, tabla_usuario.nombre_usuario, tabla_usuario.numero_empleado, tabla_usuario.correo, tabla_usuario.telefono, tabla_usuario.usuario, tabla_usuario.usuario_alta, tabla_usuario.fecha_alta, tabla_usuario.activo FROM tabla_usuario INNER JOIN tabla_accesos ON tabla_usuario.id_acceso = tabla_accesos.id_acceso INNER JOIN tabla_areas ON tabla_usuario.id_area = tabla_areas.id_area WHERE activo != 0 ORDER BY id_usuario DESC;', (err, rows, fields) => {
    if (!err) {
      res.status(200).json(rows)
    } else {
      res.status(404).json('Se ha producido un problema al cargar los usuarios', fields)
    }
  })
}

/*export const getUsersById = async (req, res) => {
  await db.query('SELECT tabla_usuario.id_usuario, tabla_usuario.id_acceso, tabla_accesos.tipo_acceso, tabla_usuario.id_area, tabla_areas.nombre_area, tabla_usuario.nombre_usuario, tabla_usuario.numero_empleado, tabla_usuario.correo, tabla_usuario.telefono, tabla_usuario.usuario, tabla_usuario.usuario_alta, tabla_usuario.fecha_alta, tabla_usuario.activo FROM tabla_usuario INNER JOIN tabla_accesos ON tabla_usuario.id_acceso = tabla_accesos.id_acceso INNER JOIN tabla_areas ON tabla_usuario.id_area = tabla_areas.id_area WHERE id_usuario = ? AND activo != 0 ORDER BY id_usuario DESC;', [req.params.userId], (err, rows, fields) => {
    if (!err) {
      res.status(200).json(rows)
    } else {
      res.status(404).json('Se ha producido un problema al cargar el usuario', fields)
    }
  })
}

export const updateUsersById = async (req, res) => {
  const { pass } = req.body
  const passHashUpdate = await bcryptjs.hash(pass, 10)
  await db.query(
    'UPDATE tabla_usuario SET id_acceso = ?, id_area = ?, nombre_usuario = ?, numero_empleado = ?, correo = ?, telefono = ?, usuario = ?, pass = ?, usuario_alta = ? WHERE id_usuario = ?',
    [req.body.id_acceso,
      req.body.id_area,
      req.body.nombre_usuario,
      req.body.numero_empleado,
      req.body.correo,
      req.body.telefono,
      req.body.usuario,
      passHashUpdate,
      req.body.usuario_alta,
      req.params.userId],

    (err, rows, fields) => {
      if (!err) {
        res.status(200).json(rows)
      } else {
        res.status(404).json('Se ha producido un problema al ingresar los datos', err, fields)
      }
    }
  )
}

export const deleteUsersById = async (req, res) => {
  await db.query('UPDATE tabla_usuario SET activo = 0 WHERE id_usuario = ?', [req.params.userId], (err, rows, fields) => {
    if (!err) {
      res.status(204).json(rows)
    } else {
      res.json('Se ha producido un problema al eliminar el dato', err, fields)
    }
  })
}

export const singupUser = async (req, res) => {
  const { pass } = req.body
  const passHash = await bcryptjs.hash(pass, 10)
  db.query(
    'SELECT * FROM tabla_usuario WHERE numero_empleado =? OR correo =? OR telefono =? OR usuario =? AND activo != 0',
    [req.body.numero_empleado,
      req.body.correo,
      req.body.telefono,
      req.body.usuario],
    (err, rows, fields) => {
      if (!err) {
        if (rows.length === 0) {
          db.query(
            'INSERT INTO tabla_usuario ( id_acceso, id_area, nombre_usuario, numero_empleado, correo, telefono, usuario, pass, usuario_alta, activo ) VALUES (?,?,?,?,?,?,?,?,?,?)',
            [req.body.id_acceso,
                req.body.id_area,
                req.body.nombre_usuario,
                req.body.numero_empleado,
                req.body.correo,
                req.body.telefono,
                req.body.usuario,
                passHash,
                req.body.usuario_alta,
                req.body.activo],
            (errInsert, rowsInsert, fieldsInsert) => {
              if (!errInsert) {
                res.status(200).json(rowsInsert)
              } else {
                res.json(errInsert, fieldsInsert)
              }
            }
          )
        } else {
          const num = Number(rows[0].numero_empleado)
          const num2 = Number(req.body.numero_empleado)
          if (num === num2) {
            res.json('Numero de empleado ya registrado')
          } else if (rows[0].correo_electronico === req.body.correo_electronico) {
            res.json('Correo ya registrado')
          } else if (rows[0].telefono === req.body.telefono) {
            res.json('Telefono ya registrado')
          } else if (rows[0].usuario === req.body.usuario) {
            res.json('Usuario ya registrado')
          }
        }
      } else {
        res.json(err, fields)
      }
    }
  )
}

export const singinUser = async (req, res) => {
  db.query('SELECT * FROM tabla_usuario WHERE activo != 0 AND usuario = ?', [req.body.usuario], (err, rows, fields) => {
    if (rows.length !== 0) {
      bcryptjs.compare(req.body.pass, rows[0].pass, (errpass, respass) => {
        if (errpass) {
          res.json(err, fields)
        }
        if (respass) {
          const data = JSON.stringify(rows[0])
          const token = jwt.sign(data, config.llave)
          res.json({ token })
        } else {
          res.status(401).json('Contraseña incorrecta')
        }
      })
    } else {
      res.status(401).json('Usuario incorrecto')
    }
  })
}

export const testToken = async (req, res) => {
  if (!req.headers.authorization) return res.status(401).json('No autorizado')
  const token = req.headers.authorization.substr(7)
  if (token !== '') {
    const content = jwt.verify(token, config.llave)
    req.data = content
  } else {
    res.status(401).json('token vacio')
  }
}
*/