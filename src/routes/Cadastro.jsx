import { useState } from 'react'

function Cadastro(){
    /*Hook useState */
    const [dados, setDados]=useState({
        nome:'',
        email:'',
    });
    /*gravando no localStorage */

    const info =localStorage.setItem('info',JSON.stringify(dados))

    /*função que pega e altera os valores digitados */
    const dadosInput =(e)=>{
        setDados({...dados,[e.target.name]: e.target.value});
    }

    /*função que executar ao clicar no botão */
    const handleSubmit =(e)=>{
        e.preventDefault();
        localStorage.getItem(info)

    }



    return(
        <>
        <form onClick={handleSubmit}>
        <fieldset>
            <legend>Cadastro</legend>
            <label htmlFor='nome'>Nome:</label>
            <input type="text" name="nome" placeholder="digite seu nome" onChange={dadosInput}/>

            <label htmlFor='email'>Email:</label>
            <input type="text" name="email" placeholder="digite seu Email" onChange={dadosInput}/>

            <button type="submit">Cadastrar</button>
        </fieldset>
        {/*pegando os valores digitados e passando no paragragfo */}
        <p>{dados.nome}</p>
        <p>{dados.email}</p>
        </form>
        </>
    )
}
export default Cadastro