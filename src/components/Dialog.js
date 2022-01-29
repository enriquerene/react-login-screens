import React, { useState } from 'react';

export default function Dialog(props) {
  const typeClassName = {
    'error': 'error',
    'success': 'success',
    'info': 'info',
    'default': 'info'
  }
  const className = [
    'dialog-box',
    (typeClassName[props.type] || typeClassName['default']),
    (props.isOpen ? 'open' : '')
  ].join(' ');
  return(
    <div className={ className }>
      <p>{ props.text }</p>
    </div>
  );
};
