import { useDispatch } from 'react-redux';
import { RegisterFormContainer, Form, Input, SubmitButton, Label } from './RegisterForm.styles';
import { signUp } from 'store/thunk';

const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.currentTarget;
      
    dispatch(
      signUp ({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

    return (
        <RegisterFormContainer>
            <Form onSubmit={handleSubmit} autoComplete="off">
                <Label>
                    Name:
                    <Input
                        type="text"
                        name="name"
                        required
                        // value={formData.name}
                        // onChange={handleChange}
                        placeholder="Enter your name"
                        pattern="^[^\d]+$"
                    />
                </Label>
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
                <SubmitButton type="submit">SIGN UP</SubmitButton>
            </Form>
        </RegisterFormContainer>
    );
};

export default RegisterForm