import React from 'react';
import Input from '../Form/Input';
import Button from '../Form/Button';
import Error from '../../Helper/Error';
import useForm from '../../Hooks/useForm';
import useFetch from '../../Hooks/useFetch';
import { PASSWORD_LOST } from '../../api';
import Head from '../../Helper/Head';

const LoginPasswordLost = () => {
  const login = useForm();
  const { data, error, loading, request } = useFetch();

  async function handleSubmit(event) {
    event.preventDefault();

    if (login.validate()) {
      const { url, options } = PASSWORD_LOST({
        login: login.value,
        url: window.location.href.replace('lost', 'reset'),
      });
      const { json } = await request(url, options);
      console.log(json);
    }
  }

  return (
    <section>
      <Head title="Perdeu a senha" />
      <h1 className="title">Perdeu a senha?</h1>
      {data ? (
        <p style={{ color: '#4c1' }}>{data}</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <Input label="Email / Usuário" type="text" name="login" {...login} />
          {loading ? (
            <Button disabled>Enviando...</Button>
          ) : (
            <Button>Enviar Email</Button>
          )}
        </form>
      )}
      <Error error={error} />
    </section>
  );
};

export default LoginPasswordLost;
