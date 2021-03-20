
const{ Router }= require('express');
const { usuariosGet,
        usuariosPut,
        usuariosPost,
        usuariosDelete } = require('../controllers/users');
const router = Router();

router.get('/', usuariosGet);

//actualizar informacion
router.put('/:id', usuariosPut);
//post es para crear nuevos recursos
router.post('/', usuariosPost);
//delete para borrar el registro
router.delete('/', usuariosDelete);

module.exports = router;