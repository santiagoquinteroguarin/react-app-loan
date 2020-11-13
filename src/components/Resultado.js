import React from 'react';

const Resultado = (props) => {
    const { cantidad, plazo, total } = props;

    return ( 
        <div className="u-full-width resultado">
            <h2>Resumen</h2>
            <p>La Cantidad solicitada es: $ {cantidad}</p>
            <p>A pagar en: {plazo} Meses</p>
            <p>Su pago mensual es de: $ { (total / plazo).toFixed(2) } </p>
            <p>Total a pagar: $ {(total).toFixed(2)}</p>
        </div>
    );
}

export default Resultado;