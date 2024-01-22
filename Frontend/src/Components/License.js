import React from "react";
import Layout from "./Layout";
import "../css/Layout.css";
import "../css/License.css";
// import { Link } from "react-router-dom";
import { useForm } from 'react-hook-form';

function License() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log('Dados do formulário de licença:', data);
    
  };

    return(
    <Layout>
      <form className="forms" onSubmit={handleSubmit(onSubmit)}>
        <label>
          Nome:
          
          
        </label>
        <input {...register('nome', { required: true })} className='nome'/>
          
          {errors.nome && <span>Nome é obrigatório</span>}

        <label>
          E-mail:
          
        </label>
        <input
            {...register('email', {required: true,pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i, //Utiliza essa regex para testar se o email está dentro do padrão
            })}
          />
          {errors.email && (
            <span>Formato do e-mail incorreto. Verifique o e-mail</span>
          )}

        <label>
          CPF:
         </label>
         <input
            {...register('cpf', {
              required: true,
              pattern: /^\d{3}\.\d{3}\.\d{3}-\d{2}$/i,
            })}
          />
          {errors.cpf && <span>CPF inválido. Utilize o formato XXX.XXX.XXX-XX</span>}

        <label>Telefone do responsável:</label>
          <input {...register('telefone', { required: true,
          pattern:  /^\d+$/})} />
          {errors.telefone && <span>Telefone inválido. Utilize apenas números</span>}

        <button type="submit">Enviar</button>  
      </form>

    </Layout>
    )
};

export default License;