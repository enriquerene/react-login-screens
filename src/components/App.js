import {
  Routes,
  Route,
} from 'react-router-dom';

import LoginScreen from './pages/LoginScreen';
import RegistrationScreen from './pages/RegistrationScreen';
import RecoveryScreen from './pages/RecoveryScreen';

export default function App(props) {

  const registerNewUser = (data) => {
    const options = (props.registrationFetchOptions
      ? props.registrationFetchOptions
      : { method: 'GET' }
    );
    fetch(props.registrationFetchURL, options)
      .then(res => { return res.json(); })
      .then(json => {
        if (props.registrationFetchSuccessCondition(json)) {
          props.registrationFetchOnSuccess({
            request: data,
            response: json
          });
        } else {
          props.registrationFetchOnFailure({
            request: data,
            response: json
          });
        }
      })
      .catch(err => { props.registrationFetchException(err) })
      .finally(() => { props.registrationFetchFinally(data) })
  };

  const recoveryPassword = (data) => {
    const options = (props.recoveryFetchOptions
      ? props.recoveryFetchOptions
      : { method: 'GET' }
    );
    fetch(props.recoveryFetchURL, options)
      .then(res => { return res.json(); })
      .then(json => {
        if (props.recoveryFetchSuccessCondition(json)) {
          props.recoveryFetchOnSuccess({
            request: data,
            response: json
          });
        } else {
          props.recoveryFetchOnFailure({
            request: data,
            response: json
          });
        }
      })
      .catch(err => { props.recoveryFetchException(err) })
      .finally(() => { props.recoveryFetchFinally(data) })
  };

  const authenticate = (data) => {
    const options = (props.authenticateFetchOptions
      ? props.authenticateFetchOptions
      : { method: 'GET' }
    );
    fetch(props.authenticateFetchURL, options)
      .then(res => { return res.json(); })
      .then(json => {
        if (props.authenticateFetchSuccessCondition(json)) {
          props.authenticateFetchOnSuccess({
            request: data,
            response: json
          });
        } else {
          props.authenticateFetchOnFailure({
            request: data,
            response: json
          });
        }
      })
      .catch(err => { props.authenticateFetchException(err) })
      .finally(() => { props.authenticateFetchFinally(data) })
  };

  return(
    <Routes>
      <Route
        path="/authentication"
        element={
          <LoginScreen
            //formHandler={ props.authenticationService.formHandler(dashboardAuthentication) }
          />
        }
      />
      <Route
        path="/recovery"
        element={
          <RecoveryScreen
            //formHandler={ props.recoveryService.formHandler }
          />
        }
      />
      <Route
        path="/register"
        element={
          <RegistrationScreen
            //formHandler={ props.registrationService.formHandler }
          />
        }
      />
    </Routes>
  )
}
