import { Label, Button, StyledForm } from './Form.styled';
import { Formik, Field } from 'formik';
import * as Yup from 'yup';

const validSchema = Yup.object().shape({
  name: Yup.string().min(2, 'Too short name!').required('Required!'),
  number: Yup.number().min(5, 'Add actual phone number!'),
});

export const ContactsForm = ({ onSubmit }) => {
  return (
    <Formik
      initialValues={{ name: '', number: '' }}
      validationSchema={validSchema}
      onSubmit={(values, actions) => {
        onSubmit(values);
        actions.resetForm();
      }}
    >
      <StyledForm>
        <Label>
          Name:
          <Field name="name" type="text" />
        </Label>
        <Label>
          Tel:
          <Field name="number" type="tel" />
        </Label>

        <Button type="submit">Add contact</Button>
      </StyledForm>
    </Formik>
  );
};
