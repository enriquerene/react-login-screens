import React from 'react';

export default function FormButton(props) {
  return(
    <div className="button-container">
      <button
        className="form-button"
        onClick={ props.onClick }
      >
        <span className="text-container">{ props.text ? props.text : props.children }</span>
        <span className="icon-container">{ props.icon }</span>
      </button>
    </div>
  );
}
