import { useForm } from "react-hook-form";

import Button from "../../atoms/button";
import TextField from "../../atoms/text-field";
import faLang from "../../../statics/values/langs/fa.json";

import { StyledForm } from "./signup-form.styles";

function SignupForm(props) {
  const { handleSubmit, register } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)} {...props}>
      <TextField
        id="username"
        type="text"
        formRef={register("username", { required: true })}
        label={faLang.username}
      />
      <TextField
        id="password"
        type="password"
        formRef={register("password", { required: true })}
        label={faLang.password}
      />
      <TextField
        id="password_confirmation"
        type="password"
        formRef={register("password_confirmation", { required: true })}
        label={faLang.password_confirmation}
      />
      <Button label={faLang.signup.button} isLoading={false} expanded />
    </StyledForm>
  );
}

export default SignupForm;
