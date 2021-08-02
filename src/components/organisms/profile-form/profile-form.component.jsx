import { useForm } from 'react-hook-form';
import TextField from '../../atoms/text-field';
import Button from '../../atoms/button';
import { Form } from './profile-form.styles';

import faLang from '../../../statics/values/langs/fa.json';
import { user } from './dummy.data.json';

function ProfileForm() {
  const { handleSubmit, register } = useForm({
    defaultValues: {
      name: user.name,
      last_name: user.last_name,
      phone: user.phone,
    },
  });
  const onSubmit = (data) => console.log(data);

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <TextField
        id="name"
        label={faLang.name}
        formRef={register('name', { required: true })}
      />

      <TextField
        id="last_name"
        label={faLang.last_name}
        formRef={register('last_name', { required: true })}
      />

      <TextField
        id="phone"
        label={faLang.phone}
        formRef={register('phone', { required: true })}
      />

      <Button type="submit" label={faLang.update} expanded />
    </Form>
  );
}

export default ProfileForm;
