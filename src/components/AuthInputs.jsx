import {useState} from 'react';

import {styled} from 'styled-components';
import Button from "./Button.jsx";
import Input from './Input.jsx';

const ControlContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    margin-bottom: 1.5rem;
`

export default function AuthInputs() {
    const [enteredEmail, setEnteredEmail] = useState('');
    const [enteredPassword, setEnteredPassword] = useState('');
    const [submitted, setSubmitted] = useState(false);

    function handleInputChange(identifier, value) {
        if (identifier === 'email') {
            setEnteredEmail(value);
        } else {
            setEnteredPassword(value);
        }
    }

    function handleLogin() {
        setSubmitted(true);
    }

    const emailNotValid = submitted && !enteredEmail.includes('@');
    const passwordNotValid = submitted && enteredPassword.trim().length < 6;

    return (
        <div id="auth-inputs">
            <ControlContainer>
                <Input $invalid={emailNotValid}
                       type="email"
                       style={{
                           backgroundColor: emailNotValid ? 'grey' : 'aqua'
                       }}
                       label="Email"
                       onChange={(event) => handleInputChange('email', event.target.value)}></Input>
                <Input $invalid={passwordNotValid}
                       type="password"
                       label="Password"
                       onChange={(event) =>
                           handleInputChange('password', event.target.value)
                       }></Input>
            </ControlContainer>
            <div className="actions">
                <Button type="button" className="text-button">
                    Create a new account
                </Button>
                <button className='button' onClick={handleLogin}>Sign In</button>
            </div>
        </div>
    );
}
