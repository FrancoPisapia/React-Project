import React from 'react'
import { createUserWithEmailAndPassword,onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from '../utils/firebaseCinfig'
import {useState} from 'react';
import Button from 'react-bootstrap/Button';

const Register = () => {
    
    const [registerEmail,setRegisterEmail] = useState('');
    const [registerUsuario,setRegisterUsuario] = useState('')
    const [registerContrasenia,setRegisterContrasenia] = useState('')


    const[user, setUser] = useState({})

    onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser)
    })
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

    const logOut = async() =>{
        await signOut(auth)
    }


  return (
    <>
    <form>
    <div>
        <label htmlFor="nombre"> Nombre de Usuario</label>
        <input type="text" id="nombre" onChange={(event) => setRegisterUsuario(event.target.value)} />
    </div>

    <div>
        <label htmlFor="email"> email</label>
        <input type="email" id="email" onChange={(event) => setRegisterEmail(event.target.value)} />
    </div>

    <div>
        <label htmlFor="password"> Contraseña</label>
        <input type="password" id="password" onChange={(event) => setRegisterContrasenia(event.target.value)}  />
    </div>

    <Button onClick={registrarse}>
    Registrarse
    </Button>
</form>
<h4>Beinvenido {user?.email}</h4>
<Button onClick={logOut}>Cerrar sesión</Button>
</>

  )
}

export default Register