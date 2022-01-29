import { useState } from 'react';
import Logo from '../atoms/Logo';
import TextInput from '../atoms/TextInput';
import PasswordInput from '../atoms/PasswordInput';
import TextLink from '../atoms/TextLink';
import FormButton from '../atoms/FormButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserPlus, faEye } from '@fortawesome/free-solid-svg-icons';

export default function RegistrationScreen(props) {
  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);
  const [email, setEmail] = useState(null);
  const [fullName, setFullName] = useState(null);

  const exportState = () => {
    return {
      username: username,
      password: password,
      email: email,
      fullName: fullName
    }
  }

  return(
    <div className="wrapper">
      <Logo />
      <div className="form-container">
        <form className="form" action="">
          <TextInput
            label="Nome Completo"
            onChange={ setFullName }
            value={ fullName }
          />
          <TextInput
            label="email"
            onChange={ setEmail }
            value={ email }
          />
          <TextInput
            label="Usuário"
            onChange={ setUsername }
            value={ username }
          />
          <PasswordInput
            label="Senha"
            onChange={ setPassword }
            value={ password }
          />
          <FormButton
            icon={
              <FontAwesomeIcon icon={ faUserPlus } />
            }
            onClick={ (ev) => {
              ev.preventDefault();
              if (props.formHandler) {
                props.formHandler(exportState());
              }
            } }
          >Criar Usuário</FormButton>
        </form>
        <div className="form-links">
          <TextLink href="/login">Acessar com Usuário Existente</TextLink>
        </div>
      </div>
    </div>
  );
}
