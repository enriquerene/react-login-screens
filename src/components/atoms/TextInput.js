import { useState, useEffect } from 'react';

export default function TextInput(props) {
  const [value, setValue] = useState(props.value || '');

  useEffect(() => {
    if (props.onChange) {
      props.onChange(value);
    }
  });

  return(
    <div className={ props.className }>
      <label htmlFor="">{ props.label }</label>
      <div className="input-container">
        <input
          className="text-input"
          type="text"
          placeholder={ props.placeholder }
          onChange={ (ev) => {
            setValue(ev.target.value);
          } }
          value={ value }
          name={ props.name }
        />
      </div>
    </div>
  );
}
