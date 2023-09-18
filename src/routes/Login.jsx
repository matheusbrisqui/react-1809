import {useRef} from 'react'
import Conteudo from './Conteudo';

function Login(){

    /*Hooks */
     const usuario=useRef();
     const senha=useRef();

     const getUser =sessionStorage.getItem('userData');
     const getSenha=sessionStorage.getItem('senhaData');

    const handleSubmit =()=>{
        if(usuario.current.value ==='admin' && senha.current.value ==='123456' )
        {
            sessionStorage.setItem('userData','admin');
            sessionStorage.setItem('senhaData', '123456');
        }else{
            alert("Usuario e senha invalidos");
        }
        
    };


    return(
        <>
                {/* if ternario*/}
            {getUser && getSenha ? (
                <Conteudo/>
            ):(

        <form onSubmit={handleSubmit}>
            <h1>Login</h1>
            <p>
            <label htmlFor="text" >Usuario:</label>
            <input type="text" ref={usuario}/>
            </p>

            <p>
            <label htmlFor="text">Senha:</label>
            <input type="password" ref={senha}/>
            </p>

            <input type="submit" value="Login" id="login"/>
           
        </form>
     )}    
        </>
        
    )
}

export default Login