import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';

import Button from '../../atoms/button';
import TextField from '../../atoms/text-field';
import faLang from '../../../statics/values/langs/fa.json';

import { StyledLoginForm } from './login-form.styles';

function LoginForm(props) {
  const { handleSubmit, register } = useForm();
  const history = useHistory();

  const onLoginSubmit = (data) => {
    console.log(data);
    history.push('/panel/dashboard');
  };

  return (
    <StyledLoginForm onSubmit={handleSubmit(onLoginSubmit)} {...props}>
      <TextField
        id="username"
        type="text"
        label={faLang.username}
        formRef={register('username', { required: true })}
      />
      <TextField
        id="password"
        type="password"
        label={faLang.password}
        formRef={register('password', { required: true })}
      />
      <Button label={faLang.login.button} isLoading={false} expanded />
    </StyledLoginForm>
  );
}

export default LoginForm;
