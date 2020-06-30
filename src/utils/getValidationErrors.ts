import { ValidationError } from 'yup';

interface Errors {
  [key: string]: string;
}

export default function getValidationErrors(erro: ValidationError): Errors {
  const validationErrors: Errors = {};

  erro.inner.forEach((error) => {
    validationErrors[error.path] = error.message;
  });

  return validationErrors;
}
