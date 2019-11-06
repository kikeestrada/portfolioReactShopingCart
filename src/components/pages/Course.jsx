import React, { useState } from "react"

const Course = ({match}) => {

    const [state, setState] = useState({
        id              : 1,
        title           : "title1",
        image           : "https://scott88lee.github.io/FMX/img/avatar.jpg",
        price           : "50",
        profesorName    : "Enrique"
    });
    const changeTitle = (text) => {
        setState({
            ...state,
            title: text
        })
    };

    return(
        <div className="ed-grid m-grid-3">
            {
                state ? (
                     <>
                         <h1 className="m-cols-3">{state.title}</h1>
                         <img className="m-cols-1" src={state.image} alt={state.title}/>
                         <p className="m-cols-2">Profesor: {state.profesorName}</p>
                        <button onClick={changeTitle.bind(this, "Go Desde Cero")}>Cambiar Titulo</button>
                     </>

                ) : (
                    <div className="ed-grid">
                        <h1>El curso no existe</h1>
                    </div>
                )
            }
        </div>
    )
};

export default Course