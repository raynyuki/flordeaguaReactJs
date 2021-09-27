import React from 'react';

const ItemListContainer = (props) => {

    return(
        <div>
            <h4>{props.title}</h4>
            <ol>
                <li>Cursos Inicial</li>
                <li>Curso Intermedio</li>
                <li>Curso Avanzado</li>
            </ol>
        </div>
    )
}

export default ItemListContainer;
