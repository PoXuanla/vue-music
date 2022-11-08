import { useForm } from "vee-validate";
import * as yup from "yup";

export default function useLoginValid() {
  //define validate schema
  const schema = yup.object({
    account: yup.string().required(),
    password: yup.string().required(),
  });
  const { useFieldModel, handleSubmit } = useForm({
    validationSchema: schema,
  });
  const [account, password] = useFieldModel(["account", "password"]);
  return { account, password, handleSubmit };

  //   function onInvalidSubmit({ errors }): void {
  //     console.log(JSON.stringify(errors));
  //     loginErrMsg.value = JSON.stringify(errors);
  //     showModal.value = true;
  //   }

  //   const onSubmit = handleSubmit((values) => {
  //     console.log(values);
  //   }, onInvalidSubmit);

  //   const closeModal = (): void => {
  //     showModal.value = false;
  //   };
}
