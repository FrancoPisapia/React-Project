import React from 'react'
import { createUserWithEmailAndPassword} from "firebase/auth";
import { auth } from '../utils/firebaseCinfig'
import {useState} from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


const Register = () => {

    
    const [registerEmail,setRegisterEmail] = useState('');
    const [registerUsuario,setRegisterUsuario] = useState('')
    const [registerContrasenia,setRegisterContrasenia] = useState('')
    const [registerContrasenia2,setRegisterContrasenia2] = useState('')



    const registrarse = async() =>{
        try {
            const user = await createUserWithEmailAndPassword(
                    auth,
                    registerEmail,
                    registerContrasenia,
                    registerUsuario
                );
                console.log(user)
        }catch(error) {
        console.log(error.mensaje)
    }
    }




  return (
    <>
    <div className='centrado2'>
        <Card className='mt-5 formaCartaRegistroEInicioSesion'>
      <Card.Header as="h5">Registarse</Card.Header>
      <Card.Body>
        <Card.Text>
            <form className='formaCartaRegistroEInicioSesion'>
                <div className='mt-3'> 
                    <label htmlFor="nombre" > Nombre de Usuario</label>
                    <input type="text" id="nombre" className='col-11' onChange={(event) => setRegisterUsuario(event.target.value)} />
                </div>
                <div className='mt-3'>
                    <label htmlFor="email" className='col-12'> Email</label>
                    <input type="email" id="email" className='col-11' onChange={(event) => setRegisterEmail(event.target.value)} />
                </div>

                <div className='mt-3'>
                    <label htmlFor="password" className='col-12'> Contraseña</label>
                    <input type="password" id="password" className='col-11' onChange={(event) => setRegisterContrasenia(event.target.value)}  />
                </div>
                <div className='mt-3'>
                    <label htmlFor="password" className='col-12'> Verificar Contraseña</label>
                    <input type="password" id="password"  className='col-11' onChange={(event) => setRegisterContrasenia2(event.target.value)}  />
                </div>
                {

                    registerContrasenia === registerContrasenia2
                    ?<div className='centrado2'> <Button className='mt-3'  onClick={registrarse}>Registrarse</Button></div>
                    : <div>Las contraseñas no coinciden</div>
                }
                
            </form>
        </Card.Text>



      </Card.Body>
    </Card>
    </div>
</>

  )
}

export default Register