import React from 'react';
import { render, screen } from '@testing-library/react';
import ValidEmail from './components/ValidEmail'; 

describe('Realiza a validação do Email', () => {
  it('Testando um componente, caso o email seja válido.', () => {
    const EMAIL_USER = 'email@email.com';
    render(<ValidEmail email={ EMAIL_USER } />);
    const validEmail = screen.getByText('Email Válido');
    expect(validEmail).toBeInTheDocument();
  });
  
  it('Verifica se ao digitar um email inválido uma mensagem com a cor vermelha é retornada', () => {
    const EMAIL_USER = 'mailmail';
    render(<ValidEmail email={ EMAIL_USER } />);
    const IS_INVALID_MAIL = screen.getByText('Email Inválido');
    expect(IS_INVALID_MAIL).toBeInTheDocument();
    expect(IS_INVALID_MAIL).toHaveStyle({ color: 'red' });
  });

  it('Verifica se ao digitar um email válido uma mensagem com a cor verde é retornada', () => {
    const EMAIL_USER = 'mymail@mymail.com';
    render(<ValidEmail email={ EMAIL_USER } />);
    const IS_INVALID_MAIL = screen.getByText('Email Válido');
    expect(IS_INVALID_MAIL).toBeInTheDocument();
    expect(IS_INVALID_MAIL).toHaveStyle({ color: 'green' });
  });
})