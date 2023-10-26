import { useDispatch } from 'react-redux';
import { LoginFormContainer, Form, Input, SubmitButton, Label } from './LoginForm.styles';
import { signIn } from 'store/thunk';

const LoginForm = () => {
    const dispatch = useDispatch();

    const handleSubmit = event => {
        event.preventDefault();
        const form = event.currentTarget;
      
        dispatch(
            signIn({
                email: form.elements.email.value,
                password: form.elements.password.value,
            })
        );
        form.reset();
    };

    return (
        <LoginFormContainer>
            <Form onSubmit={handleSubmit} autoComplete="off">
                <Label>
                    Email:
                    <Input
                        type="email"
                        name="email"
                        required
                        // value={formData.name}
                        // onChange={handleChange}
                        placeholder="Enter your email"
                        pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
                    />
                </Label>
                <Label>
                    Password:
                    <Input
                        type="password"
                        name="password"
                        // id={phoneId}
                        // pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
                        // title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                        required
                        // value={formData.number}
                        // onChange={handleChange}
                        placeholder="Enter password"
                    />
                </Label>
                <SubmitButton type="submit">LOGIN</SubmitButton>
            </Form>
        </LoginFormContainer>
    );
};

export default LoginForm