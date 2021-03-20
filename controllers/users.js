
const{response, request} = require('express');

const usuariosGet = (req = request, res = response) =>{

    //http://localhost:8081/api/users?q=hola&nombre=DavidRobinet&apikey=123456789
    //forma 1
    //const params = req.query;

    //res.json({
    //    msg:'get API -controlador',
    //    params 
    //});

    //forma 2
    //desestructuracion
    const {q , nombre='No Name', apikey, page = 1, limit } = req.query;

    res.json({
        msg:'get API -controlador',
        q,
        nombre,
        apikey,
        page,
        limit
    });
}

const usuariosPut = (req, res = response) =>{
    const id = req.params.id;
    res.json({
        msg:'put API -controlador',
        id
    });
}
const usuariosPost = (req, res = response) =>{
    //Extraer el body 
    const body = req.body;
    res.json({
        msg:'post API -controlador',
        body
    });

    //segunda forma 
    //const {nombre, edad} = req.body;
    //res.json({
    //    msg:'post API -controlador',
    //    nombre,
    //    edad
    //});
}
const usuariosDelete = (req, res = response) =>{

    res.json({
        msg:'delete API -controlador'
    });
}

module.exports = {
    usuariosGet,
    usuariosPut,
    usuariosPost,
    usuariosDelete
}

