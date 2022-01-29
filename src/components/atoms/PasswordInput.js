import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

const ToggleableIcon = function(props) {
  if (props.open) {
    return <FontAwesomeIcon icon={ faEye } onClick={ props.onClick } />;
  }
  return <FontAwesomeIcon icon={ faEyeSlash } onClick={ props.onClick } />;
}

export default function PasswordInput(props) {
  const [value, setValue] = useState(props.value || '');
  const [isVisible, setVisibility] = useState(false);

  const toggleVisibilityState = () => {
    setVisibility(!isVisible);
  }

  useEffect(() => {
    if (props.onChange) {
      props.onChange(value);
    }
  });

  return(
    <div>
      <label htmlFor="">{ props.label }</label>
      <div className="input-container">
        <input
          className="password-input"
          type={ isVisible ? "text" : "password" }
          placeholder={ props.placeholder }
          onChange={ (ev) => {
            setValue(ev.target.value);
          } }
          value={ value }
          name={ props.name }
        />
        <div className="icon-input">
          <ToggleableIcon
            open={!isVisible}
            onClick={ toggleVisibilityState }
          />
        </div>
      </div>
    </div>
  );
}
