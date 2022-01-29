export const usernameValidator = (value) => {
  return value.match(/^[a-zA-Z0-9\-_]+$/) ? true : false;
}

export const emailValidator = (value) => {
  return value.match(/^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i) ? true : false;
}

export const passwordValidator = (value) => {
  return value.length > 7;
}

export const fullNameValidator = (value) => {
  const names = value.split(' ').filter(_v => _v.length);
  if (names.length < 2) return false;

  const namesVerified = names.map(_v => _v.match(/^[a-z]+$/) ? true : false)
    .filter(_v => _v !== false);

  return names.length === namesVerified.length;
}
