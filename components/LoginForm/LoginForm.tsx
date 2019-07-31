import { useState } from 'react';
import { Button } from 'puppy-components';
import { loginUser } from '../../lib/auth';

interface ILoginFormState {
  email: string;
  password: string;
}

const LoginForm: React.SFC = () => {
  const [formValues, setFormValues] = useState<ILoginFormState>({
    email: '',
    password: ''
  });
  const handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void = e => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };
  const handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void = e => {
    e.preventDefault();
    const { email, password } = formValues;
    loginUser(email, password);
    console.log(formValues);
  };
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input
          type="email"
          name="email"
          placeholder="email"
          onChange={handleChange}
          value={formValues.email}
        />
      </div>
      <div>
        <input
          type="password"
          name="password"
          placeholder="password"
          onChange={handleChange}
          value={formValues.password}
        />
      </div>
      <Button type="submit" text="Submit" size="medium">
        Submit
      </Button>
    </form>
  );
};

export default LoginForm;
