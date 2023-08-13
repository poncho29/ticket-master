import React from 'react';
import { useForm } from 'react-hook-form';

export const SignUpForm = () => {
  const { formState: { errors }, register, handleSubmit, reset } = useForm();

  const handleSubmitFrom = (data) => {
    console.log(data);
  }

  return (
    <form onSubmit={handleSubmit(handleSubmitFrom)}>
      <label>
        Nombre
        <input
          {...register('name'), {required: true}}
        />
      </label>
      <label>
        Edad
        <input
          {...register('age'), {required: true}}
        />
      </label>
      <label>
        Correo Electrónico
        <input
          type='email'
          {...register('email'), {required: true}}
        />
      </label>
      <label>
        Código Postal
        <input
          type='number'
          {...register('zipcode'), {required: true}}
        />
      </label>
      <label>
        Teléfono
        <input
          type='tel'
          {...register('phone'), {required: true}}
        />
      </label>

      <div>
        <button type='submit'>Registrarse</button>
        <button type='button'>Cancelar</button>
      </div>
    </form>
  )
}
