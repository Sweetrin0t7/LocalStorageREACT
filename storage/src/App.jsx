import React, { useState, useEffect } from 'react';
import Formulario from './Formulario';
import Tabela from './Tabela';

export default function App() {
  const [alunos, setAlunos] = useState(() => {
    const dadosSalvos = localStorage.getItem('alunos');
    return dadosSalvos ? JSON.parse(dadosSalvos) : [];
  });

  useEffect(() => {
    localStorage.setItem('alunos', JSON.stringify(alunos));
  }, [alunos]);

  const adicionarAluno = (novoAluno) => {
    setAlunos((atual) => [...atual, novoAluno]);
  };

  return (
    <div>
      <h1>Cadastro de Alunos</h1>
      <Formulario onSubmit={adicionarAluno} />
      <Tabela alunos={alunos} />
    </div>
  );
}
