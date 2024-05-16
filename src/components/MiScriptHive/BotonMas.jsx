import { React } from 'react';
import reactLogo from '../../assets/imgs/mas.png';

export const BotonMas = ({cambiarMostrar}) => {

    return (
        <>
            <div className='section'>
                <h1 className='title'>BotonMas</h1>
                <img className='iconoMas' src={reactLogo} alt="Icono de agregar" onClick={cambiarMostrar} />
            </div>
        </>
    )

}
