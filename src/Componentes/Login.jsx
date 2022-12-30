import React from 'react'
import {signInWithEmailAndPassword} from "firebase/auth";
import { auth } from '../utils/firebaseCinfig'
import {useState,createContext} from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export const loginContext = createContext ()

const Login = () => {
    
    const [loginEmail,setLoginEmail] = useState('');
    const [loginUsuario,setLoginUsuario] = useState('')
    const [loginContrasenia,setLoginContrasenia] = useState('')


    const ingresar = async() =>{
        try {
            const user = await signInWithEmailAndPassword(
                    auth,
                    loginEmail,
                    loginContrasenia,
                    loginUsuario
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
                    <input type="text" id="nombre" className='col-11' onChange={(event) => setLoginUsuario(event.target.value)} />
                </div>
                <div className='mt-3'>
                    <label htmlFor="email" className='col-12'> Email</label>
                    <input type="email" id="email" className='col-11' onChange={(event) => setLoginEmail(event.target.value)} />
                </div>

                <div className='mt-3'>
                    <label htmlFor="password" className='col-12'> Contraseña</label>
                    <input type="password" id="password" className='col-11' onChange={(event) => setLoginContrasenia(event.target.value)}  />
                </div>
                <div className='centrado2'>
                    <Button className='mt-3'onClick={ingresar}>
                        Iniciar sesión
                    </Button>
                </div>
            </form>
        </Card.Text>



      </Card.Body>
    </Card>
    </div>

</>

)}
export default Login