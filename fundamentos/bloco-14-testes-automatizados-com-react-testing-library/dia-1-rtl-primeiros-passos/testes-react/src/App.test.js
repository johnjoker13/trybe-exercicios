// App.test.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';
import ValidEmail from './components/ValidEmail';


// Adicione esse teste.
describe('Verifica se o campo de email é validado após clicar no botão', () => {
  it('Verificando se o botão e o campo email estão funcionando.', () => {
    render(<App />);
    const EMAIL_USER = 'email@email.com';
    const textEmail = screen.getByTestId('id-email-user');
    expect(textEmail).toBeInTheDocument();
    expect(textEmail).not.toHaveTextContent('Valor:');

    const btnSend = screen.getByTestId('id-send');
    const inputEmail = screen.getByLabelText('Email');
    userEvent.type(inputEmail, EMAIL_USER);
    userEvent.click(btnSend);

    expect(inputEmail).toHaveValue('');
    expect(textEmail).not.toHaveTextContent(`Valor: ${ EMAIL_USER }`);
  });
});