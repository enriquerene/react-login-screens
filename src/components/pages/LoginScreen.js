import { useState } from 'react';
import Logo from '../atoms/Logo';
import TextInput from '../atoms/TextInput';
import PasswordInput from '../atoms/PasswordInput';
import TextLink from '../atoms/TextLink';
import FormButton from '../atoms/FormButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignInAlt } from '@fortawesome/free-solid-svg-icons';

export default function LoginScreen(props) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const exportState = () => {
    return {
      username: username,
      password: password
    }
  }

  return(
    <div className="wrapper">
      <Logo />
      <div className="form-container">
        <form className="form" action="">
          <TextInput
            label="Usuário"
            name="username"
            onChange={ setUsername }
            value={ username }
          />
          <PasswordInput
            label="Senha"
            name="password"
            onChange={ setPassword }
            value={ password }
          />
          <FormButton icon={
            <FontAwesomeIcon icon={ faSignInAlt } />
          }
            onClick={ (ev) => {
              ev.preventDefault();
              if (props.formHandler) {
                props.formHandler(exportState());
              }
            } }
          >Fazer Login</FormButton>
        </form>
        <div className="form-links">
          <TextLink href="/login/recovery">Esqueci minha Senha</TextLink>
          <TextLink href="/login/register">Criar um novo Usuário</TextLink>
        </div>
      </div>
    </div>
  );
}
