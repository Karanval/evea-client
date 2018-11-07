import {
  validator,
  buildValidations
} from 'ember-cp-validations';

export default buildValidations({
  email: {
    description: 'Correo Electrónico',
    validators: [
      validator('presence', true),
      validator('format', {
        type: 'email',
        message: 'El correo electrónico debe ser una dirección de correo electrónico válida'
      })
    ]
  },
  password: {
    description: 'Contraseña',
    validators: [
      validator('presence', true),
      validator('length', {
        min: 8,
        message: 'La contraseña es muy corta (Inserte un mínimo de 8 caracteres)'
      }),
      validator('format', {
        regex: /^(?=.*[a-z])(?=.*[A-Z]).{8,100}$/,
        message: 'La {description} debe incluir al menos una letra mayúscula, una letra minúscula.'
      })
    ]
  }
});
