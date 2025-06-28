import React from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

const schema = z.object({
  nome: z.string().min(1, 'Nome é obrigatório'),
  email: z.string().email('E-mail inválido'),
  idade: z
    .number({ invalid_type_error: 'Idade deve ser um número' })
    .min(18, 'Idade mínima é 18')
    .max(120, 'Idade máxima é 120'),
});

export default function Formulario({ onSubmit }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(schema),
    mode: 'onTouched',
  });

  const enviar = (dados) => {
    onSubmit(dados);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(enviar)}>
      <div>
        <label>Nome:</label>
        <input type="text"{...register('nome')}/>
        {errors.nome && ( <p>{errors.nome.message}</p>)}
      </div>

      <div>
        <label>E-mail:</label>
        <input type="email"{...register('email')}/>
        {errors.email && (<p>{errors.email.message}</p>)}
      </div>

      <div>
        <label>Idade (18 a 60):</label>
        <input type="number" {...register('idade', { valueAsNumber: true })}/>
        {errors.idade && (<p>{errors.idade.message}</p>)}
      </div>

      <button type="submit"> Cadastrar </button>
    </form>
  );
}
