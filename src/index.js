import React, { useState } from 'react';
import { render } from 'react-dom';

import authentication from './services/login/authentication';
import registration from './services/login/registration';
import recovery from './services/login/recovery';
import AppWrapper from './components/AppWrapper';

import './index.css';

render(
  <AppWrapper
    authenticationService={ authentication }
    registrationService={ registration }
    recoveryService={ recovery }
  />,
  document.getElementById('root')
);
