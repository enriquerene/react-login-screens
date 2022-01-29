import {
    usernameValidator,
    passwordValidator
} from '../forms/validators';

export default {
  formHandler: (callback) => {
    return (data) => {
      callback(data);
    }
  }
};
