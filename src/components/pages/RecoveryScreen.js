import { useState } from 'react';
import Logo from '../atoms/Logo';
import TextInput from '../atoms/TextInput';
import PasswordInput from '../atoms/PasswordInput';
import TextLink from '../atoms/TextLink';
import FormButton from '../atoms/FormButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

export default function RecoveryScreen(props) {
  const [username, setUsername] = useState(null);

  const exportState = () => {
    return {
      username: username
    }
  }

  return(
    <div className="wrapper">
      <Logo />
      <div className="form-container">
        <form className="form" action="">
          <TextInput
            label="Usuário ou email"
            onChange={ setUsername }
            value={ username }
          />
          <FormButton
            icon={
              <FontAwesomeIcon icon={ faEnvelope } />
            }
            onClick={ (ev) => {
              ev.preventDefault();
              if (props.formHandler) {
                props.formHandler(exportState());
              }
            } }
          >Recuperar Senha</FormButton>
        </form>
        <div className="form-links">
          <TextLink href="/login">Acessar com Usuário Existente</TextLink>
          <TextLink href="/login/register">Criar um novo Usuário</TextLink>
        </div>
      </div>
    </div>
  );
}
