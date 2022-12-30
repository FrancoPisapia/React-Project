import React from 'react'
import {signInWithEmailAndPassword,onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from '../utils/firebaseCinfig'
import {useState,createContext} from 'react';
import Button from 'react-bootstrap/Button';

export const loginContext = createContext ()

const Login = () => {
    
    const [loginEmail,setLoginEmail] = useState('');
    const [loginUsuario,setLoginUsuario] = useState('')
    const [loginContrasenia,setLoginContrasenia] = useState('')


    const[user, setUser] = useState({})

    onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser)
    })
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

    const logOut = async() =>{
        await signOut(auth)
    }


  return (
    <>
    <form>
    <div>
        <label htmlFor="nombre"> Nombre de Usuario</label>
        <input type="text" id="nombre"  onChange={(event) => setLoginUsuario(event.target.value)}/>
    </div>

    <div>
        <label htmlFor="email"> email</label>
        <input type="email" id="email" onChange={(event) => setLoginEmail(event.target.value)} />
    </div>

    <div>
        <label htmlFor="password"> Contraseña</label>
        <input type="password" id="password" onChange={(event) => setLoginContrasenia(event.target.value)}  />
    </div>

    <Button onClick={ingresar}>
    Iniciar sesión
    </Button>
</form>
<h4>Beinvenido {user?.email}</h4>
<Button onClick={logOut}>Cerrar sesión</Button>
</>

)}
export default Login