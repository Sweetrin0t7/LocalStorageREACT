import React from 'react';

export default function Tabela({ alunos }) {
  if (alunos.length === 0) return <p>Nenhum aluno cadastrado.</p>;

  return (
    <table >
      <thead>
        <tr>
          <th>Nome</th>
          <th>E-mail</th>
          <th>Idade</th>
        </tr>
      </thead>
      <tbody>
        {alunos.map((aluno, index) => (
          <tr key={index}>
            <td>{aluno.nome}</td>
            <td>{aluno.email}</td>
            <td>{aluno.idade}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
