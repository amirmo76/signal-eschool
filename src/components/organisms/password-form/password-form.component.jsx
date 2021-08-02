import { useForm } from 'react-hook-form';
import TextField from '../../atoms/text-field';
import Button from '../../atoms/button';
import { Form } from './password-component.styles';

import faLang from '../../../statics/values/langs/fa.json';

function PasswordForm() {
  const { handleSubmit, register } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <TextField
        label={faLang.password}
        type="password"
        id="password"
        formRef={register('password', { required: true })}
      />

      <TextField
        label={faLang.password_confirmation}
        type="password"
        id="password_confirmation"
        formRef={register('password_confirmation', { required: true })}
      />

      <TextField
        label={faLang.new_password}
        type="password"
        id="new_password"
        formRef={register('new_password', { required: true })}
      />

      <Button expanded label={faLang.update} type="submit" />
    </Form>
  );
}

export default PasswordForm;
