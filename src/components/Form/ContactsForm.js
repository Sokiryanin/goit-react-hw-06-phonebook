import { Label, Button, StyledForm } from './Form.styled';
import { Formik, Field } from 'formik';
import { useDispatch } from 'react-redux';
import { addContact } from 'redux/contactsSlice';
import * as Yup from 'yup';

const validSchema = Yup.object().shape({
  name: Yup.string().min(2, 'Too short name!').required('Required!'),
});

export const ContactsForm = () => {
  const dispatch = useDispatch();

  return (
    <Formik
      initialValues={{ name: '', number: '' }}
      validationSchema={validSchema}
      onSubmit={(values, actions) => {
        dispatch(addContact(values));
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
