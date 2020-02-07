import React, { useState, useEffect } from 'react';


const useValidacion = (stateInicial, validar, fn) => {
    const [ valores, guardarValores ] = useState(stateInicial);
    const [ errores, guardarErrores ] = useState({});
    const [ submitForm, guardarSubmitForm ] = useState(false);

    usesEffect(() => {
        if(submitForm) {
            const noErrores = Object.keys(errores).length === 0;
            if(noErrores){
                fn(); // Fn = Funcion que se ejecuta en el componente.
            }
            guardarSubmitForm(false);
        }
    }, []);

    return ();
}

export default useValidacion;