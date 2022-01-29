import React, { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import Dialog from './Dialog';

/* Make Dialog independent of App */

export default function AppWrapper(props) {
  const [isDialogOpen, setDialogState] = useState(false);
  const [dialogType, setDialogType] = useState('');
  const [dialogText, setDialogText] = useState('');

  const callDialog = (text, type = '') => {
    setTimeout(() => {
      setDialogState(false);
    }, 4500);
    setDialogText(text);
    setDialogType(type);
    setDialogState(true);
  }

  return(
    <BrowserRouter>
      <Dialog
        isOpen={ isDialogOpen }
        type={ dialogType }
        text={ dialogText }
      />
      <App
        callDialog={ callDialog }
        registrationService={ props.registrationService }
        registrationFetchURL={ props.registrationFetchURL }
        registrationFetchOptions={ props.registrationFetchOptions }
        registrationFetchSuccessCondition={ props.registrationFetchSuccessCondition }
        registrationFetchOnSuccess={ props.registrationFetchOnSuccess }
        registrationFetchOnFailure={ props.registrationFetchOnFailure }
        registrationFetchException={ props.registrationFetchException }
        registrationFetchFinally={ props.registrationFetchFinally }
        authenticationService={ props.authenticationService }
        authenticationFetchURL={ props.authenticationFetchURL }
        authenticationFetchOptions={ props.authenticationFetchOptions }
        authenticationFetchSuccessCondition={ props.authenticationFetchSuccessCondition }
        authenticationFetchOnSuccess={ props.authenticationFetchOnSuccess }
        authenticationFetchOnFailure={ props.authenticationFetchOnFailure }
        authenticationFetchException={ props.authenticationFetchException }
        authenticationFetchFinally={ props.authenticationFetchFinally }
        recoveryService={ props.recoveryService }
        recoveryFetchURL={ props.recoveryFetchURL }
        recoveryFetchOptions={ props.recoveryFetchOptions }
        recoveryFetchSuccessCondition={ props.recoveryFetchSuccessCondition }
        recoveryFetchOnSuccess={ props.recoveryFetchOnSuccess }
        recoveryFetchOnFailure={ props.recoveryFetchOnFailure }
        recoveryFetchException={ props.recoveryFetchException }
        recoveryFetchFinally={ props.recoveryFetchFinally }
      ></App>
    </BrowserRouter>
  );
}

