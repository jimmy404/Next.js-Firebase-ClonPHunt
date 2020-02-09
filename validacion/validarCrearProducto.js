export default function validarCrearCuenta(valores) {

    let errores = {};

    //validar el nombre del usuario
    if(!valores.nombre) {
        errores.nombre = "El Nombre es obligatorio";
    }

//validar empresa
if(!valores.empresa){
    errores.empresa = "Nombre Empresa es obligatorio"
}

    //validar url
    if(!valores.url){
        errores.url = "La URL del producto es obligatoria"
    } else if(!/^(ftp|http|https):\/\/[^ "]+$/.test(valores.url)) {
        errores.url = "URL mal formateada o no válida"
    }

    //validar descripcion
    if(!valores.descripcion){
        errores.descripcion = "Agrega una descripcion de tu producto"
    }


    return errores;
}