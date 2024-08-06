export const required = (value: any): boolean | string => (value ? true : '* Required');

export const password = (pass: string): boolean | string => {
  const validate = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z])(?=.*[#?!@$%^&*-.]).{8,}$/;
  if (validate.test(pass)) {
    return true;
  }
  return 'Format password invalid';
}

export const email = (text: string): boolean | string => {
  const validate =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (!isEmpty(text)) {
    if (text && validate.test(text)) {
      return true;
    }
    return 'Format email invalid';
  }
  return '* Required';
}

export const confirmPassword = (value: string, confirm: string): boolean | string =>
  value === confirm || 'Passwords not equals';

export const between = (value: number, min: number, max: number): boolean | string => {
  return (Number(min) <= value && Number(max) >= value) || `Enter number between ${min} and ${max}`;
}

